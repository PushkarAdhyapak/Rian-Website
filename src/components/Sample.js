import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Sample.css';

const Samples = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const bottomOfViewport = window.scrollY + window.innerHeight;
      const samplesContainerOffset = document.querySelector('.samples-heading').offsetTop;
      const bottomOfSamplesContainer = samplesContainerOffset + document.querySelector('.samples-heading').offsetHeight;

      if (bottomOfViewport > bottomOfSamplesContainer) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="samples-container">
      <motion.div
        className="samples-heading"
        initial={{ opacity: 0, y: '50vh' }} // Start from half of the screen height
        animate={controls}
        transition={{ duration: 1, type: 'spring', stiffness: 120, damping: 15 }}
      >
        <h3>Rian’s Power Duo</h3>
        <p>
          Human Brilliance + AI Power = Langtech <br />
          We Foster the Collective brilliance of minds and machines, shaping the future of language <br />
          technology with precision, insight, and a relentless pursuit of excellence.
        </p>
        <h2>Seamless Video Localization Across Diverse Domains</h2>
      </motion.div>

      <div className="youtube-videos">
        <motion.div
          className="youtube-video-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h6>Source</h6>
          <iframe
            width="1000"
            height="200"
            src="https://www.youtube.com/embed/u6EhSUe9tpg"
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
            width="1000"
            height="200"
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
