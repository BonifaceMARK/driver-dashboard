import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Dashboard Title */}
      <h1 className="text-2xl font-semibold">Single Ticketing System</h1>
      
      {/* Middle Section: Search Bar and Time */}
      <div className="flex items-center space-x-8">
        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>

        {/* Date and Time */}
        <div>
          <p className="text-sm">
            {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Right Section: Notifications, Profile, and Dark Mode */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.41 18 12V7a6 6 0 10-12 0v5c0 1.41-.21 2.79-.595 3.595L4 17h5m6 0a2 2 0 11-4 0h4z" />
            </svg>
          </button>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </div>

        {/* User Profile with Dropdown */}
        <div className="relative">
          <button className="flex items-center space-x-2 focus:outline-none">
           
            <span className="text-sm">Mark Luis</span>
          </button>
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 hidden group-hover:block">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
