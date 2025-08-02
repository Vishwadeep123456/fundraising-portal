import React from "react";

const Dashboard = () => {
  const intern = {
    name: "Vishwadeep Kumar Dubey",
    referralCode: "vishwadeep2025",
    donations: 3500,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-6">
      <div className="max-w-3xl mx-auto bg-white/70 shadow-xl rounded-2xl p-8 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-pink-800 mb-4">🎯 Fundraising Dashboard</h1>
        
        <div className="mb-6 space-y-2">
          <p className="text-lg">
            <span className="font-semibold text-gray-700">👤 Intern Name:</span> {intern.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">🔗 Referral Code:</span> <span className="bg-pink-200 px-2 py-1 rounded text-pink-900 font-mono">{intern.referralCode}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">💰 Total Donations Raised:</span> <span className="text-green-700 font-bold">₹ {intern.donations}</span>
          </p>
        </div>

        <div className="bg-pink-100 border border-pink-200 rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-2 text-pink-700">🎁 Rewards</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>🥉 Bronze Badge - ₹1000</li>
            <li>🥈 Silver Badge - ₹3000</li>
            <li>🥇 Gold Badge - ₹5000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
