// ExpensesContext.js
import React, { createContext, useState } from "react";

export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
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

  const updateTotals = (expenses, incomes, savings) => {
    setTotalExpenses(expenses);
    setTotalIncomes(incomes);
    setTotalSavings(savings);
  };

  return (
    <StatsContext.Provider
      value={{
        totalExpenses,
        setTotalExpenses,
        totalIncomes,
        setTotalIncomes,
        totalSavings,
        setTotalSavings,
        updateTotals,
        selectedMonth,
        setSelectedMonth,
        handleMonthChange,
        filterByMonth
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
