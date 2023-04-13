import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";
const Home = (props) => {
  const {showAlert}=props;
  return (
    <div className="container my-3">
      <AddNote showAlert={showAlert}/>
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;
