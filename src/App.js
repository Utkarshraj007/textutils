import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
    const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
      },1000);
    }
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","dark");
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} showalert={showAlert}/>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
