import React, { useState, useRef } from 'react';
import { Camera, Sliders, Wand2, Users, Megaphone, Video, Blocks, GraduationCap } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">PixelTouch</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
        </div>
        
        <button className="px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all">
          Download Now
        </button>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              AI Magic<br />Image Editor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Effortless AI Photo Editing to Enhance, Retouch, and Transform Instantly.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all">
                Try it for Free
              </button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">100k+ Downloads</span>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">🏆 Editor's Choice</span>
                <span className="text-sm text-gray-500">on App Store</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">🏆 Editor's Choice</span>
                <span className="text-sm text-gray-500">on Google Play</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-[9/16] bg-gradient-to-br from-orange-300 to-purple-300 flex items-center justify-center">
                    <Camera className="w-32 h-32 text-white opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission & Stats Section
const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-3xl text-gray-700 leading-relaxed mb-16">
          We're on a mission to make stunning <span className="text-blue-600 font-semibold">photo edits</span> accessible to everyone — whether you're a casual snapper or a content creator. With <span className="text-blue-600 font-semibold">AI-driven</span> tools and a user-first design, PixelTouch helps you express your vision beautifully and effortlessly.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-bold mb-2">+10 Million</div>
            <div className="text-gray-600">Photos edited globally</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">86%</div>
            <div className="text-gray-600">User Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">86+</div>
            <div className="text-gray-600">Countries & growing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Photo Categories Data
const photoCategories = {
  portrait: {
    title: 'Portrait',
    before: 'from-orange-400 via-red-400 to-pink-400',
    after: 'from-gray-900 via-gray-800 to-black',
    thumbnail: 'from-orange-300 to-purple-300'
  },
  landscape: {
    title: 'Landscape',
    before: 'from-green-400 via-blue-400 to-cyan-400',
    after: 'from-teal-900 via-blue-900 to-indigo-900',
    thumbnail: 'from-green-300 to-blue-300'
  },
  oldPhotos: {
    title: 'Old Photos',
    before: 'from-yellow-400 via-orange-400 to-amber-400',
    after: 'from-slate-800 via-gray-800 to-zinc-900',
    thumbnail: 'from-yellow-300 to-orange-300'
  }
};

