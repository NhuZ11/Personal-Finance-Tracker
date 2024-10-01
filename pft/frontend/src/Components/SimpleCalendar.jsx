import React, { useState } from "react";

// Helper function to get the number of days in a month
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate(); // month is 0-indexed
};

// Helper function to get the day of the week for the first day of the month
const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

const SimpleCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Extract year, month, and day from the currentDate state
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed month
  const today = currentDate.getDate();
  
  // Calculate number of days in the selected month
  const daysInMonth = getDaysInMonth(month, year);
  
  // Calculate the starting day of the week for the selected month
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  
  // Generate an array of days for the selected month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Create empty slots for days before the first day of the month
  const emptySlots = Array.from({ length: firstDayOfMonth }, () => null);

  // Handle moving to the previous month
  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonth = prevDate.getMonth() - 1;
      if (prevMonth < 0) {
        return new Date(prevDate.getFullYear() - 1, 11); // Move to December of the previous year
      }
      return new Date(prevDate.getFullYear(), prevMonth);
    });
  };

  // Handle moving to the next month
  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      if (nextMonth > 11) {
        return new Date(prevDate.getFullYear() + 1, 0); // Move to January of the next year
      }
      return new Date(prevDate.getFullYear(), nextMonth);
    });
  };

  // Handle click event on a day
  const handleDayClick = (day) => {
    // Log the selected date (year, month, and day) to the console
    const selectedDate = new Date(year, month, day);
    console.log(`Selected Date: ${selectedDate.toDateString()}`);
  };

  return (
    <div className="bg-white md:py-8 px-4 lg:max-w-7xl lg:mx-auto lg:px-8">
      {/* Calendar Header with Previous, Current, and Next Month Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePreviousMonth}
          className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded"
        >
          Previous
        </button>
        <p className="text-4xl font-bold text-gray-800">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </p>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded"
        >
          Next
        </button>
      </div>

      {/* Days of the week */}
      <div className="inline-flex space-x-28 items-start justify-start pr-24 h-full w-full">
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
          <p key={day} className="w-12 h-full text-sm font-medium text-gray-800 uppercase">
            {day}
          </p>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mt-4">
        {/* Empty slots before the first day */}
        {emptySlots.map((_, index) => (
          <div key={`empty-${index}`} className="w-40 h-40 border border-gray-200"></div>
        ))}

        {/* Days of the current month */}
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex items-start justify-start w-40 h-40 pl-2 pr-32 pt-2.5 pb-24 border border-gray-200 cursor-pointer ${
              day === today && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()
                ? "bg-blue-100 text-blue-800 font-bold"
                : "text-gray-800"
            }`}
            onClick={() => handleDayClick(day)}
          >
            <p className="text-sm font-medium">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCalendar;
