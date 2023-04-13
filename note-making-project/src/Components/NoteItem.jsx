import React, { useContext } from "react";
import NoteContext from '../Context/Notes/NoteContext'


function NoteItem(props) {
  const context = useContext(NoteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;

  return (
    <div>
      <div className="card m-2" style={{width:"20rem"}}>
        <div className="card-body">
          <h5 className="card-title text-truncate">{note.title}</h5>
          <p className="card-text text-truncate">{note.description}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary" onClick={()=>{updateNote(note)}}>
              <i className="fa-sharp fa-regular fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger"onClick={()=>{deleteNote(note._id);props.showAlert("Deleted note", "success")}}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
