import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Stats = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem("token"); // Retrieve the token from local storage
            
            try {
                const res = await Axios.get("http://localhost:8000/api/auth/get-expenses", {
                    headers: {
                        "auth-token": token, // Include the token in the request headers
                    },
                });

                if (res.data && res.data.data && res.data.data.expenses) {
                    setExpenses(res.data.data.expenses); // Adjust based on your actual response structure
                } else {
                    console.error("Unexpected response structure:", res.data);
                }
            } catch (error) {
                console.error("Error fetching expenses:", error.response ? error.response.data : error.message);
            }
        };

        fetchExpenses();
    }, []);
    
    console.log(expenses);
    
    return (
        <div>
            <h2>This is Stats</h2>
            {expenses.length > 0 ? (
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                           {expense.category} {expense.description} - ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No expenses available.</p>
            )}
        </div>
    );
};

export default Stats;
