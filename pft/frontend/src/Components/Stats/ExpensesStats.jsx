import React, { useState, useEffect } from "react";
import Axios from "axios";

const ExpensesStats = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month

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

  // Handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Filter expenses by selected month
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === selectedMonth;
  });

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h2 className="mt- text-2xl">Expenses</h2>
      <div className="mb-4">
        <label htmlFor="month">Filter by Month: </label>
        <select id="month" value={selectedMonth} onChange={handleMonthChange}>
          {[...Array(12)].map((_, index) => (
            <option key={index} value={index + 1}>
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      {filteredExpenses.length > 0 ? (
        <table className="min-w-full border border-gray-300 bg-white rounded-md shadow-lg">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {filteredExpenses.map((expense, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{expense.category}</td>
                <td className="py-3 px-6 text-left">{expense.description}</td>
                <td className="py-3 px-6 text-right">${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses available for the selected month.</p>
      )}
      <div className="py-3 px-6 text-right font-bold">
        Total Expenses: ${totalExpenses.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpensesStats;
