import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ComparisonChartProps {
  data: {
    labels: string[];
    currentYear: number[];
    previousYear: number[];
  };
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Current Year',
        data: data.currentYear,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Previous Year',
        data: data.previousYear,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Year-over-Year Comparison',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold mb-4">Year-over-Year Comparison</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ComparisonChart;