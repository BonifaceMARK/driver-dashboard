import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-gray-800 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      {/* Sidebar */}
      <div
      className={`bg-gray-800 text-white h-screen w-64 md:w-48 lg:w-64 xl:w-80 fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-40`}
    >
        <div className="p-4 text-2xl font-bold">Driver Dashboard</div>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-700">Profile</li>
            <li className="py-2 px-4 hover:bg-gray-700">Settings</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
