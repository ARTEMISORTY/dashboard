import React from 'react';
import { Bar } from 'react-chartjs-2';

const WasteManagement: React.FC = () => {
  const wasteData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'General Waste',
        data: [300, 280, 270, 260, 250, 240],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      },
      {
        label: 'Recyclable Waste',
        data: [150, 160, 170, 180, 190, 200],
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
      },
      {
        label: 'Hazardous Waste',
        data: [50, 45, 40, 35, 30, 25],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
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
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Waste Management</h2>
      <Bar data={wasteData} options={options} />
    </div>
  );
};

export default WasteManagement;