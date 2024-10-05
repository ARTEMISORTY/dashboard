import React from 'react';
import { Line } from 'react-chartjs-2';

const ScrapManagement: React.FC = () => {
  const scrapData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Metal Scrap',
        data: [50000, 55000, 52000, 58000, 60000, 62000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Electronic Waste',
        data: [30000, 32000, 35000, 33000, 36000, 38000],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
      {
        label: 'Plastic Scrap',
        data: [20000, 22000, 23000, 25000, 24000, 26000],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ccc',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        padding: 12,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue (USD)',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold mb-4">Scrap Management and Financial Returns</h2>
      <Line data={scrapData} options={options} />
    </div>
  );
};

export default ScrapManagement;