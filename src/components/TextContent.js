// src/components/TextContent.js
import React from 'react';
import './TextContent.css';
import { motion } from 'framer-motion';
//import './VideoPlayer.css';
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'

const videos = [video1, video2, video3];

const TextContent = () => {
  return (
    <div className="text-and-video-container">
      <div className="text-content">
        <h6>Our Happy Customers</h6>
        <p className="single">World’s leading brands trust RIAN with their most critical Translations and Localization</p>
      </div>

      <div className="video-container">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="video-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: index * 0.5 }}
          >
            <video
              className="video-player"
              controls
              src={video}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TextContent;
