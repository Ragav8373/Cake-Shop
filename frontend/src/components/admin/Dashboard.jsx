// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    outOfStock: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error loading stats:", err));
  }, []);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        <div className="card">Products: {stats.totalProducts}</div>
        <div className="card">Orders: {stats.totalOrders}</div>
        <div className="card">Users: {stats.totalUsers}</div>
        <div className="card">Out of Stock: {stats.outOfStock}</div>
      </div>
    </div>
  );
};

export default Dashboard;