// Combined Before/After Slider & Category Cards Section
const PhotoEnhancerSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('portrait');
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const currentCategory = photoCategories[selectedCategory];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">AI photo enhancer</h2>
        
        {/* Before/After Slider */}
        <div 
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize mb-8"
          style={{ height: '600px' }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.before} transition-all duration-500`}>
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg text-white font-semibold">
              Before
            </div>
          </div>
          
          {/* After Image */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${currentCategory.after} transition-all duration-500`}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-lg text-white font-semibold">
              After
            </div>
          </div>
          
          {/* Slider */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white transition-all"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-gray-400"></div>
                <div className="w-1 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(photoCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key);
                setPosition(50); // Reset slider to center
              }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all ${
                selectedCategory === key ? 'ring-4 ring-blue-500' : ''
              }`}
            >
              <div className={`h-48 bg-gradient-to-br ${category.thumbnail}`}></div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-semibold ${
                  selectedCategory === key ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {category.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pro Tools Section
const ProToolsSection = () => {
  const tools = [
    {
      icon: <Wand2 className="w-8 h-8 text-blue-600" />,
      title: 'AI Object Remover',
      description: 'Select and erase unwanted elements from photos with pixel-perfect background reconstruction using AI.',
      gradient: 'from-purple-100 to-blue-100'
    },
    {
      icon: <Sliders className="w-8 h-8 text-blue-600" />,
      title: 'Style Transfer (AI Filters)',
      description: 'Turn any photo into artwork by applying styles from famous paintings or cinematic color tones.',
      gradient: 'from-blue-100 to-cyan-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Next-level pro tools</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
              <div className={`bg-gradient-to-br ${tool.gradient} p-12`}>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                  {tool.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{tool.title}</h3>
                <p className="text-gray-600 text-lg">{tool.description}</p>
              </div>
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Integrations Section
const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-16 relative overflow-hidden">
            <div className="relative">
              {/* SVG Curves Container */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Curves from top row icons to center */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const startX = (i * 20) + 10;
                  const startY = 15;
                  const endX = 50;
                  const endY = 75;
                  
                  return (
                    <g key={`top-${i}`}>
                      {/* Base faded curve */}
                      <path
                        d={`M${startX} ${startY} Q${startX + (endX - startX) * 0.5} ${startY + (endY - startY) * 0.3}, ${endX} ${endY}`}
                        stroke="rgba(139, 92, 246, 0.15)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                      />
                      {/* Animated dashed curve */}
                      <path
                        d={`M${startX} ${startY} Q${startX + (endX - startX) * 0.5} ${startY + (endY - startY) * 0.3}, ${endX} ${endY}`}
                        stroke="rgb(139, 92, 246)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray="8 12"
                        strokeDashoffset="0"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="20"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  );
                })}

                {/* Curves from bottom row icons to center */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const startX = (i * 20) + 10;
                  const startY = 45;
                  const endX = 50;
                  const endY = 75;
                  
                  return (
                    <g key={`bottom-${i}`}>
                      {/* Base faded curve */}
                      <path
                        d={`M${startX} ${startY} Q${startX + (endX - startX) * 0.5} ${startY + (endY - startY) * 0.7}, ${endX} ${endY}`}
                        stroke="rgba(139, 92, 246, 0.15)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                      />
                      {/* Animated dashed curve */}
                      <path
                        d={`M${startX} ${startY} Q${startX + (endX - startX) * 0.5} ${startY + (endY - startY) * 0.7}, ${endX} ${endY}`}
                        stroke="rgb(139, 92, 246)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray="8 12"
                        strokeDashoffset="0"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="20"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  );
                })}
              </svg>

              {/* Top row of integration icons */}
              <div className="grid grid-cols-5 gap-4 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg"></div>
                ))}
              </div>

              {/* Bottom row of integration icons */}
              <div className="grid grid-cols-5 gap-4 mb-12 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl shadow-lg"></div>
                ))}
              </div>

              {/* Central camera icon */}
              <div className="flex justify-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl font-bold mb-8">One platform, unlimited integrations</h2>
            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold mb-12 hover:bg-gray-800 transition-all">
              View all integrations
            </button>
            <p className="text-xl text-gray-600 mb-6">
              "Our platform empowers teams to collaborate, innovate, and bring ideas to life—seamlessly and effortlessly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
              <div>
                <p className="font-semibold">Daniel Vaughn, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Grid Section
const FeaturesGrid = () => {
  const features = [
    {
      icon: <Wand2 className="w-12 h-12" />,
      title: 'Intuitive drag & drop editor',
      description: 'Create stunning designs effortlessly with a user-friendly interface.',
      gradient: 'from-pink-100 to-purple-100'
    },
    {
      icon: <Blocks className="w-12 h-12" />,
      title: 'Advanced prototyping',
      description: 'Turn ideas into interactive prototypes without writing a single line of code.',
      gradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Real-time collaboration',
      description: 'Work seamlessly with your team, get instant feedback.',
      gradient: 'from-blue-100 to-cyan-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
              <div className={`bg-gradient-to-br ${feature.gradient} p-8 min-h-[300px] flex flex-col justify-center`}>
                <div className="text-blue-600 mb-6">{feature.icon}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stacked Cards Section
const StackedCards = () => {
  const personas = [
    {
      title: 'Marketers',
      description: 'Create more content in less time. Keep campaigns on-brand with reusable, shareable, and trackable assets.',
      icon: <Megaphone className="w-32 h-32" />,
      bg: 'bg-black',
      textColor: 'text-white',
      rotation: 'rotate-2'
    },
    {
      title: 'Internal Comms',
      description: 'Publish video updates that are easy to watch, share, and localize across every office.',
      icon: <Video className="w-32 h-32" />,
      bg: 'bg-white',
      textColor: 'text-black',
      rotation: '-rotate-1'
    },
    {
      title: 'Content Creators',
      description: 'Turn raw ideas into polished videos with templates and AI-powered editing tools.',
      icon: <Blocks className="w-32 h-32" />,
      bg: 'bg-orange-500',
      textColor: 'text-white',
      rotation: 'rotate-2'
    },
    {
      title: 'Educators',
      description: 'Create engaging educational content.',
      icon: <GraduationCap className="w-32 h-32" />,
      bg: 'bg-orange-100',
      textColor: 'text-black',
      rotation: '-rotate-1'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative" style={{ height: '800px' }}>
          {personas.map((persona, idx) => (
            <div
              key={idx}
              className={`absolute left-1/2 -translate-x-1/2 w-full max-w-4xl ${persona.bg} ${persona.textColor} rounded-3xl shadow-2xl p-16 ${persona.rotation} transition-all hover:scale-105 hover:rotate-0 cursor-pointer`}
              style={{
                top: `${idx * 120}px`,
                zIndex: personas.length - idx
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-5xl font-bold mb-6">{persona.title}</h3>
                  <p className="text-xl opacity-90 max-w-xl">{persona.description}</p>
                </div>
                <div className="opacity-20">
                  {persona.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">PixelTouch</span>
            </div>
            <p className="text-gray-400">AI-powered photo editing made simple.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 PixelTouch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <PhotoEnhancerSection />
      <ProToolsSection />
      <IntegrationsSection />
      <FeaturesGrid />
      <StackedCards />
      <Footer />
    </div>
  );
}