import React from 'react';
import ' styles/Component-Specific/ContactSection.css'; 

const ContactSection: React.FC = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="container">
        <div className="section__heading">
          <h2>Contact Us</h2>
          <p className="section__description">
            Have questions? Need assistance? Get in touch with us! We're here to
            help you plan your perfect stay.
          </p>
        </div>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <span>
                  Beside Barshal Water Tank,
                  <br />
                  Manpur, Barhanti,
                  <br />
                  West Bengal 723156
                </span>
              </li>
              <li>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <span>
                  <a href="mailto: kkghosh0099@gmail.com">
                    kkghosh0099@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <span>
                  <a href="tel:+919007062180">+91 9007062180</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="contact__form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea id="message" name="message" rows="5" required />
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
