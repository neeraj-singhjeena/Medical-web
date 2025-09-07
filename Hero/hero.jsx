import React from 'react';
import './Hero.css';

const Hero = ({ backgroundImage, title, subtitle, ctaText, onCtaClick }) => {
  // Default content in case props are not provided
  const heroTitle = title || "Innovating Chemistry Through Research, Data, and Process Solutions";
  const heroSubtitle = subtitle || "Bridging the gap between academia and industry with insightful, publication-ready, and industry-relevant solutions";
  const heroCtaText = ctaText || "Explore Our Services";
  
  // Inline style for background image
  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(26, 75, 140, 0.8), rgba(26, 75, 140, 0.9)), url(${backgroundImage})`
  } : {};

  return (
    <section className="hero" id="home" style={heroStyle}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{heroTitle}</h1>
          <p className="hero-subtitle">{heroSubtitle}</p>
          <button className="hero-cta-btn" onClick={onCtaClick}>
            {heroCtaText}
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        
        <div className="hero-visual">
          <div className="molecule-animation">
            <div className="atom">
              <div className="nucleus"></div>
              <div className="orbit"></div>
              <div className="electron"></div>
            </div>
            <div className="atom">
              <div className="nucleus"></div>
              <div className="orbit"></div>
              <div className="electron"></div>
            </div>
            <div className="molecule-bond"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;