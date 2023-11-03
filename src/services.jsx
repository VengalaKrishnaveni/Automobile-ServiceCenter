import React from 'react';
import ServicesNavbar from './ServicesComponents/ServicesNavBar';
import PopularCards from './ServicesComponents/PopularCards';
import ServiceCentersContent from './ServicesComponents/ServiceCentersContent'
import Footer from './Homecomponents/Footer'

import './services.css'; 


const Services = () => {
  return (
    
    <div className="services-container">
      <ServicesNavbar />
      <PopularCards />
      <ServiceCentersContent />
      <Footer />
    </div>
  );
};

export default Services;
