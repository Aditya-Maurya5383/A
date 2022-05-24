import "./App.css";
import About from "./Components/About";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
 
      <Router>
        <Navbar title="Brand Name" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/"  element={ <TextForm heading="Enter The Text To Analyze" mode={mode} />}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
             
            
          </Routes>
        </div>
      </Router>

  );
}


export default App;

