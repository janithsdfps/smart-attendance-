import React from "react";
import "./Styles/Register.css";
import {  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../src/Firebase';
import { useState } from "react";

function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleRegisterClick = () => {
    //   navigate("/user-login"); 
    // };
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
        navigate("/user-login");
      } catch (error) {
        alert(error.message);
      }
    };

    const login = () => {
      navigate("/user-login")
    }
   
  

  return (
    <div className="register-screen">
      <h1 className="userreg"> 
        User Register
      </h1>

      <div className="register-form-container">

        <form onSubmit={handleSignup}>
          
          <h2>User Email</h2>

          <input type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required/>


          <h2>Password</h2>

          <input type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
           />


          <div className="register-btn-container">
            <p className="already-acc" onClick={login}>Already have an Account?</p>

            <button type="submit" className="register-button">
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
