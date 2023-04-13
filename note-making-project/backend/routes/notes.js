const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");

const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

//route1: get allthe notes /api/notes/fetchallnotes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.json({ error });
  }
});

//routes:2 to add notes into database /api/notes/addallnotes
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter atleast 5 characters!").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //requesting these values from body
      const { title, description, tag } = req.body;
      //validating all inputs
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //creating a note and saving into db with userid
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      res.json({ error });
    }
  }
);

//routes:3 update note /api/notes/updatenote login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    //requesting these values from body
    const { title, description, tag } = req.body;
    //validating all inputs
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors });
    }

    //creating a note and saving into db with userid
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).json({ errors: "Not Found User" });
    }

    //different user trying to update
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ errors: "Not allowed" });
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.json({ error });
  }
});

//routes:4 delete an existing note /api/notes/updatenote login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).json({ errors: "Not Found" });
    }

    //different user trying to update
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ errors: "Not allowed" });
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", note: note });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
