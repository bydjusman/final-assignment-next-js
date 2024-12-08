"use client";

import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search something here"
              className="w-[492px] h-[44px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 text-blue-500">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
          <div className="relative cursor-pointer">
            <AiOutlineBell className="text-gray-600" size={24} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <FiSettings className="text-gray-600 cursor-pointer" size={24} />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Profile */}
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
