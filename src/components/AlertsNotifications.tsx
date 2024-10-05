import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface Alert {
  type: 'warning' | 'success' | 'info';
  message: string;
}

interface AlertsNotificationsProps {
  alerts: Alert[];
}

const AlertsNotifications: React.FC<AlertsNotificationsProps> = ({ alerts }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'info':
        return <Info className="w-6 h-6 text-blue-500" />;
      default:
        return null;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'success':
        return 'bg-green-100 border-green-500 text-green-700';
      case 'info':
        return 'bg-blue-100 border-blue-500 text-blue-700';
      default:
        return '';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Alerts and Notifications</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`flex items-center p-4 border-l-4 rounded-r-lg ${getAlertColor(alert.type)}`}
          >
            <div className="flex-shrink-0 mr-4">{getAlertIcon(alert.type)}</div>
            <div className="flex-1">{alert.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsNotifications;