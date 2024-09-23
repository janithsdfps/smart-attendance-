import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './App.css';  

function Choose_login() {
  const navigate = useNavigate();  

  const handleUserLoginClick = () => {
    navigate('/register');  
  };

  const userlogin = () => {
    navigate('/user-login');  
  };

  const handleAdminLoginClick = () => {
    navigate('/admin-login');  
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Smart Attendance System</h2>
      </div>
      <div className="button-container">
        <button className="login-button" onClick={userlogin}>User Log In</button>
        <button className="login-button" onClick={handleAdminLoginClick}>Admin Log In</button>
        <button className="login-button" onClick={handleUserLoginClick}>Registation</button>
      </div>
    </div>
  );
}

export default Choose_login;
