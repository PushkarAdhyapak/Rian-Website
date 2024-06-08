// src/components/BoxArticles.js
import React from 'react';
import { motion } from 'framer-motion';
import './BoxArticles.css';

const BoxArticles = () => {
  const articles = ['Article 1', 'Article 2', 'Article 3'];

  return (
    <div className="box-container">
      {articles.map((article, index) => (
        <motion.div
          key={index}
          className="box-article"
          whileHover={{ rotateY: 360 }}
          whileTap={{ rotateY: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {article}
        </motion.div>
      ))}
    </div>
  );
};

export default BoxArticles;
