import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import NoteContext from "../Context/Notes/NoteContext";
import NoteItem from "./NoteItem";
function Notes(props) {
  const navigate = useNavigate();
  const con = useContext(NoteContext);
  const { notes, getAllNotes, editNote} = con;
  useEffect(() => {
    if(localStorage.getItem('token')!=null){
      getAllNotes();
    }else{
      // setTimeout(()=>{
        navigate('/login');
      // },10000);
    }
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const btref = useRef(null);
  const [note, setNote] = useState({id:"",etitle:"", edescription:"", etag:"default"});
  const updateNote =async (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  };
  
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    btref.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
    
      <button
        type="button"
        ref={ref}
        id = "btn"
        className="d-none btn btn-primary hidden"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title {note.etitle.length<3?": Atleast 3 characters!!":""}
                  </label>
                  <input
                    type="text"
                    name="etitle"
                    id="etitle"
                    value={note.etitle}
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={3}
                    required
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">
                    Description {note.edescription.length<5?": Atleast 5 characters!!":""}
                  </label>
                  <input
                    type="text"
                    name="edescription"
                    id="edescription"
                    value={note.edescription}
                    className="form-control"
                    onChange={onChange}
                    minLength={5}
                    required
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="etag"
                    id="etag"
                    value={note.etag}
                    className="form-control"
                    onChange={onChange}
                    />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={btref}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length<3||note.edescription.length<5}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center">Your Notes</h2>
      <div className="container d-flex flex-row flex-wrap justify-content-center">
        {notes.length === 0 && <><p className="text-center">No notes to display</p></>}
        {notes.map((note, i) => {
          return <NoteItem key={i} updateNote={updateNote} note={note} showAlert={props.showAlert} />;
        })}
      </div>
    </>
  );
}

export default Notes;
