import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';

function Sidebar({ isSidebarVisible, toggleSidebar }) {

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth); // Correctly use the imported auth
      navigate('/user-login'); // Redirect to login page after successful logout
    } catch (error) {
      alert(error.message);
    }
  };
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
          <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
    </div>
    
  );
}

export default Sidebar;

