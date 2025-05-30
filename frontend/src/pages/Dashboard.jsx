import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Live Campaign Tracker</h2>
      <div className="container">
        <p>Total Campaigns: 5</p>
        <p>Emails Sent: 1200</p>
        <p>Clicks Tracked: 187</p>
        <p>Reports Filed: 34</p>
      </div>
    </div>
  );
}

export default Dashboard;
