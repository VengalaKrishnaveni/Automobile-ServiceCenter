import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Services from './services'; 
import Home from './home'; 
import Register from './register'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
