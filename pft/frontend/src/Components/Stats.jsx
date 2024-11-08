import React, { useState, useEffect } from "react";
import Axios from "axios";
import ExpensesStats from "./Stats/ExpensesStats";
import IncomeStats from "./Stats/IncomeStats";
import SavingStats from "./Stats/SavingStats";

const Stats = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [savings, setSavings] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month

  // Function to handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Function to filter data based on selected month
  const filterByMonth = (data) => {
    return data.filter((item) => {
      const itemDate = new Date(item.date); // Assuming each item has a 'date' property
      return itemDate.getMonth() + 1 === selectedMonth;
    });
  };

  return (
    <div className="mx-10">
      <div className="mb-4">
        <label htmlFor="month">Select Month: </label>
        <select id="month" value={selectedMonth} onChange={handleMonthChange}>
          {[...Array(12)].map((_, index) => (
            <option key={index} value={index + 1}>
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      <ExpensesStats data={filterByMonth(expenses)} />
      <IncomeStats data={filterByMonth(incomes)} />
      <SavingStats data={filterByMonth(savings)} />
    </div>
  );
};

export default Stats;
