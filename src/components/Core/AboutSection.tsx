import React from 'react';
import ' styles/Component-Specific/AboutSection.css'; 

const AboutSection: React.FC = () => {
  return (
    <section className="about__section" id="about">
      <div className="container">
        <div className="section__heading">
          <h2>About Kingsukh Guest House</h2>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
        </div>
        <div className="about__content">
          <div className="about__text">
            <p>
              Nestled amidst the serene beauty of Manpur, Baranti, Kingsukh Guest
              House offers a tranquil escape from the hustle and bustle of city
              life. Our charming guesthouse provides a cozy and comfortable stay,
              perfect for those seeking relaxation and rejuvenation.
            </p>
            <p>
              Experience the warm hospitality of our dedicated staff, who go the
              extra mile to ensure your every need is met. We pride ourselves on
              providing a personalized touch, making you feel right at home.
            </p>
            <p>
              Enjoy the breathtaking views of Baranti Hill and Baranti Lake,
              which are just a stone's throw away from our guesthouse. Indulge in
              the serenity of nature, take a refreshing dip in our pool, or simply
              relax in our beautifully appointed rooms.
            </p>
            <p>
              Kingsukh Guest House is the ideal destination for travelers seeking
              a unique and unforgettable experience. Whether you're on a romantic
              getaway, a family vacation, or a solo adventure, we're here to make
              your stay truly special.
            </p>
          </div>
          <div className="about__image">
            <img src="/assets/out.jpg" alt="About Kingsukh" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
