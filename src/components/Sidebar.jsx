import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Menu</h2>
        <ul>
          <li className="my-2">
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li className="my-2">
            <Link to="/reports" className="block py-2 px-4 rounded hover:bg-gray-700">
              Reports
            </Link>
          </li>
          <li className="my-2">
            <Link to="/calendar" className="block py-2 px-4 rounded hover:bg-gray-700">
              Calendar
            </Link>
          </li>
          <li className="my-2">
            <Link to="/kanban" className="block py-2 px-4 rounded hover:bg-gray-700">
              Kanban Board
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
