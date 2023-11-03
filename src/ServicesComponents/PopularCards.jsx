import React from 'react';

// A single popular card component
const PopularCard = ({ title, imageUrl, bookingId }) => (
  <div className="popular-card">
    <div className="title">
      <h3 className="card-title">{title}</h3>
      {/* <div className="official">
        <CheckIcon /> 
      </div> */}
    </div>
    <img src={imageUrl} alt="Card Image" />
    <button className="btn bookNow" id={bookingId || title}>Book Now</button>
  </div>
);

// The parent component that renders all the popular cards
const PopularServiceCenters = () => {
  const services = [
    { title: 'Auto Care Center', imageUrl: 'https://source.unsplash.com/500x300/?automobile', bookingId: 'Auto Care Center' },
    { title: 'Audi Service Center', imageUrl: 'https://source.unsplash.com/500x300/?audi', bookingId: 'Audi Service Center' },
    { title: 'Tesla Service Center', imageUrl: 'https://source.unsplash.com/500x300/?tesla', bookingId: 'Tesla Service Center' },
    { title: 'Tata Service Center', imageUrl: 'https://source.unsplash.com/500x300/?tata' },
    { title: 'Fast & Furious Garage', imageUrl: 'https://source.unsplash.com/500x300/?garage', bookingId: 'Tata Service Center' },
    { title: 'Car Experts', imageUrl: 'https://source.unsplash.com/500x300/?car-experts', bookingId: 'Car Experts' }
  ];

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Popular Service Centers</h2>
      <div className="popular">
        {services.map(service => (
          <PopularCard
            key={service.title}
            title={service.title}
            imageUrl={service.imageUrl}
            bookingId={service.bookingId}
          />
        ))}
      </div>
    </>
  );
};

export default PopularServiceCenters;
