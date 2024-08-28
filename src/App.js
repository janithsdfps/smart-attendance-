import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Dashboard from './dashboard.js';
import Choose_login from './choose-login.js';
import Register from './register.js';
import UserLogin from './user-login.js';
import AdminLogin from './admin-login.js';
import ForgotPw from './forgot-pw.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Define routes for different screens */}
      <Routes>
        <Route path="/" element={<Choose_login />} /> {/* Main login screen */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard screen */}
        <Route path="/register" element={<Register />} /> {/* Register screen */}
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/forgot-pw" element={<ForgotPw/>}/>
      </Routes>
    </div>
  );
}

export default App;
