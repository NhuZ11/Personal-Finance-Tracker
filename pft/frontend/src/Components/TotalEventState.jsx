import React, { useState } from 'react';
import ExpensesStats from './ExpensesStats'; // Ensure the path to ExpensesStats is correct
import Chart from './Chart'; // Ensure the path to Example is correct

const TotalEventState = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [income, setIncome] = useState(300); // For now, hardcode income and saving, or replace with actual values.
  const [saving, setSaving] = useState(300);

  // Prepare data array to pass to the PieChart
  const data = [
    { name: 'Expenses', value: totalExpenses },
    { name: 'Income', value: income },
    { name: 'Saving', value: saving },
  ];

  return (
    <div>
      {/* Pass the setTotalExpenses function to ExpensesStats */}
      <ExpensesStats setTotalExpenses={setTotalExpenses} />
      
      {/* Pass the data array to the Example pie chart component */}
      <Chart data={data} />
    </div>
  );
};

export default TotalEventState;
