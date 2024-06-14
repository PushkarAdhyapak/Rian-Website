// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
//import logo from '../assets/onlyrian.jpg'
//import onlylogo from '../assets/rianonlylogo.jpg'
import logoimage from '../assets/file.png'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > scrollPosition) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <nav className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
     
      
      <img src={logoimage} alt="Rian Logo" className="navbar-logo-image" />
      <ul className="navbar-menu">
        {['Home', 'About', 'Solutions', 'Resources', 'Contact Us'].map((item) => (
          <motion.li
            key={item}
            className={`navbar-item ${active === item ? 'active' : ''}`}
            onClick={() => handleItemClick(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;