import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { Portfolio } from "./components/Portfolio.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState , useEffect } from "react";
import ModalSecret from "./components/Secrets";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const myKey = "fluffy"
  let keyList = ""  
  useEffect(()=> {
    document.addEventListener('keydown', detectedKey,true)
  },)

  const detectedKey = (e) => {
    keyList += e.key;
    console.log("clicked: ", e.key)
    if (myKey === keyList) {
      setModalOpen(true);
    }
    else{
      setTimeout(()=>{
        keyList = "";
      },2000)

      
    }
  }
  return (
    <Router>
    <NavbarComponent/>
     <div className="App">
      {modalOpen && <ModalSecret setOpenModal={setModalOpen} />}
    </div>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
      </Routes>
  </Router>

  )
}