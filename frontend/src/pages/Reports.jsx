import React from 'react';

function Reports() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Reports</h2>
      <div className="container">
        <button>Download CSV</button>
        <button>Download PDF</button>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Clicked</th>
              <th>Reported</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>john@example.com</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
