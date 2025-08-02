// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 text-pink-600 font-bold text-xl">
        <FaBullseye className="text-2xl" />
        <span>Fundraising Portal</span>
      </div>
      <div className="space-x-4 text-sm font-medium">
        <Link to="/" className="hover:text-pink-600">Login</Link>
        <Link to="/dashboard" className="hover:text-pink-600">Dashboard</Link>
        <Link to="/leaderboard" className="hover:text-pink-600">Leaderboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
