import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL

export const fetchDashboardData = async (timeline: string) => {
  // For demonstration purposes, we'll return mock data
  return {
    kpiData: {
      carbonFootprint: { value: '1250', unit: 'tons', status: 'warning' },
      waterUsage: { value: '350000', unit: 'gallons', status: 'success' },
      renewableEnergy: { value: '35', unit: '%', status: 'success' },
      wasteRecycled: { value: '68', unit: '%', status: 'warning' },
    },
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Carbon Emissions',
          data: [1200, 1300, 1100, 1400, 1300, 1250],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    },
    comparisonData: {
      labels: ['Carbon Footprint', 'Water Usage', 'Renewable Energy', 'Waste Recycled'],
      currentYear: [1250, 350000, 35, 68],
      previousYear: [1400, 380000, 30, 62],
    },
    drillDownData: {
      carbonFootprint: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [310, 320, 305, 315],
      },
      waterUsage: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [87000, 88000, 86000, 89000],
      },
      renewableEnergy: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [33, 34, 35, 36],
      },
      wasteRecycled: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [65, 67, 68, 69],
      },
    },
  };
};

export const updateGoal = async (kpi: string, value: number) => {
  // Simulating an API call
  console.log(`Updating goal for ${kpi} to ${value}`);
  return { success: true };
};

export const fetchHistoricalData = async (kpi: string, startDate: string, endDate: string) => {
  // Simulating an API call
  console.log(`Fetching historical data for ${kpi} from ${startDate} to ${endDate}`);
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [100, 120, 115, 130, 125, 135],
  };
};

export const fetchAlerts = async () => {
  // Simulating an API call
  return [
    { type: 'warning', message: 'Carbon emissions approaching monthly limit' },
    { type: 'success', message: 'Renewable energy usage target achieved' },
    { type: 'info', message: 'New waste management policy in effect from next month' },
  ];
};