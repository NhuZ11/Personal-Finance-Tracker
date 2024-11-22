import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Comparison = () => {
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTotals = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await Axios.get("http://localhost:8000/api/auth/get-totals", {
          headers: {
            "auth-token": token,
          },
        });

        if (res.data) {
          // Map API response to chart and table data format
          const formattedData = res.data.map((item) => ({
            name: new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            }),
            Expenses: item.totalExpenses,
            Incomes: item.totalIncomes,
            Savings: item.totalSavings,
            AbsoluteChangeExpenses: 0, // Placeholder for absolute change (to be calculated)
            AbsoluteChangeIncomes: 0, // Placeholder for absolute change (to be calculated)
            AbsoluteChangeSavings: 0, // Placeholder for absolute change (to be calculated)
            PercentageChangeExpenses: 0, // Placeholder for percentage change (to be calculated)
            PercentageChangeIncomes: 0, // Placeholder for percentage change (to be calculated)
            PercentageChangeSavings: 0, // Placeholder for percentage change (to be calculated)
          }));

          // Calculate absolute and percentage changes
          for (let i = 1; i < formattedData.length; i++) {
            formattedData[i].AbsoluteChangeExpenses = formattedData[i].Expenses - formattedData[i - 1].Expenses;
            formattedData[i].AbsoluteChangeIncomes = formattedData[i].Incomes - formattedData[i - 1].Incomes;
            formattedData[i].AbsoluteChangeSavings = formattedData[i].Savings - formattedData[i - 1].Savings;

            formattedData[i].PercentageChangeExpenses = 
              formattedData[i].Expenses && formattedData[i - 1].Expenses
                ? ((formattedData[i].AbsoluteChangeExpenses / formattedData[i - 1].Expenses) * 100).toFixed(2)
                : 0;

            formattedData[i].PercentageChangeIncomes = 
              formattedData[i].Incomes && formattedData[i - 1].Incomes
                ? ((formattedData[i].AbsoluteChangeIncomes / formattedData[i - 1].Incomes) * 100).toFixed(2)
                : 0;

            formattedData[i].PercentageChangeSavings = 
              formattedData[i].Savings && formattedData[i - 1].Savings
                ? ((formattedData[i].AbsoluteChangeSavings / formattedData[i - 1].Savings) * 100).toFixed(2)
                : 0;
          }

          setChartData(formattedData);
          setTableData(formattedData);
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      } catch (error) {
        console.error("Error fetching totals:", error.response ? error.response.data : error.message);
      }
    };

    fetchTotals();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Comparison of Monthly Finances</h2>

      {/* Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b text-left">Month</th>
              <th className="py-2 px-4 border-b text-left">Expenses</th>
              <th className="py-2 px-4 border-b text-left">Incomes</th>
              <th className="py-2 px-4 border-b text-left">Savings</th>
              <th className="py-2 px-4 border-b text-left">Absolute Change in Expenses</th>
              <th className="py-2 px-4 border-b text-left">Percentage Change in Expenses</th>
              <th className="py-2 px-4 border-b text-left">Absolute Change in Incomes</th>
              <th className="py-2 px-4 border-b text-left">Percentage Change in Incomes</th>
              <th className="py-2 px-4 border-b text-left">Absolute Change in Savings</th>
              <th className="py-2 px-4 border-b text-left">Percentage Change in Savings</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.Expenses}</td>
                <td className="py-2 px-4 border-b">{item.Incomes}</td>
                <td className="py-2 px-4 border-b">{item.Savings}</td>
                <td className="py-2 px-4 border-b">{item.AbsoluteChangeExpenses}</td>
                <td className="py-2 px-4 border-b">{item.PercentageChangeExpenses}%</td>
                <td className="py-2 px-4 border-b">{item.AbsoluteChangeIncomes}</td>
                <td className="py-2 px-4 border-b">{item.PercentageChangeIncomes}%</td>
                <td className="py-2 px-4 border-b">{item.AbsoluteChangeSavings}</td>
                <td className="py-2 px-4 border-b">{item.PercentageChangeSavings}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Line Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
            <Line type="monotone" dataKey="Incomes" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Savings" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Comparison;
