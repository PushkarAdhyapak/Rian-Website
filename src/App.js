import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextContent from './components/TextContent';
import ImageSection from './components/ImageSection'
import Solutions from './Pages/Solutions';
//import Marquee from './components/Marquee'; 
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
    <Router>
    <div className="App">
      
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* Add other routes here */}
        </Routes>
     
      
     <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
        </div>
        </Router>
  );

  
}


const HomePage = () => (
  <>
    <Navbar/> 
    <ImageSection />
    <TextContent />
    <Global />
    <Sample />
    <Services />
    <BoxArticles />
    <Statistics />
    <Footer />
  </>
);

export default App;