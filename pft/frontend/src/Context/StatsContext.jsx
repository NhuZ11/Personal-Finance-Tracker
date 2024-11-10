// ExpensesContext.js
import React, { createContext, useState } from 'react';

export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [totalSavings, setTotalSavings] = useState([]);

  return (
    <StatsContext.Provider value={{ totalExpenses, setTotalExpenses ,totalIncomes, setTotalIncomes,totalSavings, setTotalSavings }}>
      {children}
    </StatsContext.Provider>
  );
};
