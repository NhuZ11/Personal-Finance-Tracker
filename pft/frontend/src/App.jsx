import { useState, createContext, useContext, } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Components/Home'
import Header from './Components/Header';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import AdminDashboard from './Components/AdminDashboard';
import CategoryContext, { CategoryProvider } from './Context/CategoryContext';
import EventModal from './Components/EventModal';

function App() {
  const Context = createContext();

  return (
    <>
     <div>
      <CategoryProvider>
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
          <Route path="/event" element={<EventModal />} />
          {localStorage.getItem("token") ? <Route path="/admindashboard" element={<AdminDashboard />} />: <Route path="/error" element={<Error />} /> }
          {localStorage.getItem("token") ? <Route path="/dashboard" element={<Dashboard />} />: <Route path="/error" element={<Error />} /> }
         
        </Routes>

      </Router>
      </CategoryProvider>
     </div>
    </>
  )
}

export default App
