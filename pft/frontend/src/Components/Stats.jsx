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
      <h2>Expenses</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.category} {expense.description} - ${expense.amount} on{" "}
              {new Date(expense.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses available.</p>
      )}

      <h2>Incomes</h2>
      {incomes.length > 0 ? (
        <ul>
          {incomes.map((income, index) => (
            <li key={index}>
              {income.category} {income.description} - ${income.amount} on{" "}
              {new Date(income.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Incomes available.</p>
      )}

      <h2>Savings</h2>
      {savings.length > 0 ? (
        <ul>
          {savings.map((saving, index) => (
            <li key={index}>
              {saving.category} {saving.description} - ${saving.amount} on{" "}
              {new Date(saving.createdAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saving available.</p>
      )}
    </div>
  );
};

export default Stats;
