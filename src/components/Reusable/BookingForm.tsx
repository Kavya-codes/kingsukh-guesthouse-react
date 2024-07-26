import React, { useState } from 'react';
import './BookingForm.css'; 

interface BookingFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    arrivalDate: string;
    departureDate: string;
    roomType: string;
    guests: number;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, email, phone, arrivalDate, departureDate, roomType, guests });
    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setArrivalDate('');
    setDepartureDate('');
    setRoomType('');
    setGuests(1);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Stay</h2>
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Your Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="arrivalDate">Arrival Date:</label>
        <input
          type="date"
          id="arrivalDate"
          name="arrivalDate"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="roomType">Room Type:</label>
        <select
          id="roomType"
          name="roomType"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        >
          <option value="">Select Room Type</option>
          <option value="Cozy Heaven Room">Cozy Heaven Room</option>
          <option value="Spacious Serenity Suite">Spacious Serenity Suite</option>
          {/* Add more room type options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
          required
        />
      </div>
      <button type="submit" className="btn">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
