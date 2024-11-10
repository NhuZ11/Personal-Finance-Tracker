// Chart.js
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { StatsContext } from '../Context/StatsContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }, data) => {
  if (percent > 0.05) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return null;
};

const Chart = () => {
  const { totalExpenses, totalIncomes, totalSavings } = useContext(StatsContext); // Access totalExpenses from context

  console.log(totalExpenses)

  const data = [
    { name: 'Expenses', value: totalExpenses },
    { name: 'Income', value: totalIncomes },
    { name: 'Saving', value: totalSavings },
  ];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart width={800} height={800}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) => renderCustomizedLabel(props, data)}
          outerRadius={220}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
