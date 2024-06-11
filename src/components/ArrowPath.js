import React, { useRef, useEffect } from 'react';
import { useSpring, animated as a, config } from 'react-spring';
import { motion, useAnimation } from 'framer-motion';
import './ArrowPath.css';
import image1 from '../assets/preProcessing.jpg';
import image2 from '../assets/voiceOver.jpg';
import image3 from '../assets/L1.jpg';
import image4 from '../assets/L2.jpg';
import image5 from '../assets/L3.jpg';

const images = [image1, image2, image3, image4, image5];

const ArrowPath = () => {
  const pathRef = useRef(null);
  const length = pathRef.current ? pathRef.current.getTotalLength() : 0;

  const springProps = useSpring({
    from: { offset: 0 },
    to: { offset: length },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    images.forEach((_, i) => {
      controls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: i * 0.5 },
      }));
    });
  }, [controls]);

  return (
    <div className="arrow-path-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <motion.div
            key={index}
            custom={index}
            className="image-item"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </motion.div>
        ))}
      </div>
      <svg className="path-svg" viewBox="0 0 1000 100">
        <path
          ref={pathRef}
          id="path"
          d="M10 80 Q 95 10 180 80 T 350 80 T 520 80 T 690 80 T 860 80 T 990 80"
          fill="transparent"
          stroke="black"
          strokeWidth="3"
        />
        <a.circle
          r="10"
          fill="red"
          cx="0"
          cy="0"
          style={{
            transformOrigin: 'center',
            transform: springProps.offset.interpolate((offset) => {
              if (!pathRef.current) return 'translate(0px, 0px)';
              const point = pathRef.current.getPointAtLength(offset);
              return `translate(${point.x}px, ${point.y}px)`;
            }),
          }}
        />
      </svg>
    </div>
  );
};

export default ArrowPath;
