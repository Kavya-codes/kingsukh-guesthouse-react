import React from 'react';
import ' styles/Component-Specific/GallerySection.css'; 

const GallerySection: React.FC = () => {
  return (
    <section className="gallery__section" id="gallery">
      <div className="container">
        <div className="section__heading">
          <h2>Our Gallery</h2>
          <p className="section__description">
            Experience the beauty of Kingsukh Guest House and its surroundings
            through our captivating images.
          </p>
        </div>
        <div className="gallery__grid">
          <div className="gallery__item">
            <img src="/assets/gallery/image1.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery__item">
            <img src="/assets/gallery/image2.jpg" alt="Gallery Image 2" />
          </div>
          <div className="gallery__item">
            <img src="/assets/gallery/image3.jpg" alt="Gallery Image 3" />
          </div>
          <div className="gallery__item">
            <img src="/assets/gallery/image4.jpg" alt="Gallery Image 4" />
          </div>
          {/* More images to be added */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
