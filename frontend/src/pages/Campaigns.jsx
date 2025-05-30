import React from 'react';

function Campaigns() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Campaigns</h2>
      <div className="container">
        <button>+ New Campaign</button>
        <ul>
          <li>Q2 Test - 2025-04-01</li>
          <li>Invoice Scam - 2025-03-20</li>
        </ul>
      </div>
    </div>
  );
}

export default Campaigns;
