import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TextContent from './components/TextContent';
import ImageSection from './components/ImageSection'
import Marquee from './components/Marquee'; 
//import ImageGallery from './components/ImageGallery';
//import ArrowPath from './components/ArrowPath';
//import VideoPlayer from './components/VideoPlayer';
import Global from './components/Global'; 
import Sample from './components/Sample'; 
import Services from './components/Services'; 
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
      <ImageSection/>
      <TextContent/>
      <Marquee/>
      <Global/>
      <Sample/>
      <Services/>
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
