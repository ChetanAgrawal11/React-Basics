// import logo from "./logo.svg";

import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Form from "./components/Form";
import Navbar2 from "./components/Navbar2";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// React is a JavaScript library for rendering user interfaces (UI).

// // Combining of the function together in react Imp -- All function must be written only starting with Uppercase letter
// function App1() {
//   return (
//     <>
//       <div classNamenameName="c1">
//         <h1> These is the combining of the function together</h1>
//       </div>
//     </>
//   );
// }
function App() {
  const [mode, EnableMode] = useState("light");
  const [alert, setalert] = useState(null);

  function alertfun(message, type) {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  function changing() {
    if (mode === "light") {
      EnableMode("dark");
      document.body.style.backgroundColor = "grey";
      alertfun("Dark Mode is being Enabled", "success");
      document.title = "TextUtil - Dark Mode";
    } else {
      EnableMode("light");
      document.body.style.backgroundColor = "white";
      alertfun("Light Mode is being Enabled", "success");
      document.title = "TextUtil - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar2 mode={mode} change={changing} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<Form alertfun={alertfun} mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
