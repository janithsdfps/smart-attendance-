import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/dashboard"); 
    };

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form>
          <h2>Admin ID</h2>
          <input type="text" placeholder="Admin ID" />
          <h2>Password</h2>
          <input type="password" placeholder="Password" />
          <div className="register-btn-container">
            <p className="admin-tips">*Enter your unique Admin ID provided </p>

            <button type="submit" className="register-button" onClick={handleRegisterClick}>
                Login
                
            </button>

          </div>
          
        </form>
      </div>
      <div className="register-description-container">
        <h1>Smart Attendance System</h1>
      </div>
    </div>
  );
}

export default AdminLogin;
