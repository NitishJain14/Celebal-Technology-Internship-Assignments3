import React from 'react';
import Table from '../components/Table';
import Chart from '../components/Chart';
import { useTheme } from '../components/ThemeSwitcher';

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.text} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Chart />
      <Table />
    </div>
  );
};

export default Dashboard;
