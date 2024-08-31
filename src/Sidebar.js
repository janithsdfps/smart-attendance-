import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarVisible, toggleSidebar }) {
  return (
    <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      <h2>AMS</h2>
        <nav>
          <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/student">Student</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
    </div>
    
  );
}

export default Sidebar;

