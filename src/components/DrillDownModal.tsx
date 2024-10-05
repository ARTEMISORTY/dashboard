import React from 'react';
import { Line } from 'react-chartjs-2';

interface DrillDownModalProps {
  kpi: string;
  data: any;
  onClose: () => void;
}

const DrillDownModal: React.FC<DrillDownModalProps> = ({ kpi, data, onClose }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: kpi,
        data: data.values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Detailed View: ${kpi}`
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{kpi} - Detailed View</h3>
          <div className="mt-2 px-7 py-3">
            <Line data={chartData} options={options} />
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillDownModal;