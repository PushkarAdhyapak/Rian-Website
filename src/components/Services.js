// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h3>Services We Offer</h3>

      <div className="service-boxes">
        <div className="service-box blue">
          <h4>Rian Platform</h4>
          <p>Description of Service 1</p>
        </div>

        <div className="service-box violet">
          <h4>Video Localization</h4>
          <p>Description of Service 2</p>
        </div>

        <div className="service-box yellow">
          <h4>Document Translation/ Localization</h4>
          <p>Description of Service 3</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
