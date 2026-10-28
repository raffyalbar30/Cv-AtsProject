import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import ScanningCV from './Pages/Scanning-CV'
import ResultsCV from './Pages/Results-CV'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFoundPage from './Layouts/404';

function App() {

  return (
     <>
         <Routes>
               <Route path="/" element={<LandingPage/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/Scanning-CV" element={<ScanningCV/>}/>
               <Route path="*" element={<NotFoundPage />} />
         </Routes>
     </>
  )
}

export default App
