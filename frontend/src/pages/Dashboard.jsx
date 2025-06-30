import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="button-group">
        <button onClick={() => navigate("/smtp")}>SMTP Settings</button>
        <button onClick={() => navigate("/compose")}>Compose Mail</button>
        <button onClick={() => navigate("/sent")}>View Sent Mails</button>
        <button onClick={logout} className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
