import React from 'react';
import './styles/Component-Specific/RoomsSection.css'; 
import RoomCard from './components/Reusable/RoomCard.tsx'; 

interface Room {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

const RoomsSection: React.FC = () => {
  const rooms: Room[] = [
    {
      name: 'Cozy Heaven Room',
      imageUrl: '/assets/rooms/cozy-heaven.jpg',
      description:
        'Escape to comfort in our Cozy Heaven Room, a snug retreat designed for intimate relaxation.',
      price: 1000,
    },
    {
      name: 'Spacious Serenity Suite',
      imageUrl: '/assets/rooms/spacious-serenity.jpg',
      description:
        'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
      price: 1500,
    },
    // Add more room objects as needed
  ];

  return (
    <section className="rooms__section" id="rooms">
      <div className="container">
        <div className="section__heading">
          <h2>Our Rooms</h2>
          <p className="section__description">
            Discover your perfect haven at Kingsukh Guest House. Choose from our
            variety of comfortable and stylish rooms, each designed to provide
            a peaceful and memorable stay.
          </p>
        </div>
        <div className="rooms__grid">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
