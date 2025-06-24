
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const scrolledPastHero = currentScrollY > window.innerHeight * 0.8;
      
      setIsVisible(scrolledPastHero && (scrollingUp || currentScrollY < 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="glass-card mx-4 mb-4 p-4 border border-white/20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">
              Get noticed. Get LoopCard.
            </h3>
            <p className="text-loop-text-secondary text-sm">
              Join 10,000+ professionals networking smarter
            </p>
          </div>
          
          <button className="glow-button group flex-shrink-0">
            <span className="relative z-10 flex items-center gap-2 text-sm">
              Order Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="shine-effect"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
