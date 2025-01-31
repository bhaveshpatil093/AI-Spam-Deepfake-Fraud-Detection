import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css"; // Import CSS for styling

const Dashboard = () => {
  // Mock data for demonstration
  const [alerts, setAlerts] = useState([
    { id: 1, type: "Spam Call", message: "Suspicious call detected from +123456789.", timestamp: "2023-10-01 10:30 AM" },
    { id: 2, type: "Deepfake Fraud", message: "Potential deepfake detected in VKYC video.", timestamp: "2023-10-01 11:15 AM" },
    { id: 3, type: "Transaction Fraud", message: "Unusual transaction detected: $5000 to unknown account.", timestamp: "2023-10-01 12:00 PM" },
  ]);

  const [stats, setStats] = useState({
    totalAlerts: 12,
    resolvedAlerts: 8,
    pendingAlerts: 4,
  });

  // Simulate real-time updates (mock API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        {
          id: prevAlerts.length + 1,
          type: "Spam Call",
          message: `New suspicious call detected from +${Math.floor(Math.random() * 1000000000)}.`,
          timestamp: new Date().toLocaleString(),
        },
      ]);
    }, 5000); // Add a new alert every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1>Fraud Detection Dashboard</h1>
        <p>Real-time monitoring and alerts for spam calls, deepfake fraud, and transaction anomalies.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stats-card">
          <h3>Total Alerts</h3>
          <p>{stats.totalAlerts}</p>
        </div>
        <div className="stats-card">
          <h3>Resolved Alerts</h3>
          <p>{stats.resolvedAlerts}</p>
        </div>
        <div className="stats-card">
          <h3>Pending Alerts</h3>
          <p>{stats.pendingAlerts}</p>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="alerts-section">
        <h2>Recent Alerts</h2>
        <table className="alerts-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Message</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.type}</td>
                <td>{alert.message}</td>
                <td>{alert.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
