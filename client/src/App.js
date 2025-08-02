// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 text-gray-800 font-sans">

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-md border-b border-pink-200">
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="flex-grow px-4 py-6 sm:px-8 sm:py-10">
        <div className="max-w-5xl mx-auto bg-white/90 shadow-2xl rounded-2xl border border-pink-100 p-6 sm:p-10 space-y-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-4 border-t border-pink-200 bg-white/70">
        © {new Date().getFullYear()} <span className="font-semibold text-pink-500">Fundraising Portal</span> • All rights reserved.
      </footer>
    </div>
  );
}

export default App;
