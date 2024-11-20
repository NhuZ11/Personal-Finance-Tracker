// ExpensesContext.js
import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

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

  // Automatically store totals to the backend when totals change
  useEffect(() => {
    const storeTotalsToBackend = async () => {
      const token = localStorage.getItem("token");
      try {
        await Axios.post(
          "http://localhost:8000/api/auth/add-totals",
          {
            totalExpenses,
            totalIncomes,
            totalSavings,
            date: new Date(), // Include the current date
          },
          {
            headers: {
              "auth-token": token, // Send token in the header
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Totals updated successfully in the backend.");
      } catch (error) {
        console.error(
          "Error saving totals to backend:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (totalExpenses || totalIncomes || totalSavings) {
      storeTotalsToBackend(); // Trigger when totals are updated
    }
  }, [totalExpenses, totalIncomes, totalSavings]); // Dependency array to monitor changes

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
        filterByMonth,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
