import { useState, createContext, useContext } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import AdminDashboard from "./Components/AdminDashboard";
import CategoryContext, { CategoryProvider } from "./Context/CategoryContext";
import EventModal from "./Components/EventModal";
import { StatsProvider } from "./Context/StatsContext";
import ExpensesStats from "./Components/Stats/ExpensesStats";
import Chart from "./Components/Chart";
import IncomeStats from "./Components/Stats/IncomeStats";
import SavingStats from "./Components/Stats/SavingStats";

function App() {
  const Context = createContext();

  return (
    <>
      <div>
        <CategoryProvider>
          <StatsProvider>
            <Router>
              <header>
                <Header />
              </header>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<Aboutus />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/event" element={<EventModal />} />
                {localStorage.getItem("token") ? (
                  <Route path="/admindashboard" element={<AdminDashboard />} />
                ) : (
                  <Route path="/error" element={<Error />} />
                )}
                {localStorage.getItem("token") ? (
                  <Route path="/dashboard" element={<Dashboard />} />
                ) : (
                  <Route path="/error" element={<Error />} />
                )}

                <Route path="/expenses-stats" element={<ExpensesStats />} />
                <Route path="/incomes-stats" element={<IncomeStats />} />
                <Route path="/savings-stats" element={<SavingStats />} />
                <Route path="/chart" element={<Chart />} />
              </Routes>
            </Router>
          </StatsProvider>
        </CategoryProvider>
      </div>
    </>
  );
}

export default App;
