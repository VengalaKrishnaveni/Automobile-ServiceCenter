// components/Services.js
import React from 'react';

const HomeServicesCard = () => (
  <div className="services">
    <div className="service-card">
      <h3 className="service-title">Comprehensive Auto Care</h3>
      <p>Our Auto Care Center is equipped with the latest technology and staffed by experienced professionals ready to perform a wide array of services. From routine maintenance to complex repairs, we ensure your vehicle is in top-notch condition. Trust us to provide oil changes, brake inspections, tire rotations, and more.</p>
      <button className="btn">Learn More</button>
    </div>

    <div className="service-card">
      <h3 className="service-title">Innovative Electric Vehicle Care</h3>
      <p>Embrace the future with our Tesla Service Center, where advanced technology meets expert care. Our technicians are specially trained to handle the unique needs of Tesla vehicles, offering everything from battery services to software updates. Ensure your electric vehicle continues to perform at its best with our cutting-edge services.</p>
      <button className="btn">Learn More</button>
    </div>

    <div className="service-card">
      <h3 className="service-title">Luxury Vehicle Expertise</h3>
            <p>At our Audi Service Center, we understand the precision and care that luxury vehicles demand. Our certified technicians specialize in Audi models, ensuring your car receives the meticulous attention it deserves. From performance tuning to cosmetic repairs, we uphold the highest standards of excellence.</p>
      <button className="btn">Learn More</button>
    </div>

  </div>
);

export default HomeServicesCard;
