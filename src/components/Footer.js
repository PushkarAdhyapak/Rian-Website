import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.3 }, // Scale up on hover
  };

  const topicVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div className="footer-labels" variants={socialVariants}>
          <h2>Rian</h2>
          <div className="social-icons">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
            <motion.a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
            >
              <i className="fab fa-youtube"></i>
            </motion.a>
          </div>
        </motion.div>
        <motion.div className="footer-topics" variants={topicVariants}>
          <h3>Topics</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
