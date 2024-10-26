import React, { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";

function AdminLogin() {


    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');
  
      try {
        // Send Admin ID and Password to the backend for verification
        const response = await fetch('http://localhost:8000/company/admin-login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminId, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage('Login successful!'); // Success message
          // Redirect or perform further actions upon successful login
          navigate('/dashboard')
        } else {
          setMessage(data.error || 'Invalid Admin ID or Password');
        }
      } catch (error) {
        setMessage('Error: Unable to login');
        console.error('Login Error:', error);
      }
      setLoading(false);
    };

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form onSubmit={handleLogin}>

          <h2>Admin ID</h2>
          <input type="text" 
          placeholder="Admin ID" 
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          required/>

          <h2>Password</h2>

          <input type="password"
           placeholder="Password"
           value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />

          <div className="register-btn-container">
            <p className="admin-tips">*Enter your unique Admin ID provided </p>

            <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
          </button>
          </div>
        </form>
        {message && <p>{message}</p>} {/* Display success or error message */}
      </div>
      <div className="register-description-container">
        <h1>Smart Attendance System</h1>
      </div>
    </div>
  );
}

export default AdminLogin;
