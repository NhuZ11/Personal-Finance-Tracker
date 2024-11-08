import React, { useState, useEffect } from "react";
import Axios from "axios";

const SavingStats = () => {
  const [savings, setSavings] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month

  useEffect(() => {
    const fetchSavings = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-savings",
          {
            headers: {
              "auth-token": token,
            },
          }
        );

        if (res.data && res.data.data && res.data.data.savings) {
          setSavings(res.data.data.savings);
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

  // Handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Filter savings by selected month
  const filteredSavings = savings.filter((saving) => {
    const savingDate = new Date(saving.date);
    return savingDate.getMonth() + 1 === selectedMonth;
  });

  const totalSavings = filteredSavings.reduce(
    (total, saving) => total + saving.amount,
    0
  );

  return (
    <div>
      <h2 className="mt-5 text-2xl">Savings</h2>
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

      {filteredSavings.length > 0 ? (
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
            {filteredSavings.map((saving, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(saving.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{saving.category}</td>
                <td className="py-3 px-6 text-left">{saving.description}</td>
                <td className="py-3 px-6 text-right">${saving.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No savings available for the selected month.</p>
      )}
      <div className="py-3 px-6 text-right font-bold">
        Total Savings: ${totalSavings.toFixed(2)}
      </div>
    </div>
  );
};

export default SavingStats;
