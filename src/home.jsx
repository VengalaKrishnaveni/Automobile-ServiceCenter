// App.js
import React from 'react';
import Navbar from './Homecomponents/Navbar';
import Welcome from './Homecomponents/Welcome';
import CallToAction from './Homecomponents/CallToAction';
import Contact from './Homecomponents/Contact';
import HomeServicesCard from './Homecomponents/HomeServicesCard';
import Footer from './Homecomponents/Footer';
import LoginSection from './Homecomponents/LoginSection';

import './home.css'; 

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <HomeServicesCard />
      <LoginSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
