// src/pages/Dashboard.jsx

import React from 'react';

function Dashboard() {
  const internName = "Vishwadeep Dubey";
  const referralCode = "vishwadeep2025";
  const amountRaised = 2500;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white/90 backdrop-blur shadow-xl rounded-xl border border-pink-100">
      {/* Welcome Banner */}
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
        👋 Welcome, {internName}!
      </h2>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Amount Raised */}
        <div className="bg-green-100 border border-green-300 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-2xl font-bold text-green-800">₹{amountRaised}</h3>
          <p className="text-sm mt-1 text-green-700">Total Donations Raised</p>
        </div>

        {/* Referral Code */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg text-center shadow-md">
          <p className="text-sm text-blue-700 mb-1">Your Referral Code:</p>
          <h4 className="text-lg font-mono text-blue-900">{referralCode}</h4>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-3 text-gray-700">🎁 Rewards Unlocked</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">🧢 NGO Cap</div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">🎖️ Certificate</div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">💼 Experience Letter</div>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-md mb-6">
        <strong className="text-purple-800">📣 Note:</strong> Leaderboard will be updated every 24 hours.
      </div>

      {/* Leaderboard Button */}
      <div className="text-center">
        <a
          href="/leaderboard"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          View Leaderboard
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
