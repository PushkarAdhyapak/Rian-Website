// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
//import logo from '../assets/onlyrian.jpg'
//import onlylogo from '../assets/rianonlylogo.jpg'
import logoimage from '../assets/file.png'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  //const [active, setActive] = useState('Home');
  const location = useLocation();

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

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' }
  ];
  return (
    <nav className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
      <img src={logoimage} alt="Rian Logo" className="navbar-logo-image" />
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={item.path} className="navbar-link">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;