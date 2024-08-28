import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function UserLogin() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/dashboard"); 
    };
    const handleForgotPassword = () => {
        navigate("/forgot-pw"); 
    };
    const handleAlreadyAcc = () => {
        navigate("/user-login"); 
    };
      
    

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form>
          <h2>User ID</h2>
          <input type="text" placeholder="User ID" />
          <h2>Password</h2>
          <input type="password" placeholder="Password" />
          <div className="register-btn-container">
            <div>
            <p className="already-acc" onClick={handleForgotPassword}>Forgot Password?</p>
            <p className="already-acc" onClick={handleAlreadyAcc}>Don't have an Account?</p>
            </div>
            
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

export default UserLogin;
