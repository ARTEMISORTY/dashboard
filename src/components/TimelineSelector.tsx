import React from 'react';

interface TimelineSelectorProps {
  timeline: string;
  setTimeline: (timeline: string) => void;
}

const TimelineSelector: React.FC<TimelineSelectorProps> = ({ timeline, setTimeline }) => {
  const options = [
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
    { value: '6m', label: '6 Months' },
    { value: '1y', label: '1 Year' },
  ];

  return (
    <div className="mb-6">
      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
        Select Timeline:
      </label>
      <select
        id="timeline"
        value={timeline}
        onChange={(e) => setTimeline(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm transition-all duration-300 hover:border-indigo-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimelineSelector;