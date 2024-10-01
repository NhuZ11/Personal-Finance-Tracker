import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <div>
      <Calendar
        value={value}
        onChange={onChange}
        onClickDay={showModal} 
        className='.custom-calendar'
      />

      {/* Modal Implementation */}
      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <div className='flex'>
            <h3 className='bg-green-200'> Enter the data.</h3>
            <button className='bg-red' onClick={closeModal}>X</button>
            </div>
            <h3>Selected Date</h3>
            <p>{selectedDate.toDateString()}</p>  {/* Display selected date */}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComp;

const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '10px',
  textAlign: 'center'
};
