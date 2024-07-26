import React from 'react';
import '.styles/Component-Specific/ServiceSection.css'; 

interface Service {
  name: string;
  imageUrl: string;
  description: string;
}

const ServiceSection: React.FC = () => {
  const services: Service[] = [
    {
      name: 'Concierge Assistance',
      imageUrl: '/assets/services/concierge.jpg',
      description:
        'Let our dedicated concierge team assist you with all your travel needs, from booking tours to arranging transportation.',
    },
    {
      name: 'Flexible Booking Options',
      imageUrl: '/assets/services/flexible-booking.jpg',
      description:
        'Enjoy the convenience of flexible booking options, allowing you to customize your stay and manage your travel plans with ease.',
    },
    {
      name: 'Airport Transfers',
      imageUrl: '/assets/services/airport-transfers.jpg',
      description:
        'Relax and let us take care of your transportation. Our reliable airport transfer service ensures a smooth and stress-free arrival.',
    },
    {
      name: 'Wellness & Recreation',
      imageUrl: '/assets/services/wellness.jpg',
      description:
        'Rejuvenate your mind and body with our wellness and recreation facilities. From a refreshing dip in our pool to a relaxing spa treatment, we have something for everyone.',
    },
    // Add more service objects as needed
  ];

  return (
    <section className="services__section" id="services">
      <div className="container">
        <div className="section__heading">
          <h2>Our Services</h2>
          <p className="section__description">
            At Kingsukh Guest House, we strive to provide exceptional service
            that enhances your stay. Explore our range of amenities and offerings
            designed to make your experience unforgettable.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
