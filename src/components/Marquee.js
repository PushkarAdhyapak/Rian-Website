import React from 'react';
import './Marquee.css';

// Example logos - replace with your actual client logos
import logo1 from '../assets/ml1.jpg';
import logo2 from '../assets/ml2.jpg';
import logo3 from '../assets/ml3.jpg';
import logo4 from '../assets/ml4.jpg';
import logo5 from '../assets/ml5.jpg';

const logos = [logo1, logo2, logo3, logo4, logo5];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {logos.map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt={`Client logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
