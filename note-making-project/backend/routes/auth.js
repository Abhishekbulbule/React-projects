const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Thisisasecret";
const fetchUser = require("../middleware/fetchUser");

router.use(express.json());
//create a user using : post '/api/auth/createuser'. doesnt require auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name!").isLength({ min: 2 }),
    body("email", "Enter a valid email!").isEmail(),
    body("password", "Password must be atleast 8 characters!").isLength({
      min: 8,
    }),
    body("cpassword", "Password must be same!").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    //checking for any error regarding unique email and
    let success = true;
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({success, errors: errors.array() });
    }
    //save play using try catch while user creation and saving into database
    
    try {
      let us = await User.findOne({email:req.body.email});
      
      if (us) {
        success = false;
        return res.status(400).json({success, errors: "Email already exists!!" });
      }
      if(req.body.password !== req.body.cpassword){
        success = false;
        return res.status(400).json({success, errors: "Password must be same!!" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({success, authToken });
    } catch (e) {
      //catch error
      success=false;
      res.json({success, message: "Internal Server Error occured" });
    }
  }
);

//authenticate a user using: POST "/api/auth/login".
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters").exists(),
  ],
  async (req, res) => {
    let success = true;
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success=false;
        return res
        .status(400)
        .json({ success, errors: "Plz try to login with correct credentials" });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        success=false;
        return res
          .status(400)
          .json({ success, errors: "Plz try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({success, authToken });
    } catch (e) {
      success = false;
      res.json({success, message: "Internal Server Error Occurred" });
    }
  }
);

//route:3 get user details using post"/api/auth/getuser . login required

router.post("/getuser", fetchUser, async (req, res) => {
    //with fetchUser middleware used to fetch user id from auth token created in /login route
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (e) {
    res.json({ message: "Internal Server Error Occurred" });
  }
});

module.exports = router;
