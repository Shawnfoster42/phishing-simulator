import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-[#0a0a0a] text-green-400 h-full p-4 border-r border-green-700">
      <h2 className="text-xl font-bold mb-6">🔐 PhishSim</h2>
      <nav className="flex flex-col gap-2">
        <a href="#" className="hover:text-green-300">Dashboard</a>
        <a href="#" className="hover:text-green-300">Campaigns</a>
        <a href="#" className="hover:text-green-300">Templates</a>
        <a href="#" className="hover:text-green-300">Targets</a>
        <a href="#" className="hover:text-green-300">Reports</a>
        <a href="#" className="hover:text-green-300">Settings</a>
      </nav>
    </div>
  );
}

export default Sidebar;
