// Chart.js
import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { StatsContext } from "../Context/StatsContext";
import ExpenseChart from "./CategoryChart/ExpenseChart";
import IncomeChart from "./CategoryChart/IncomeChart";
import SavingStats from "./Stats/SavingStats";
import SavingsChart from "./CategoryChart/SavingChart";

const COLORS = ["#D22B2B", "#00C49F", "#FFBB28"];

const Chart = () => {
  const { totalExpenses, totalIncomes, totalSavings, selectedMonth } = useContext(StatsContext);

  const data = [
    { name: "Expenses", value: totalExpenses },
    { name: "Income", value: totalIncomes },
    { name: "Saving", value: totalSavings },
  ];

  return (
    <>
      <div className="text-3xl font-semibold text-center underline">
        <h1>Charts And Analysis</h1>
      </div>
      <div className="ms-[100px] mt-9">
        <p className="text-2xl font-semibold">
          For the month of:{" "}
          {new Date(0, selectedMonth - 1).toLocaleString("default", { month: "long" })}
        </p>

        <div className="flex space-x-11 items-center mx-5 my-3">
        <p className="text-xl text-red-600">Your Expenses: ${totalExpenses}</p>
        <p className="text-xl text-green-500">Your Income: ${totalIncomes}</p>
        <p className="text-xl text-yellow-500"> Your Saving: ${totalSavings}</p>
        </div>
      </div>
      <div className="ms-[150px]">
      <ResponsiveContainer width="40%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div>
        <ExpenseChart />
        <IncomeChart />
        <SavingsChart />
      </div>
    </>
  );
};

export default Chart;
