// src/components/ImageGallery.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ImageGallery.css';
import image1 from '../assets/preProcessing-preview.jpg';
import image2 from '../assets/voiceOver-preview.jpg';
import image3 from '../assets/L1-preview.jpg';
import image4 from '../assets/L2-preview.jpg';
import image5 from '../assets/L3-preview.jpg';

const images = [image1, image2, image3, image4, image5];

const ImageGallery = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    let timeout;
    if (inView) {
      timeout = setTimeout(() => {
        setShowAnimation(true);
      }, 2000); // Set delay to 5 seconds
    }

    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <div className="image-gallery" ref={ref}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`image-item image-item-${index + 1}`}
          initial={{ opacity: 0, x: 100 }}
          animate={showAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: showAnimation ? index * 0.3 : 0 }}
        >
          <img src={image} alt={`Gallery ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
