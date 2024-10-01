import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarComp from './CalendarComponent';
import CalendarNew from './CalendarNew';
import SimpleCalendar from './SimpleCalendar';

const Dashboard = () => {
  return (
    <div className='w-full'>
      <SimpleCalendar />
    </div>
  )
}

export default Dashboard
