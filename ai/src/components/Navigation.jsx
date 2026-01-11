import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="star"></div>
        <span>ProductAI</span>
      </div>
      <div className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">How It Works</a>
        <a href="#features" className="has-dropdown">
          Features
        </a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#download" className="btn-outline">Start Free</a>
    </nav>
  );
};

export default Navigation;
