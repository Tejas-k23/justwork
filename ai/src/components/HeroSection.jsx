import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>AI Product Ads on WhatsApp</h1>
        <p>Send a product photo on WhatsApp. Get a professional marketing image in seconds.</p>
        <a href="#download" className="btn-primary">Try Free (3 Credits)</a>
        <div className="social-proof">
          <div className="avatars">
            <img src="https://i.pravatar.cc/40?img=1" alt="User" />
            <img src="https://i.pravatar.cc/40?img=2" alt="User" />
            <img src="https://i.pravatar.cc/40?img=3" alt="User" />
            <img src="https://i.pravatar.cc/40?img=4" alt="User" />
          </div>
          <span>5,000+ Sellers Using ProductAI</span>
        </div>
        <div className="awards">
          <div className="award-badge">
            <span className="laurel">⚡</span>
            <span>Trusted by D2C Sellers</span>
          </div>
          <div className="award-badge">
            <span className="laurel">✨</span>
            <span>Ad-Quality Images in Seconds</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="phone-mockup">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=800&fit=crop" 
            alt="PixelTouch App Interface"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
