
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-loop-dark/80 border-b border-white/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-loop-primary to-loop-secondary 
                          rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LC</span>
            </div>
            <span className="text-xl font-space font-bold text-white">LoopCard</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-loop-text-secondary hover:text-white 
                                       transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-loop-text-secondary hover:text-white 
                                       transition-colors duration-200">
              Pricing
            </a>
            <a href="#testimonials" className="text-loop-text-secondary hover:text-white 
                                           transition-colors duration-200">
              Reviews
            </a>
            <a href="#faq" className="text-loop-text-secondary hover:text-white 
                                   transition-colors duration-200">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-loop-primary text-white rounded-full font-semibold 
                           hover:bg-loop-primary/90 transition-all duration-300 hover:scale-105 
                           flex items-center gap-2">
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
