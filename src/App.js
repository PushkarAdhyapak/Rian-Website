import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import VideoPlayer from './components/VideoPlayer'; 
import BoxArticles from './components/BoxArticles'; 
import Statistics from './components/Statistics';
import Footer from './components/Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ImageGallery />
      <VideoPlayer />
      <BoxArticles />
      <Statistics />
      <Footer />
     <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
        </div>
  );
}

export default App;
