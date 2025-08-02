// src/components/RewardCard.jsx
import React from 'react';

const RewardCard = ({ title, unlocked }) => {
  return (
    <div className={`p-5 rounded-xl shadow-lg border transition-all duration-300 
      ${unlocked ? 'bg-green-100 border-green-400' : 'bg-gray-100 border-gray-300'}`}>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-sm">
        {unlocked ? '✅ Unlocked' : '🔒 Locked - Keep fundraising!'}
      </p>
    </div>
  );
};

export default RewardCard;
