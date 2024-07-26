import React from 'react';
import './Testimonial.css'; 

interface TestimonialProps {
  name: string;
  text: string;
  imageUrl: string; 
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text, imageUrl }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p>{text}</p>
        <div className="testimonial-author">
          {imageUrl && <img src={imageUrl} alt={name} className="author-image" />}
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
