import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useState } from "react";
import Alert from "./Components/Alert";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <NoteState>
      <BrowserRouter>
        <div>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            <Route path="*" element={<><h1>no page availabe</h1></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
