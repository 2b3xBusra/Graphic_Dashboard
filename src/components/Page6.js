// src/components/Page6.js
import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';  // CSS stil dosyasını içe aktarıyoruz

const Page6 = () => {
  const alertLevelEvolutionData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Alert Levels',
        data: Array.from({ length: 24 }, () => Math.random() * 300),
        fill: true,
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const topMitreAttacksData = {
    labels: ['Valid Accounts', 'Modify Registry', 'Sudo and Sudo Cache'],
    datasets: [
      {
        data: [120, 90, 60],
        backgroundColor: ['#4BC0C0', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const topAgentsData = {
    labels: ['LAB-DC', 'kube-master', 'samson-lab', 'siem', 'other'],
    datasets: [
      {
        data: [3000, 2500, 1500, 1000, 500],
        backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56', '#9966FF'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#36A2EB', '#FFCE56', '#9966FF'],
      },
    ],
  };

  const alertsEvolutionData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'LAB-DC',
        data: Array.from({ length: 24 }, () => Math.random() * 100),
        backgroundColor: '#4BC0C0',
      },
      {
        label: 'kube-master',
        data: Array.from({ length: 24 }, () => Math.random() * 100),
        backgroundColor: '#FF6384',
      },
      {
        label: 'samson-lab',
        data: Array.from({ length: 24 }, () => Math.random() * 100),
        backgroundColor: '#36A2EB',
      },
      {
        label: 'siem',
        data: Array.from({ length: 24 }, () => Math.random() * 100),
        backgroundColor: '#FFCE56',
      },
    ],
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {/* Total Alert Summary */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          <div className="stat-card">
            <h3>Total Alerts</h3>
            <p className="stat-value success">7310</p>
          </div>
          <div className="stat-card">
            <h3>Level 12 or Above Alerts</h3>
            <p className="stat-value warning">4</p>
          </div>
          <div className="stat-card">
            <h3>Authentication Failure</h3>
            <p className="stat-value warning">46</p>
          </div>
          <div className="stat-card">
            <h3>Authentication Success</h3>
            <p className="stat-value success">3260</p>
          </div>
        </div>
        
        {/* Alert Level Evolution */}
        <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '300px' }}>
          <h3>Alert Level Evolution</h3>
          <Line data={alertLevelEvolutionData} />
        </div>
        
        {/* Top MITRE ATT&CKS */}
        <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '300px', maxWidth: '400px' }}>
          <h3>Top MITRE ATT&CKS</h3>
          <Doughnut data={topMitreAttacksData} style={{ maxHeight: '300px' }} />
        </div>
        
        {/* Top 5 Agents */}
        <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '300px', maxWidth: '400px' }}>
          <h3>Top 5 Agents</h3>
          <Doughnut data={topAgentsData} style={{ maxHeight: '300px' }} />
        </div>
        
        {/* Alerts Evolution - Top 5 Agents */}
        <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '300px' }}>
          <h3>Alerts Evolution - Top 5 Agents</h3>
          <Bar data={alertsEvolutionData} />
        </div>
      </div>
    </div>
  );
};

export default Page6;