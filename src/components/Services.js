import React, { useEffect } from 'react';
import './Services.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../assets/rianImagePlatform.png'
import image2 from '../assets/videolocalization.png'
import image3 from '../assets/documentation1.png'


const Services = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animation1.start({ opacity: 1, y: 0 });
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({ opacity: 1, y: 0 });
    }
  }, [inView2, animation2]);

  useEffect(() => {
    if (inView3) {
      animation3.start({ opacity: 1, y: 0 });
    }
  }, [inView3, animation3]);

  return (
    <div className="services-container">
      <h3>Services We Offer</h3>

      <div className="service-boxes">
        <div className="service-box blue">
          <img src={image1} alt="Service 1" />
          <motion.h4
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={animation1}
            transition={{ duration: 0.5 }}
          >
            Rian Platform
          </motion.h4>
          <motion.p
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={animation1}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Seamlessly blend AI and Human Intelligence to overcome language barriers.
          </motion.p>
        </div>

        <div className="service-box violet">
          <img src={image2} alt="Service 2" />
          <motion.h4
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={animation2}
            transition={{ duration: 0.5 }}
          >
            Video Localization
          </motion.h4>
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={animation2}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simple, Quick, and Effortless process with project management features!
          </motion.p>
        </div>

        <div className="service-box yellow">
          <img src={image3} alt="Service 3" />
          <motion.h4
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={animation3}
            transition={{ duration: 0.5 }}
          >
            Document Translation/ Localization
          </motion.h4>
          <motion.p
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={animation3}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionize Content Localization.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Services;
