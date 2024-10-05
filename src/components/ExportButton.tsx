import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface ExportButtonProps {
  data: any;
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Environmental KPI Dashboard Report', 14, 15);
    
    // Add KPI data
    doc.autoTable({
      head: [['KPI', 'Value', 'Unit', 'Status']],
      body: data.kpiData.map((kpi: any) => [kpi.title, kpi.value, kpi.unit, kpi.status]),
      startY: 20,
    });

    // Add analysis
    doc.text('Analysis', 14, doc.lastAutoTable.finalY + 10);
    Object.entries(data.analysis).forEach(([key, value]: [string, any], index) => {
      doc.text(`${key}: ${value.trend} (${value.impact})`, 14, doc.lastAutoTable.finalY + 15 + (index * 5));
    });

    doc.save('dashboard-report.pdf');
  };

  return (
    <button
      onClick={exportPDF}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Export Report
    </button>
  );
};

export default ExportButton;