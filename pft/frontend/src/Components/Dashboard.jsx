import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarComp from './CalendarComponent';
import CalendarNew from './CalendarNew';
import SimpleCalendar from './SimpleCalendar';
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{

    const fetchUser = async () => {
      try {
        // Retrieve the token from local storage (or wherever you store it)
        localStorage.getItem("auth-token")
        const token = localStorage.getItem("auth-token")

        console.log(token)
        if (!token) {
          setError("No authentication token found. Please log in.");
          return;
        }

        // Send the GET request with the token in the headers
        const res = await axios.get("http://localhost:8000/api/auth/getuser", {
        
          headers: {
            "auth-token": token, // Send the token as part of the headers
          },
        });

        // Set the user data in state
        setUser(res.data);
        console.log(res.data)
      } catch (error) {
        // Handle any error that occurs
        setError("Failed to fetch user data.");
        console.error(error);
      }
    };

    fetchUser(); // Call the function when the component mounts
  },[])
  return (
    <div className='w-full'>
      {error && <p>{error}</p>}
      <h1>Welcome, {user._id}</h1>
      <SimpleCalendar />
    </div>
  )
}

export default Dashboard
