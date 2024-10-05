import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updateGoal } from '../api/dashboardApi';

const GoalSetting: React.FC = () => {
  const [kpi, setKpi] = useState('');
  const [value, setValue] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(updateGoal, {
    onSuccess: () => {
      queryClient.invalidateQueries('dashboardData');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ kpi, value: parseFloat(value) });
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Set New Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="kpi" className="block text-sm font-medium text-gray-700">
            KPI
          </label>
          <select
            id="kpi"
            value={kpi}
            onChange={(e) => setKpi(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select KPI</option>
            <option value="carbonFootprint">Carbon Footprint</option>
            <option value="waterUsage">Water Usage</option>
            <option value="renewableEnergy">Renewable Energy</option>
            <option value="wasteRecycled">Waste Recycled</option>
          </select>
        </div>
        <div>
          <label htmlFor="value" className="block text-sm font-medium text-gray-700">
            Goal Value
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Set Goal
        </button>
      </form>
    </div>
  );
};

export default GoalSetting;