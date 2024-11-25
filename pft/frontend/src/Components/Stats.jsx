import React, { useState, useEffect , useContext } from "react";
import Axios from "axios";
import ExpensesStats from "./Stats/ExpensesStats";
import IncomeStats from "./Stats/IncomeStats";
import SavingStats from "./Stats/SavingStats";
import { StatsContext } from "../Context/StatsContext";

const Stats = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [savings, setSavings] = useState([]);
  const { selectedMonth, handleMonthChange, filterByMonth} = useContext(StatsContext); // Access setTotalExpenses

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

      <ExpensesStats data={filterByMonth(expenses)} month={selectedMonth} />
      <IncomeStats data={filterByMonth(incomes)} month={selectedMonth}/>
      <SavingStats data={filterByMonth(savings)} month={selectedMonth}/>
      <p></p>
    </div>
  );
};

export default Stats;
