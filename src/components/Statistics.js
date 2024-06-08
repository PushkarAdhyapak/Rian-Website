// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Statistics.css';

const Statistics = () => {
  const [countUsers, setCountUsers] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.statistics-container');
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight / 2) {
        setIsInView(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      let startUsers = 1;
      let startClients = 1;
      const endUsers = 6500;
      const endClients = 170;
      const duration = 1000; // 3 seconds

      const startTimestamp = Date.now();

      const updateCounts = () => {
        const currentTimestamp = Date.now();
        const elapsedTime = currentTimestamp - startTimestamp;

        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          setCountUsers(Math.floor(startUsers + progress * (endUsers - startUsers)));
          setCountClients(Math.floor(startClients + progress * (endClients - startClients)));
          requestAnimationFrame(updateCounts);
        } else {
          setCountUsers(endUsers);
          setCountClients(endClients);
        }
      };

      requestAnimationFrame(updateCounts);

      return () => {
        cancelAnimationFrame(updateCounts);
      };
    }
  }, [isInView]);

  return (
    <div className="statistics-container">
      <div className="statistics-item">
        <span>Active Users</span>
        <motion.div className="number">
          {countUsers.toLocaleString()}
        </motion.div>
      </div>
      <div className="statistics-item">
        <span>Global Clients</span>
        <motion.div className="number">
          {countClients.toLocaleString()}+
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
