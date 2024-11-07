import React, { useState, useEffect } from "react";
import Axios from "axios";

const SavingStats = () => {
  const [savings, setSavings] = useState([]);
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

  const totalSavings = savings.reduce(
    (total, saving) => total + saving.amount,
    0
  );
  return (
    <div>
      <h2 className="mt-5  text-2xl">Savings</h2>
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
      <div className="py-3 px-6 text-right font-bold">
        Total Savings: ${totalSavings.toFixed(2)}
      </div>
    </div>
  );
};

export default SavingStats;
