// src/pages/Login.js

import React from "react";
import { FaBullseye } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 px-4 sm:px-6">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-300">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3 mb-2">
          <FaBullseye className="text-pink-600 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-600">
            Fundraising Portal
          </h1>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Join the mission. Make a difference.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 mt-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300 text-white font-semibold shadow-lg">
          Login
        </button>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-600 mt-4">
          Don’t have login credentials? Contact your coordinator.
        </p>
      </div>
    </div>
  );
};

export default Login;
