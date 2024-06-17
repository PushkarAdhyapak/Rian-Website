import React, { useState } from 'react';
import './BoxArticles.css';
// Import images
import image1 from '../assets/videoLoc.png';
import image2 from '../assets/translation.jpg';
import image3 from '../assets/joints.jpg';
import image4 from '../assets/essential.jpg';

const articles = [
  {
    id: 1,
    title: 'Why you need AI-based localization for your YouTube channel.',
    author: 'Andrew',
    date: 'May 17th, 2024',
    topic: 'video localization',
    description: 'Did you know? YouTube has around 2.6 billion active monthly users in over 100 countries...',
    image: image1,
  },
  {
    id: 2,
    title: '15 Essential Translation Jargons You Should Be Updated With',
    author: 'Andrew',
    date: 'March 1st, 2024',
    topic: 'Translation Services',
    description: 'Understanding the backbone of translation tools is crucial if you are a professional translator...',
    image: image2,
  },
  {
    id: 3,
    title: 'Exploring How Giants Made It Huge With Localization Strategies',
    author: 'Andrew',
    date: 'February 28th, 2024',
    topic: 'E-Book',
    description: 'Understanding and implementing effective localization strategies has become important for businesses...',
    image: image3,
  },
  {
    id: 4,
    title: 'Lessons From the Industry Giants Handy for Aspiring Global Businesses',
    author: 'Andrew',
    date: 'February 25th, 2024',
    topic: 'Business Strategies',
    description: 'Exploring the best practices from industry giants can help aspiring businesses to navigate...',
    image: image4,
  }
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };

  // Determine the number of visible articles based on the screen width
  const getVisibleArticles = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  };

  const visibleArticlesCount = getVisibleArticles();
  const visibleArticles = articles.slice(currentIndex, currentIndex + visibleArticlesCount);

  return (
    <div className="articles-section">
      <h1>Articles</h1>
      <div className="article-carousel">
        <button className="carousel-button left" onClick={handlePrevious}>&lt;</button>
        <div className="articles">
          {visibleArticles.map(article => (
            <div className="article" key={article.id}>
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-info">
                <p>{article.author} | {article.date} | {article.topic}</p>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Articles;
  