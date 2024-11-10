import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
// import img1 from './img1.jpg';
import img2 from './img2.jpg';

const images = [img2];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  // Handle automatic image change
  useEffect(() => {
    if (!isManualChange) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000); // Auto-change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, isManualChange]);

  // Handle manual next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsManualChange(true);
    resetManualChangeTimeout();
  };

  // Handle manual previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsManualChange(true);
    resetManualChangeTimeout();
  };

  // Reset the manual change flag to resume auto-sliding
  const resetManualChangeTimeout = () => {
    setTimeout(() => {
      setIsManualChange(false);
    }, 5000); // Auto-slide will resume 5 seconds after manual interaction
  };

  return (
    <div className="hero-container">
      <img
        src={images[currentImageIndex]}
        alt="Hero Background"
        className="hero-background"
        style={{ transform: `translateX(${currentImageIndex * -100}%)` }}
      />
      <div className="hero-content">
        <h1 data-aos="fade-down">Welcome to AccessZone</h1>
        <p data-aos="fade-up" data-aos-delay="300">Discover the latest electronic devices accessories</p>
        <button className="cta-btn" data-aos="zoom-in" data-aos-delay="600">Shop Now</button>
      </div>
      <button className="control-btn left" onClick={handlePrev} data-aos="fade-right" data-aos-delay="800">
        &#8592;
      </button>
      <button className="control-btn right" onClick={handleNext} data-aos="fade-left" data-aos-delay="800">
        &#8594;
      </button>
    </div>
  );
};

export default Hero;
