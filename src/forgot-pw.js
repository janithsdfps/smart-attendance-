import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function ForgotPw() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/user-login"); 
    };

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form>
          <h2>Enter Your Email</h2>
          <input type="text" placeholder="Email" />
          <div className="register-btn-container">
            <button type="submit" className="register-button" onClick={handleRegisterClick}>
                Reset Password
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

export default ForgotPw;
