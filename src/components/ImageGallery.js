// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageGallery.css';
import image1 from '../assets/postProcessing.jpg'
import image2 from '../assets/voiceOver.jpg'
import image3 from '../assets/L3.jpg'
import image4 from '../assets/L4.jpg'
import image5 from '../assets/L5.jpg'

const images = [image1, image2, image3,image4,image5]; // Replace with your image paths
const transitionDuration = 0.5; // Duration of each transition in seconds
const transitionDelay = 1.5; // Delay between transitions in seconds

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDelay * 1000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="image-gallery-container">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === currentImageIndex && (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="image-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
