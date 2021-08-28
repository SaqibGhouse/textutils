import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(27, 28, 77)'
      showAlert(': Dark mode has been enables', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(': Light mode has been enables', 'success')
    }
  }
  return (
    <>
      <Router>
        {/* Navbar */}
        < Navbar title="TextUtils" aboutText="About TextUtils" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Switch>
            <Route exact path="/about" >
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
            <About />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
