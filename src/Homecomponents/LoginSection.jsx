import React from 'react';

const LoginSection = () => (
  <div
    className="login-section"
    style={{
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center'
    }}
  >
    <h3 style={{ color: '#333333' }}>Ready to Get Started?</h3>
    <p style={{ color: '#666666' }}>
      Your journey to a hassle-free auto service experience is just a few clicks away!
    </p>
    <a
      href="/login" // Assuming you are using React Router, this should be the route path
      style={{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      Log In
    </a>
    <p style={{ color: '#666666', marginTop: '10px' }}>
      Dont have an account yet? No worries!
    </p>
    <a
      href="/register" // Assuming you are using React Router, this should be the route path
      style={{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#FFA500',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      Sign Up Now
    </a>
    <p style={{ color: '#666666', marginTop: '10px' }}>
      Quick, easy, and gets you back on the road in no time!
    </p>
  </div>
);

export default LoginSection;
