import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import KPICard from './KPICard';
import TimelineSelector from './TimelineSelector';
import ExportButton from './ExportButton';
import GoalSetting from './GoalSetting';
import ScrapManagement from './ScrapManagement';
import WasteManagement from './WasteManagement';
import AutomatedAnalysis from './AutomatedAnalysis';
import ComparisonChart from './ComparisonChart';
import AlertsNotifications from './AlertsNotifications';
import DrillDownModal from './DrillDownModal';
import { fetchDashboardData, fetchAlerts } from '../api/dashboardApi';
import { AlertTriangle, BarChart2, Droplet, Leaf, Recycle } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const [timeline, setTimeline] = useState('1m');
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [selectedKPI, setSelectedKPI] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDashboardData(timeline);
      setDashboardData(data);
      const alertsData = await fetchAlerts();
      setAlerts(alertsData);
    };
    fetchData();
  }, [timeline]);

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  const { kpiData, chartData, comparisonData } = dashboardData;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Environmental KPI Dashboard</h1>
      <TimelineSelector timeline={timeline} setTimeline={setTimeline} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard
          icon={<BarChart2 className="w-8 h-8 text-blue-500" />}
          title="Carbon Footprint"
          value={kpiData.carbonFootprint.value}
          unit={kpiData.carbonFootprint.unit}
          status={kpiData.carbonFootprint.status}
        />
        <KPICard
          icon={<Droplet className="w-8 h-8 text-blue-500" />}
          title="Water Usage"
          value={kpiData.waterUsage.value}
          unit={kpiData.waterUsage.unit}
          status={kpiData.waterUsage.status}
        />
        <KPICard
          icon={<Leaf className="w-8 h-8 text-green-500" />}
          title="Renewable Energy"
          value={kpiData.renewableEnergy.value}
          unit={kpiData.renewableEnergy.unit}
          status={kpiData.renewableEnergy.status}
        />
        <KPICard
          icon={<Recycle className="w-8 h-8 text-green-500" />}
          title="Waste Recycled"
          value={kpiData.wasteRecycled.value}
          unit={kpiData.wasteRecycled.unit}
          status={kpiData.wasteRecycled.status}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Carbon Emissions Trend</h2>
          <Line data={chartData} />
        </div>
        <ComparisonChart data={comparisonData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ScrapManagement />
        <WasteManagement />
      </div>
      <AutomatedAnalysis timeline={timeline} />
      <AlertsNotifications alerts={alerts} />
      <div className="flex justify-between items-center mt-8">
        <GoalSetting />
        <ExportButton data={dashboardData} />
      </div>
      {selectedKPI && (
        <DrillDownModal
          kpi={selectedKPI}
          data={dashboardData.drillDownData[selectedKPI]}
          onClose={() => setSelectedKPI(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;