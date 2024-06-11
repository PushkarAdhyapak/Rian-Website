// src/components/ImageSection.js
import React, { useState, useEffect } from 'react';
import './ImageSection.css';
import dark from '../assets/lap1copy1.jpg';

const ImageSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Change text color to black when scrolled down
      if (position > 0) {
        setTextColor('black');
      } else {
        setTextColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = 1 + (scrollPosition / window.innerHeight);
  const fadeOut = 1 - Math.min(scrollPosition / (window.innerHeight / 2), 1);
  const textOpacity = Math.min(scrollPosition / (window.innerHeight / 2), 1);
  const textScale = 0.8 + (textOpacity * 0.2); // From 0.8 to 1 as we scroll

  return (
    <div className="container">
      <img
        className="image"
        src={dark}
        alt=""
        style={{ transform: `scale(${scale})`, opacity: fadeOut }}
      />
      <div className="top-text" style={{ opacity: fadeOut, color: textColor }}>
        Strategic<br />
        LOCALIZATION<br />
        PARTNER
      </div>
      <div className="bottom-text" style={{ opacity: textOpacity, transform: `scale(${textScale})` }}>
        World's leading brands trust RIAN with their most critical Translations and Localization.
      </div>
    </div>
  );
};

export default ImageSection;
