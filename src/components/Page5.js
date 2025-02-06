// src/components/Page5.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Page5 = () => {
  const serverRequestsData = {
    labels: Array.from({ length: 12 }, (_, i) => `10:${50 + i * 5}`),
    datasets: [
      {
        label: 'web_server_01',
        data: Array.from({ length: 12 }, () => Math.random() * 100),
        fill: true,
        borderColor: '#0088FE',
        backgroundColor: 'rgba(0, 136, 254, 0.5)',
      },
      {
        label: 'web_server_02',
        data: Array.from({ length: 12 }, () => Math.random() * 100),
        fill: true,
        borderColor: '#00C49F',
        backgroundColor: 'rgba(0, 196, 159, 0.5)',
      },
      {
        label: 'web_server_03',
        data: Array.from({ length: 12 }, () => Math.random() * 100),
        fill: true,
        borderColor: '#FFBB28',
        backgroundColor: 'rgba(255, 187, 40, 0.5)',
      },
      {
        label: 'web_server_04',
        data: Array.from({ length: 12 }, () => Math.random() * 100),
        fill: true,
        borderColor: '#FF8042',
        backgroundColor: 'rgba(255, 128, 66, 0.5)',
      },
    ],
  };

  const pageLoadData = {
    labels: Array.from({ length: 12 }, (_, i) => `10:${50 + i * 5}`),
    datasets: [
      {
        label: 'upper_25',
        data: Array.from({ length: 12 }, () => Math.random() * 2 + 1),
        backgroundColor: '#FFBB28',
      },
      {
        label: 'upper_50',
        data: Array.from({ length: 12 }, () => Math.random() * 2 + 1),
        backgroundColor: '#FF8042',
      },
      {
        label: 'upper_75',
        data: Array.from({ length: 12 }, () => Math.random() * 2 + 1),
        backgroundColor: '#0088FE',
      },
      {
        label: 'upper_90',
        data: Array.from({ length: 12 }, () => Math.random() * 2 + 1),
        backgroundColor: '#00C49F',
      },
      {
        label: 'upper_95',
        data: Array.from({ length: 12 }, () => Math.random() * 2 + 1),
        backgroundColor: '#FFBB28',
      },
    ],
  };

  const memoryCpuData = {
    labels: Array.from({ length: 12 }, (_, i) => `10:${50 + i * 5}`),
    datasets: [
      {
        label: 'cpu',
        data: Array.from({ length: 12 }, () => Math.random() * 4),
        borderColor: '#FF8042',
        backgroundColor: 'rgba(255, 128, 66, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'memory',
        data: Array.from({ length: 12 }, () => Math.random() * 5),
        borderColor: '#00C49F',
        backgroundColor: 'rgba(0, 196, 159, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  const trafficInOutData = {
    labels: Array.from({ length: 12 }, (_, i) => `10:${50 + i * 5}`),
    datasets: [
      {
        label: 'upper_25',
        data: Array.from({ length: 12 }, () => Math.random() * 3 - 1.5),
        fill: true,
        borderColor: '#FFBB28',
        backgroundColor: 'rgba(255, 187, 40, 0.5)',
      },
      {
        label: 'upper_50',
        data: Array.from({ length: 12 }, () => Math.random() * 3 - 1.5),
        fill: true,
        borderColor: '#FF8042',
        backgroundColor: 'rgba(255, 128, 66, 0.5)',
      },
      {
        label: 'upper_75',
        data: Array.from({ length: 12 }, () => Math.random() * 3 - 1.5),
        fill: true,
        borderColor: '#0088FE',
        backgroundColor: 'rgba(0, 136, 254, 0.5)',
      },
      {
        label: 'upper_90',
        data: Array.from({ length: 12 }, () => Math.random() * 3 - 1.5),
        fill: true,
        borderColor: '#00C49F',
        backgroundColor: 'rgba(0, 196, 159, 0.5)',
      },
      {
        label: 'upper_95',
        data: Array.from({ length: 12 }, () => Math.random() * 3 - 1.5),
        fill: true,
        borderColor: '#FFBB28',
        backgroundColor: 'rgba(255, 187, 40, 0.5)',
      },
    ],
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
          <h3>Server Requests</h3>
          <Line data={serverRequestsData} />
        </div>
        <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
          <h3>Memory / CPU</h3>
          <Line data={memoryCpuData} options={{ scales: { y: { type: 'linear', position: 'left' }, y1: { type: 'linear', position: 'right' } } }} />
        </div>
        <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
          <h3>Client Side Full Page Load</h3>
          <Bar data={pageLoadData} />
        </div>
        <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
          <h3>Traffic In/Out</h3>
          <Line data={trafficInOutData} />
        </div>
      </div>
    </div>
  );
};

export default Page5;