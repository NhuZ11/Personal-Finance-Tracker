// Chart.js
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { StatsContext } from "../Context/StatsContext";
import ExpenseChart from "./CategoryChart/ExpenseChart";
import IncomeChart from "./CategoryChart/IncomeChart";
import SavingStats from "./Stats/SavingStats";
import SavingsChart from "./CategoryChart/SavingChart";

const COLORS = ["#D22B2B", "#00C49F", "#FFBB28"];

const Chart = () => {
  const { totalExpenses, totalIncomes, totalSavings, selectedMonth } =
    useContext(StatsContext);

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
          {new Date(0, selectedMonth - 1).toLocaleString("default", {
            month: "long",
          })}
        </p>

        <div className="flex space-x-11 items-center mx-5 my-3">
          <p className="text-xl text-red-600">
            Your Expenses: ${totalExpenses}
          </p>
          <p className="text-xl text-green-500">Your Income: ${totalIncomes}</p>
          <p className="text-xl text-yellow-500">
            {" "}
            Your Saving: ${totalSavings}
          </p>
        </div>
      </div>
      <div className="ms-[150px]">
        <ResponsiveContainer width="40%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <div className="flex justify-start space-x-[150px]">
          <div>
            <ExpenseChart />
          </div>
          <div>
            <IncomeChart />
          </div>
          <div>
            <SavingsChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-extrabold text-blue-700 mb-4">
          Budgeting Algorithm
        </h1>
        <p className="text-xl text-center font-semibold text-gray-700 mb-2">
          50-30-20 Rule
        </p>
        <p className="text-lg text-center text-gray-600 mb-6">
          This algorithm divides your income into{" "}
          <span className="font-bold text-blue-600">Needs</span>,
          <span className="font-bold text-green-600"> Wants</span>, and{" "}
          <span className="font-bold text-purple-600">Saving</span>.
        </p>
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Your Total Income:{" "}
            <span className="text-blue-600 font-bold">{totalIncomes}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-bold text-blue-600">Needs:</span>{" "}
            {(totalIncomes * 50) / 100} [Household, Foods, Health, Education]
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-bold text-green-600">Wants:</span>{" "}
            {(totalIncomes * 30) / 100} [Entertainment, Social Life]
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-600">Saving:</span>{" "}
            {(totalIncomes * 20) / 100}  [Stocks, FD, Gold]
          </p>
        </div>
        <p className="text-lg text-gray-700">
          <span className="font-bold text-red-600">Actual Expenditure:</span>{" "}
          {totalExpenses}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold text-green-600">Actual Saving:</span>{" "}
          {`${totalIncomes} - ${totalExpenses} = ${
            totalIncomes - totalExpenses
          }`}
        </p>
        {totalIncomes - totalExpenses <= 0 ? (
          <p className="text-lg font-bold text-red-600 bg-red-100 p-3 rounded-lg shadow-md">
            🚨 Reduce your expenses!
          </p>
        ) : (
          <p className="text-lg font-bold text-green-600 bg-green-100 p-3 rounded-lg shadow-md">
            ✅ You are on the right track!
          </p>
        )}
      </div>
    </>
  );
};

export default Chart;
