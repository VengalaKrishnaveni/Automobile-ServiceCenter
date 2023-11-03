import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'; // Make sure the path to the logo is correct

const ServicesNavbar = () => {
    const navigate = useNavigate(); // This is how you get access to the navigate function

    const handleLogout = () => {
        // Perform any logout operations you need to do before navigating
        alert('You have been logged out');
        navigate('/login'); // This will navigate to the login route after logout operations
    };

    return (
        <div className="navbar">
            <div className="logo-img">
                <img src={logo} alt="Logo" /> {/* Make sure curly braces are used correctly here */}
                <h1>AMST</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="/home"><button className="btn-nav">Home</button></a></li> {/* You might want to use Link from react-router-dom here */}
                    <li><a href="#content"><button className="btn-nav">Services</button></a></li>
                    <li><a href="#footer"><button className="btn-nav">Contact Us</button></a></li>
                    <li><button className="btn-nav log-out" onClick={handleLogout}>Log out</button></li>
                </ul>
            </div>
        </div>
    );
};

export default ServicesNavbar;
