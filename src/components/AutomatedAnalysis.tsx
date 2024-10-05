import React from 'react';

interface AutomatedAnalysisProps {
  timeline: string;
}

const AutomatedAnalysis: React.FC<AutomatedAnalysisProps> = ({ timeline }) => {
  const analysis = {
    carbonEmissions: {
      trend: 'decreasing',
      impact: 'positive',
      projection: 'On track to meet annual reduction goal',
    },
    waterUsage: {
      trend: 'stable',
      impact: 'neutral',
      projection: 'May need additional measures to achieve reduction targets',
    },
    renewableEnergy: {
      trend: 'increasing',
      impact: 'positive',
      projection: 'Exceeding annual targets, consider setting more ambitious goals',
    },
    wasteManagement: {
      trend: 'improving',
      impact: 'positive',
      projection: 'Recycling rates increasing, hazardous waste decreasing',
    },
    scrapManagement: {
      trend: 'increasing',
      impact: 'positive',
      projection: 'Revenue from scrap sales expected to exceed yearly forecast',
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Automated Analysis and Inferences</h2>
      <div className="space-y-4">
        {Object.entries(analysis).map(([key, value]) => (
          <div key={key} className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p><strong>Trend:</strong> <span className={`capitalize ${value.trend === 'increasing' ? 'text-green-600' : value.trend === 'decreasing' ? 'text-red-600' : 'text-yellow-600'}`}>{value.trend}</span></p>
            <p><strong>Impact:</strong> <span className={`capitalize ${value.impact === 'positive' ? 'text-green-600' : value.impact === 'negative' ? 'text-red-600' : 'text-yellow-600'}`}>{value.impact}</span></p>
            <p><strong>Projection:</strong> {value.projection}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Overall Inference</h3>
        <p>Based on the {timeline} data, the organization is making progress in most environmental areas. However, water usage remains a concern and may require additional focus. The increasing trend in renewable energy usage and effective scrap management are particularly noteworthy, contributing positively to both environmental impact and financial returns.</p>
      </div>
    </div>
  );
};

export default AutomatedAnalysis;