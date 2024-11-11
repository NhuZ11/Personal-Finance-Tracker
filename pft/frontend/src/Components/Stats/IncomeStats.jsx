import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { StatsContext } from "../../Context/StatsContext";

const IncomeStats = ({month}) => {
  const [incomes, setIncomes] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(month); // Default to current month
  const { setTotalIncomes } = useContext(StatsContext);

  useEffect(() => {
    setSelectedMonth(month); // Sync selectedMonth with prop month
  }, [month]);

  useEffect(() => {
    const fetchIncomes = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await Axios.get(
          "http://localhost:8000/api/auth/get-incomes",
          {
            headers: {
              "auth-token": token,
            },
          }
        );

        if (res.data && res.data.data && res.data.data.incomes) {
          setIncomes(res.data.data.incomes);
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

  // Handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Filter incomes by selected month
  const filteredIncomes = incomes.filter((income) => {
    const incomeDate = new Date(income.date);
    return incomeDate.getMonth() + 1 === selectedMonth;
  });

  const totalIncomes = filteredIncomes.reduce(
    (total, income) => total + income.amount,
    0
  );

  useEffect(() => {
    setTotalIncomes(totalIncomes); // Update context with the new total
  }, [totalIncomes, setTotalIncomes]);

  return (
    <div>
      <h2 className="mt- text-2xl">Incomes</h2>
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

      {filteredIncomes.length > 0 ? (
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
            {filteredIncomes.map((income, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {new Date(income.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{income.category}</td>
                <td className="py-3 px-6 text-left">{income.description}</td>
                <td className="py-3 px-6 text-right">${income.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No incomes available for the selected month.</p>
      )}

      <div className="py-3 px-6 text-right font-bold">
        Total Incomes: ${totalIncomes.toFixed(2)}
      </div>
    </div>
  );
};

export default IncomeStats;
