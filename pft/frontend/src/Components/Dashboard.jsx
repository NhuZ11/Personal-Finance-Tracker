import React, { useEffect, useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarComp from './CalendarComponent';
import CalendarNew from './CalendarNew';
import SimpleCalendar from './SimpleCalendar';
import axios from "axios";
import CategoryContext from '../Context/CategoryContext';
import Stats from './Stats';
import Chart from './Chart';
import Comparison from './Comparison';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("Dashboard"); // State to track active section
  const { categories, selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found. Please log in.");
          return;
        }

        const res = await axios.get("http://localhost:8000/api/auth/getuser", {
          headers: {
            "auth-token": token,
          },
        });

        setUser(res.data);
      } catch (error) {
        setError("Failed to fetch user data.");
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <SimpleCalendar />;
      case "Stats":
        return <Stats />;
      case "Profile":
        return <div><h2>User Profile</h2><p>Username: {user.username}</p> <Comparison /> </div>;
      case "Chart":
        return <Chart />;
      default:
        return <SimpleCalendar />;
    }
  };

  return (
    <div className='w-full'>
      {error && <p>{error}</p>}

      {/* Top Bar with Buttons */}
      <div className="top-bar flex justify-center ">
        <button className='bg-green-200 p-2 m-2' onClick={() => setActiveSection("Dashboard")}>Dashboard</button>
        <button className='bg-green-200 p-2 m-2' onClick={() => setActiveSection("Stats")}>Stats</button>
        <button className='bg-green-200 p-2 m-2' onClick={() => setActiveSection("Profile")}>Profile</button>
        <button className='bg-green-200 p-2 m-2' onClick={() => setActiveSection("Chart")}>Chart</button>
      </div>

      {/* Render the active section */}
      <h1 className='ms-[50px] text-xl font-bold'>Welcome, {user.username}</h1>
      {renderSection()}
    </div>
  );
};

export default Dashboard;
