import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import FeaturesSection from './components/FeaturesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import IntegrationsSection from './components/IntegrationsSection';
import FeatureShowcase from './components/FeatureShowcase';
import StackedCards from './components/StackedCards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <IntegrationsSection />
      <FeatureShowcase />
      <StackedCards />
      <Footer />
    </div>
  );
}

export default App;
