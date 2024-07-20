import React from 'react';
import Calendar from '../components/Calendar';
import { useTheme } from '../components/ThemeSwitcher';

const CalendarPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.text} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <Calendar />
    </div>
  );
};

export default CalendarPage;
