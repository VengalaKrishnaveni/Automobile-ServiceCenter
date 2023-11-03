// components/Navbar.js
import React from 'react';
import logo from '../logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="logo-img">
      <img src={logo} alt="Logo" />
      <h1>AMST</h1>
    </div>
    <div className="nav-links">
      <ul>
        <li><button className="btn-nav">Home</button></li>
        <li><a href="#footer"><button className="btn-nav">Contact Us</button></a></li>
        <li><a href="/login"><button className="btn-nav">Login</button></a></li>
      </ul>
    </div>
  </div>
);

export default Navbar;