import React from "react";
import "./Styles/Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";


function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate("/forgot-pw"); 
    };

    const redirect = () => {
        navigate("/register"); 
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
      
        navigate("/dashboard"); 
      } catch (error) {
        alert(error.message);
      }
    };
      
    

  return (
    <div className="register-screen">
      <h1 className="userLoging">
        user Login
      </h1>

      <div className="register-form-container">

        <form onSubmit={handleLogin}>
          <h2>Email</h2>.
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h2>Password</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="register-btn-container">

            <div>
            <p className="already-acc" onClick={handleForgotPassword}>Forgot Password?</p>
            <p className="already-acc" onClick={redirect}>Don't have an Account?</p>
            </div>
            
            <button type="submit" className="register-button">
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
