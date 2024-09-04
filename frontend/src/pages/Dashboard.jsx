import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/v1/campaign").then((res) => {
      res.json().then((data) => {
        setData(data?.data);
      });
    });
  }, []);

  console.log(data);
  

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
            { data && data?.map((campaign) => (
              <tr key={campaign._id}>
                <td>{campaign._id}</td>
                <td>{campaign.name}</td>
                <td>{campaign.delivered}</td>
                <td>{campaign.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard