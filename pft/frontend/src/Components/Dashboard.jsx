import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarComp from './CalendarComponent';
import CalendarNew from './CalendarNew';

const Dashboard = () => {
  return (
    <div className='w-full'>
      <CalendarNew />
    </div>
  )
}

export default Dashboard
