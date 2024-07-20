import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import ThemeProvider from './components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 w-full">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
