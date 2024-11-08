import React, { useState, useEffect } from "react";
import Axios from "axios";

const ExpensesStats = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-expenses",
          {
            headers: {
              "auth-token": token, // Include the token in the request headers
            },
          }
        );

        if (res.data && res.data.data && res.data.data.expenses) {
          setExpenses(res.data.data.expenses); // Adjust based on your actual response structure
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

  console.log(expenses);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  return (
    <div>
      <h2 className="mt- text-2xl">Expenses</h2>
      {expenses.length > 0 ? (
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
            {expenses.map((expense, index) => (
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
        <p>No expenses available.</p>
      )}
      <div className="py-3 px-6 text-right font-bold">
        Total Expenses: ${totalExpenses.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpensesStats;
