import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121d48";
      showAlert("Dark Mode Enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={() => toggleMode()} />
        {alert && <Alert alert={alert} />}
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
            </Router> */}


        <Navbar title="TextUtils" mode={mode} toggleMode={() => toggleMode()} />
        {alert && <Alert alert={alert} />}
        <div className="container my-3">
        <TextForm
        heading="Enter the text to analyze"
        mode={mode}
        showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
