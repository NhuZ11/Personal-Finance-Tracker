import React from "react";

const ExpensesStats = ({ expenses }) => (

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
  </div>
);

export default ExpensesStats;
