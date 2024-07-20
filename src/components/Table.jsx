import React from 'react';

const Table = () => {
  const data = [
    { name: 'John Doe', age: 28, city: 'New York' },
    { name: 'Jane Doe', age: 22, city: 'San Francisco' },
    { name: 'Sam Smith', age: 33, city: 'Chicago' },
  ];

  return (
    <div className="my-4 p-4 bg-white shadow rounded-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-gray-100 border-b">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.age}</td>
              <td className="px-4 py-2">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
