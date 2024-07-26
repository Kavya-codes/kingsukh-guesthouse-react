import React, { useState } from 'react';
import './ImageGallery.css'; 

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: Image[] = [
    { src: '/assets/gallery/image1.jpg', alt: 'Gallery Image 1' },
    { src: '/assets/gallery/image2.jpg', alt: 'Gallery Image 2' },
    { src: '/assets/gallery/image3.jpg', alt: 'Gallery Image 3' },
    { src: '/assets/gallery/image4.jpg', alt: 'Gallery Image 4' },
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-gallery">
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="gallery-image"
      />
      <div className="gallery-controls">
        <button onClick={handlePrevious} disabled={currentImageIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentImageIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
