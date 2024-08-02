import React from 'react';
import ' styles/Component-Specific/HomeSection.css'; 

const HomeSection: React.FC = () => {
  return (
    <section className="home__section" id="home">
      <div className="container">
        <div className="home__content">
          <div className="home__text">
            <h1>
              <span className="highlight">Experience Tranquility</span> at
              Kingsukh Guest House
            </h1>
            <p>
              Escape to a serene retreat where comfort and hospitality meet the
              beauty of nature.
            </p>
            <a href="https://wa.link/at5ion" className="btn">
              Book Your Stay Now
            </a>
          </div>
          <div className="home__image">
            <img src="/assets/1.jpg" alt="Kingsukh Guest House" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
