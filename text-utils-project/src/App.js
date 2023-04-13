
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Alert from "./Alert";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.getElementsByTagName('body')[0].className="bg-dark"; 
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.getElementsByTagName('body')[0].className="bg-light"; 
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div className={`text-${mode === "light" ? "dark" : "light"} bg-${mode}`}>
        <Header title="ReactUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} active={true} />}
          />
          <Route
            exact
            path="/"
            element={
              <Form
                heading="Enter the text to analyse"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        <Footer mode={mode}/>
      </div>
    </Router>
  );
}
