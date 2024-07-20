import React from 'react';
import { useTheme } from '../components/ThemeSwitcher';

const Reports = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.text} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p>This is the Reports page.</p>
    </div>
  );
};

export default Reports;
