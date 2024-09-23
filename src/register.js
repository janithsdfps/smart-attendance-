import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/Firebase';
import "./Styles/Register.css";

function Register() {
  const navigate = useNavigate();
  
  // Firebase Auth states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Company Info states
  const [companyName, setCompanyName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // Status states
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Firebase Auth Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Signup successful!');
      navigate("/user-login");
    } catch (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  // Submit company registration details to MongoDB through Django Backend
  const handleCompanyRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const companyData = {
      companyName,
      adminEmail,
      address,
      phoneNumber
    };

    try {
      const response = await fetch('http://localhost:8000/api/register-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        setSuccessMessage('Company successfully registered!');
        navigate("/user-login");
      } else {
        setErrorMessage('Failed to register company.');
        navigate("/user-login");
      }
    } catch (error) {
      setErrorMessage('Error connecting to server.');
      navigate("/user-login");
    }

    setLoading(false);
  };

  // Navigate to login page
  const navigateToLogin = () => {
    navigate("/user-login");
  };

  return (
    <div className="register-screen">
      <h1 className="userreg">User Register</h1>

      <div className="register-form-container">
        {/* Firebase Authentication Section */}
        <form onSubmit={handleSignup}>
          <h2>User Email</h2>
          <input
            type="email"
            placeholder="User Email"
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
            <p className="already-acc" onClick={navigateToLogin}>
              Already have an Account?
            </p>

            <button type="submit" className="register-button" disabled={loading}>
              {loading ? 'Registering...' : 'Verify'}
            </button>
          </div>
        </form>

        {/* Company Registration Section */}
        <form onSubmit={handleCompanyRegister}>
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </label>

          <label>
            Admin Email:
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label> <br></br>

          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>

          <button type="submit" disabled={loading} className="register-button" >
            {loading ? 'Registering...' : 'Register Company'}
          </button>
        </form>

        {/* Status Messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="register-description-container">
        <h1>Smart Attendance System</h1>
      </div>
    </div>
  );
}

export default Register;
