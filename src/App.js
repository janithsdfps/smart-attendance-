import React, { useState } from 'react'; // Added useState import
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Dashboard from './dashboard.js';
import AdminDashboard from './adminDashbord.js';
import ChooseLogin from './choose-login.js';
import Register from './register.js';
import UserLogin from './user-login.js';
import AdminLogin from './admin-login.js';
import ForgotPw from './forgot-pw.js';
import Profile from './profile.js';
import './App.css';
import Sidebar from './Sidebar.js';
import Student from './Student.js';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Manage sidebar state

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`dashboard-layout ${!isSidebarVisible ? "with-sidebar" : ""}`}>
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <div>
        {/* Define routes for different screens */}
        <Routes>
          <Route path="/" element={<ChooseLogin />} /> {/* Main login screen */}
          <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} /> {/* Dashboard screen */}
          <Route path="/register" element={<Register />} /> {/* Register screen */}
          <Route path="/adminDashboard" element={<AdminDashboard toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}  />} />
          <Route path="/user-login" element={<UserLogin />} /> {/* User Login screen */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login screen */}
          <Route path="/forgot-pw" element={<ForgotPw />} /> {/* Forgot Password screen */}
          <Route path="/profile" element={<Profile toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} /> {/* Profile screen */}
          <Route path="/student" element={<Student toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} />
          {/* <Route path="/employees" element={<Employees toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} />
          <Route path="/reports" element={<Reports toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
