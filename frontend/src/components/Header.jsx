import React from 'react';

function Header() {
  return (
    <header className="bg-[#0f0f0f] border-b border-green-700 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">📊 Admin Dashboard</h1>
      <div>
        <span className="text-green-300">Logged in as admin</span>
      </div>
    </header>
  );
}

export default Header;
