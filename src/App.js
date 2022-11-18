import React, { useState } from 'react'

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from './component/Home';
import About from './component/About';
import NoteState from './context/notes/NoteState';
import Login from './component/Login';
import Signup from './component/Signup';
import Alert from './component/Alert';
import Navbar from './component/Navbar';

export default function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <BrowserRouter>
             <Navbar/>
            <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home showAlert ={showAlert}/>}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/login" element={<Login showAlert ={showAlert} />}></Route>
            <Route exact path="/signup" element={<Signup showAlert ={showAlert}/>}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
      
    </>
  )
}
