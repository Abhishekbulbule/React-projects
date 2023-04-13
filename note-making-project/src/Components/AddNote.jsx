import React, { useContext, useRef } from "react";
import NoteContext from "../Context/Notes/NoteContext";
export default function AddNote(props) {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const titleRef = useRef();
  const descRef = useRef();
  const tagRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    const note = {
      title: titleRef.current.value,
      description: descRef.current.value,
      tag: tagRef.current.value,
    };
    const adding = await addNote(note.title, note.description, note.tag);
    if(adding === "success"){
      titleRef.current.value="";
      descRef.current.value="";
      tagRef.current.value="";
      props.showAlert("Note added successfully!", "success");
    }  
     
  };

  return (
    <>
      <div className="container mb-3 col-11">
        <form onSubmit={handleClick}>
          <h2 className="text-center">Add Notes</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title 
            </label>
            <input
              id="title"
              ref={titleRef}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              minLength={3}
              required
              />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              ref={descRef}
              type="text"
              className="form-control"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Tag
            </label>
            <input ref={tagRef} type="text" className="form-control" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
