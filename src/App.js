import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/




function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const [mode, setmode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#042743"
      showalert("Dark mode enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      showalert("light mode enabled", "success")


    }
  }
  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextEditor" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
         {/*<Routes>
            <Route path="/about" element={<About />} />*/}

            <Textform showalert={showalert} heading="Enter text to Analyse " mode={mode} />


          {/*</Routes>*/}

        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;

