import React, { useState, useEffect } from "react";
import Axios from "axios";
import ExpensesStats from "./Stats/ExpensesStats";
import IncomeStats from "./Stats/IncomeStats";
import SavingStats from "./Stats/SavingStats";

const Stats = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [savings, setSavings] = useState([]);


  return (
    <div className="mx-10">
      <ExpensesStats />
      <IncomeStats />
      <SavingStats />
    </div>
  );
};

export default Stats;
