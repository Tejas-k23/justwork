import React, { useEffect, useRef, useState } from 'react';
import './IntegrationsSection.css';

const IntegrationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Generate app icons with different colors
  const iconColors = [
    '#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B',
    '#EF4444', '#6366F1', '#06B6D4', '#84CC16', '#F97316'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="integrations" ref={sectionRef}>
      <div className={`integrations-container ${isVisible ? 'visible' : ''}`}>
        <div className="integrations-grid">
          <div className="integrations-diagram">
            <div className="diagram-background">
              {/* Top row of icons */}
              <div className="icon-row icon-row-top">
                {iconColors.slice(0, 5).map((color, i) => (
                  <div key={`top-${i}`} className="app-icon" style={{ background: color }}>
                    <div className="icon-content"></div>
                  </div>
                ))}
              </div>
              
              {/* SVG Connector Lines */}
              {iconColors.slice(0, 5).map((color, i) => {
                const positions = [
                  { translateX: '-38%', scale: 0.75, rotate: -28 },
                  { translateX: '-19%', scale: 0.82, rotate: -14 },
                  { translateX: '0%', scale: 0.88, rotate: 0 },
                  { translateX: '19%', scale: 0.82, rotate: 14 },
                  { translateX: '38%', scale: 0.75, rotate: 28 }
                ];
                const pos = positions[i];
                return (
                  <svg
                    key={`connector-${i}`}
                    className="connector-svg"
                    data-index={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 501 200"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      transform: `translateX(${pos.translateX}) scale(${pos.scale}) rotate(${pos.rotate}deg)`,
                      transformOrigin: 'center center'
                    }}
                  >
                    <path
                      d="M250 200c0-125 250-50 250-200"
                      stroke="rgba(82, 53, 239, 0.2)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                    <path
                      className="animated-path"
                      strokeDasharray="30 100"
                      d="M250 200c0-125 250-50 250-200"
                      stroke="rgb(82, 53, 239)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="transparent"
                      pathLength="100"
                      opacity="1"
                    />
                  </svg>
                );
              })}
              
              {/* Central AI Card */}
              <div className="central-hub">
                <div className="hub-icon">
                  <div className="hub-content"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="integrations-content">
            <h2>Works with Your Favorite Tools</h2>
            <button className="integrations-btn">View all integrations</button>
            <blockquote className="testimonial">
              "ProductAI turned our product photography workflow around. We get professional images in minutes instead of days. Game changer for our D2C business."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <p className="author-name">Rahul Sharma, D2C Seller & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
