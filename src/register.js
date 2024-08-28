import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate("/user-login"); 
    };

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form>
          <h2>User ID</h2>
          <input type="text" placeholder="User ID" />
          <h2>User Email</h2>
          <input type="email" placeholder="User Email" />
          <h2>Password</h2>
          <input type="password" placeholder="Password" />
          <div className="register-btn-container">
            <p className="already-acc">Already have an Account?</p>

            <button type="submit" className="register-button" onClick={handleRegisterClick}>
                Register
                
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

export default Register;
