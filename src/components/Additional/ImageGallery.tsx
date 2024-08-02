import React, { useState } from 'react';
import './ImageGallery.css'; 

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: Image[] = [
    { src: '/assets/ayodhya.webp', alt: 'Gallery Image 1' },
    { src: '/assets/baranti.webp', alt: 'Gallery Image 2' },
    { src: '/assets/flower.jpg', alt: 'Gallery Image 3' },
    { src: '/assets/large.jpg', alt: 'Gallery Image 4' },
    { src: '/assets/mithonDam.webp', alt: 'Gallery Image 5'},
    { src: '/assets/out.jpg', alt: 'Gallery Image 6' },
    { src: '/assets/palash.webp', alt: 'Gallery Image 7' },
    { src: '/assets/recep.jpg', alt: 'Gallery Image 8' },
    { src: '/assets/room1.jpg', alt: 'Gallery Image 9' },
    { src: '/assets/service.jpg', alt: 'Gallery Image 10' },
    { src: '/assets/small.jpg', alt: 'Gallery Image 11'}
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
