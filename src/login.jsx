import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css';

function Login() {
  const navigate = useNavigate(); // Hook for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sampleUser = {
    username: 'abc',
    password: '123'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === sampleUser.username && password === sampleUser.password) {
      
      navigate('/services');
    } else {
      
      alert('Invalid username or password');
    }

    // Clear input fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login to AMST</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p> have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
