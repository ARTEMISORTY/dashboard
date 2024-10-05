import React from 'react';

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  status: 'success' | 'warning' | 'danger';
}

const KPICard: React.FC<KPICardProps> = ({ icon, title, value, unit, status }) => {
  const statusColors = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <div className="text-3xl font-bold mb-2">
        {value} <span className="text-sm font-normal">{unit}</span>
      </div>
      <div className={`text-sm font-medium px-2 py-1 rounded-full inline-block ${statusColors[status]}`}>
        {status === 'success' ? 'On Track' : status === 'warning' ? 'Needs Attention' : 'Critical'}
      </div>
    </div>
  );
};

export default KPICard;