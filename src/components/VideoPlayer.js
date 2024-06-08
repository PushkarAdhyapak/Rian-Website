// src/components/VideoPlayer.js
import React from 'react';
import { motion } from 'framer-motion';
import './VideoPlayer.css';

const videos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3"
];

const VideoPlayer = () => {
  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className="video-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: index * 0.5 }}
        >
          <iframe
            title={`Video ${index + 1}`}
            className="video-player"
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoPlayer;
