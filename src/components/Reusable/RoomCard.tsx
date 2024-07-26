import React from 'react';
import './RoomCard.css'; 

interface RoomCardProps {
  room: {
    name: string;
    imageUrl: string;
    description: string;
    price: number;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.imageUrl} alt={room.name} className="room-image" />
      <div className="room-details">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div className="room-price">
          <span>Starting from</span>
          <strong>₹{room.price}/night</strong>
        </div>
        <a href="https://wa.link/at5ion" className="btn">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
