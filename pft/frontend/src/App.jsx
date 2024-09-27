import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Components/Home'
import Header from './Components/Header';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
 

  return (
    <>
     <div>
      
      <Router>
        <header>
          <Header />
        </header>

        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </Router>
     </div>
    </>
  )
}

export default App
