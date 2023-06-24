import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-links">
        <a href="#nav">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#Skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p>&copy; 2023 Your Gunasekar </p>
      <p>All rights reserved</p>
    </footer>
  );
};

export default Footer;
