// src/pages/Leaderboard.jsx

import React from 'react';

const dummyData = [
  { name: 'Vishwadeep Kumar Dubey', amount: 3500 },
  { name: 'Aman Raj', amount: 3000 },
  { name: 'Priya Sharma', amount: 2500 },
  { name: 'Ravi Singh', amount: 2000 },
  { name: 'Anjali Verma', amount: 1500 },
];

const Leaderboard = () => {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600">
        🏆 Intern Leaderboard
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-pink-100 text-pink-800">
            <tr>
              <th className="py-3 px-6 border-b text-left">Rank</th>
              <th className="py-3 px-6 border-b text-left">Intern Name</th>
              <th className="py-3 px-6 border-b text-left">Total Raised (₹)</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  index === 0
                    ? 'bg-yellow-100 font-semibold'
                    : index === 1
                    ? 'bg-gray-100'
                    : 'bg-white'
                } hover:bg-pink-50`}
              >
                <td className="py-3 px-6 border-b">#{index + 1}</td>
                <td className="py-3 px-6 border-b">{entry.name}</td>
                <td className="py-3 px-6 border-b">₹{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
