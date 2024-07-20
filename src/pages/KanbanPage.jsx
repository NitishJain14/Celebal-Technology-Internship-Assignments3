import React from 'react';
import KanbanBoard from '../components/KanbanBoard'; // Ensure this path is correct
import { useTheme } from '../components/ThemeSwitcher';

const KanbanPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.text} p-4`}>
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default KanbanPage;
