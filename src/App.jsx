import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import ScanningCV from './Pages/Scanning-CV'
import ResultsCV from './Pages/Results-CV'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
     <>
         <Routes>
               <Route path="/" element={<LandingPage/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/Scanning-CV" element={<ScanningCV/>}/>
         </Routes>
     </>
  )
}

export default App
