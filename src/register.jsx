import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './register.css'; 
const Register = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
    navigate("/services");
  };

  return (
    <div className="register-container">
      <h2>Register for AMST</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Register;
