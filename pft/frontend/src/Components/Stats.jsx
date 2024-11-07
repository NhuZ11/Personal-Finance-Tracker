import React, { useState, useEffect } from "react";
import Axios from "axios";

const Stats = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [savings, setSavings] = useState([]);

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

  useEffect(() => {
    const fetchIncomes = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-incomes",
          {
            headers: {
              "auth-token": token, // Include the token in the request headers
            },
          }
        );

        if (res.data && res.data.data && res.data.data.incomes) {
          setIncomes(res.data.data.incomes); // Adjust based on your actual response structure
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      } catch (error) {
        console.error(
          "Error fetching incomes:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchIncomes();
  }, []);

  console.log(incomes);

  useEffect(() => {
    const fetchSavings = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-savings",
          {
            headers: {
              "auth-token": token, // Include the token in the request headers
            },
          }
        );

        if (res.data && res.data.data && res.data.data.savings) {
          setSavings(res.data.data.savings); // Adjust based on your actual response structure
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      } catch (error) {
        console.error(
          "Error fetching savings:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchSavings();
  }, []);

  console.log(savings);

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
                  {new Date(expense.createdAt).toLocaleDateString()}
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

      <h2 className="mt- text-2xl">Incomes</h2>
      {incomes.length > 0 ? (
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
            {incomes.map((income, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(income.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{income.category}</td>
                <td className="py-3 px-6 text-left">{income.description}</td>
                <td className="py-3 px-6 text-right">${income.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No incomes available.</p>
      )}
      <h2  className="mt-5">Savings</h2>
      {savings.length > 0 ? (
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
            {savings.map((saving, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(saving.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{saving.category}</td>
                <td className="py-3 px-6 text-left">{saving.description}</td>
                <td className="py-3 px-6 text-right">${saving.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No savings available.</p>
      )}
    </div>
  );
};

export default Stats;
