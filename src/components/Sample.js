// src/components/Samples.js
import React from 'react';
import './Sample.css';
import { motion } from 'framer-motion';

const Samples = () => {
  return (
    <div className="samples-container">
    <div className="samples-heading">
      <h3>Rian’s Power Duo</h3>
      <p>
        Human Brilliance + AI Power = Langtech <br />
        We Foster the Collective brilliance of minds and machines, shaping the future of language <br />
        technology with precision, insight, and a relentless pursuit of excellence.
      </p>
    </div>

      <div className="youtube-videos">
        <motion.div
          className="youtube-video-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h6>Source</h6>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Source Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          className="youtube-video-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h6>Target</h6>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hQ796pmPd0g"
            title="Target Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Samples;
