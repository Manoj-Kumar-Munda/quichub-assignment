import React from 'react'

const Dashboard = () => {
  const campaigns = [
    { id: 1, name: 'Summer Sale', successfulSent: 1000, pendingFailed: 50 },
    { id: 2, name: 'New Product Launch', successfulSent: 500, pendingFailed: 25 },
  ]

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="table-container">
        <table className="campaign-table">
          <thead>
            <tr>
              <th>Campaign ID</th>
              <th>Campaign Name</th>
              <th>Successful Sent</th>
              <th>Pending/Failed</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td>{campaign.id}</td>
                <td>{campaign.name}</td>
                <td>{campaign.successfulSent}</td>
                <td>{campaign.pendingFailed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard