import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { StatsContext } from "../../Context/StatsContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (
  { cx, cy, midAngle, innerRadius, outerRadius, percent, index },
  data
) => {
  if (percent > 0.05) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return null;
};

const ExpenseChart = () => {
  const [expenses, setExpenses] = useState([]);
  const { selectedMonth } = useContext(StatsContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-expenses",
          {
            headers: {
              "auth-token": token,
            },
          }
        );

        if (res.data && res.data.data && res.data.data.expenses) {
          setExpenses(res.data.data.expenses);
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      } catch (error) {
        console.error(
          "Error fetching expenses:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchExpenses();
  }, []);

  // Filter expenses for the selected month
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === selectedMonth;
  });

  // Aggregate expenses by category
  const categoryData = filteredExpenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  // Format data for the chart
  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  return (
    <>
      <div>
        <h1 className="text-xl text-red-600">Expenses</h1>
        <table>
          <thead>
            <tr>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{expense.category}</td>
                <td className="py-3 px-6 text-right">${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(props) => renderCustomizedLabel(props, data)}
              outerRadius={220}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ExpenseChart;
