import React, { useState, useEffect } from 'react';

const cardsData = [
    {
        title: "Auto Care Center",
        isOfficial: true,
        imageUrl: "https://source.unsplash.com/500x300/?automobile",
        buttonText: "Book Now",
        rating: "4.2",
        distance: "25km",
        price: "$400",
        type: "car"
    },
    {
        title: "Car Clinic",
        imageUrl: "https://source.unsplash.com/500x300/?car",
        buttonText: "Book Now",
        rating: "4.4",
        distance: "20km",
        price: "$420",
        type: "car"
    },
    {
        title: "Bike & Auto Repair",
        imageUrl: "https://source.unsplash.com/500x300/?bike",
        buttonText: "Book Now",
        rating: "4.1",
        distance: "18km",
        price: "$380",
        type: "motorcycle"
    },
    {
        title: "Auto Pro",
        imageUrl: "https://source.unsplash.com/500x300/?auto",
        buttonText: "Book Now",
        rating: "4.3",
        distance: "15km",
        price: "$390",
        type: "car"
    },
    {
        title: "Truck & Auto Repair",
        imageUrl: "https://source.unsplash.com/500x300/?truck",
        buttonText: "Book Now",
        rating: "4.0",
        distance: "22km",
        price: "$410",
        type: "truck"
    },
    {
        title: "Lorry Service Center",
        imageUrl: "https://source.unsplash.com/500x300/?lorry",
        buttonText: "Book Now",
        rating: "4.2",
        distance: "28km",
        price: "$430",
        type: "truck"
    },
    {
        title: "Audi Service Center",
        isOfficial: true,
        imageUrl: "https://source.unsplash.com/500x300/?audi",
        buttonText: "Book Now",
        rating: "4.5",
        distance: "10km",
        price: "$450",
        type: "car"
    },
    {
        title: 'Moto Master',
        imageUrl: 'https://source.unsplash.com/500x300/?moto',
        rating: '4.4',
        distance: '20km',
        price: '$420',
        type: 'motorcycle'
    },
    {
        title: 'Car Experts',
        imageUrl: 'https://source.unsplash.com/500x300/?car-experts',
        rating: '4.3',
        distance: '24km',
        price: '$430',
        type: 'car'
    },
    {
        title: 'Moto Magic',
        imageUrl: 'https://source.unsplash.com/500x300/?moto-magic',
        rating: '4.1',
        distance: '21km',
        price: '$400',
        type: 'motorcycle'
    },
];

function ServiceCentersContent() {
  const [selectedType, setSelectedType] = useState('all');
  const [filteredCards, setFilteredCards] = useState(cardsData);

  useEffect(() => {
    setFilteredCards(cardsData.filter(card => selectedType === 'all' || card.type === selectedType));
  }, [selectedType]);

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleBookNow = (title) => {
    alert(`${title} is added to cart`);
  };

  const handleLogOut = () => {
    window.location.href = 'login.html';
    alert('You have been logged Out');
  };

  return (
    <div className="content">
      <div className="content-filter">
        <h2 className="title">Service Centers</h2>
        <div className="filters">
          <label htmlFor="filter">Filter by</label>
          <select name="filter" id="filter" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="truck">Truck</option>
          </select>
        </div>
      </div>
      <hr /><br></br>
      <div className="cards">
        {filteredCards.map(card => (
          <div key={card.title} className="card">
            <h3 className="card-title">{card.title}</h3>
            <img src={card.imageUrl} alt="Card" />
            <button className="btn bookNow" onClick={() => handleBookNow(card.title)}>
              {card.buttonText}
            </button>
            <div className="details">
              <div className="rating">★ {card.rating}</div>
              <div className="dot">•</div>
              <div className="distance">{card.distance}</div>
              <div className="dot">•</div>
              <div className="price">{card.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCentersContent;
