// src/components/Global.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Global.css';

const Global = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const bottomOfViewport = window.scrollY + window.innerHeight;
      const globalContainerOffset = document.querySelector('.global-container').offsetTop;
      const bottomOfGlobalContainer = globalContainerOffset + document.querySelector('.global-container').offsetHeight;

      if (bottomOfViewport > bottomOfGlobalContainer) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="global-container"
      initial={{ opacity: 0, y: '100vh' }} // Start from bottom of the screen
      animate={controls}
      transition={{ duration: 1, type: 'spring', stiffness: 120, damping: 15 }}
    >
      <h2 className="global-text">
        Ready to go <span className="highlight">Global</span>?
      </h2>
      <button className="global-button">Book A Meet with Rian</button>
    </motion.div>
  );
};

export default Global;
