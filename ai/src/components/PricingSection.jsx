import React, { useState } from 'react';
import './PricingSection.css';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: isYearly ? 'year' : 'month',
      subtitle: 'Perfect for getting started',
      buttonText: 'Try it for Free',
      buttonStyle: 'primary',
      features: [
        'Basic editing tools',
        '10+ filters',
        'Export in HD',
        'Limited background remover',
        'No watermark'
      ],
      isPro: false,
      isStudio: false
    },
    {
      name: 'Pro',
      price: 9.99,
      period: isYearly ? 'year' : 'month',
      subtitle: 'For creators who want more',
      buttonText: 'Upgrade to Pro',
      buttonStyle: 'white',
      features: [
        'Everything in Free, plus',
        'All AI tools unlocked',
        'Face & object retouch',
        '30+ filters & styles',
        '50 GB cloud storage'
      ],
      isPro: true,
      isStudio: false
    },
    {
      name: 'Studio',
      price: 29,
      period: isYearly ? 'year' : 'month',
      subtitle: 'For businesses and power users',
      buttonText: 'Go Studio',
      buttonStyle: 'primary',
      features: [
        'Everything in Pro, plus',
        'Custom avatars & branding',
        'Unlimited cloud projects',
        'Team access (up to 5 users)',
        'Commercial license'
      ],
      isPro: false,
      isStudio: true
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-container">
        <h2 className="pricing-heading">Simple pricing</h2>
        
        <div className="toggle-container">
          <span className={!isYearly ? 'toggle-label active' : 'toggle-label'}>Monthly</span>
          <button 
            className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle billing period"
          >
            <span className="toggle-slider"></span>
          </button>
          <span className={isYearly ? 'toggle-label active' : 'toggle-label'}>Yearly</span>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.isPro ? 'pro-card' : ''}`}
            >
              <div className={`card-top-section ${plan.isPro ? 'pro-top' : ''}`}>
                {plan.isPro && (
                  <div className="popular-badge">(Most Popular)</div>
                )}
                <div className="card-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-amount">
                      ${isYearly && plan.price > 0 ? (plan.price * 12 * 0.8).toFixed(0) : plan.price === 0 ? '0' : plan.price.toFixed(plan.price % 1 === 0 ? 0 : 2)}
                    </span>
                    <span className="price-period">/{isYearly ? 'Year' : 'Month'}</span>
                  </div>
                  <p className="plan-subtitle">{plan.subtitle}</p>
                </div>
                
                <button 
                  className={`plan-button ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default PricingSection;
