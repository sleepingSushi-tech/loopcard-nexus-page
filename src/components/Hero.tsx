
import React from 'react';
import { ArrowRight, Circle, FileText, MessageSquare, SquareCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding bg-grid">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-loop-primary/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-loop-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-loop-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-space font-bold leading-tight">
              Your Identity.{' '}
              <span className="text-gradient">One Tap.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-loop-text-secondary leading-relaxed max-w-2xl">
              LoopCard lets you share everything from your phone to your portfolio instantly. 
              No more fumbling with business cards.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="glow-button group">
              <span className="relative z-10 flex items-center gap-2">
                Get Your LoopCard
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="shine-effect"></div>
            </button>
            
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold 
                             hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          
          {/* Social proof */}
          <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-loop-text-secondary">
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4 fill-loop-secondary text-loop-secondary" />
              <span>500+ early adopters</span>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="w-4 h-4 text-loop-secondary" />
              <span>Works with all phones</span>
            </div>
          </div>
        </div>
        
        {/* Right content - Card mockup */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Floating card */}
            <div className="glass-card p-8 transform hover:scale-105 transition-all duration-500 
                          animate-card-float cursor-pointer group max-w-sm">
              <div className="space-y-6">
                {/* Profile section */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-loop-primary to-loop-secondary 
                                rounded-full flex items-center justify-center text-white font-bold text-xl">
                    LC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">LoopCard</h3>
                    <p className="text-loop-text-secondary">Smart Business Card</p>
                  </div>
                </div>
                
                {/* Features preview */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-loop-text-secondary">
                    <FileText className="w-4 h-4 text-loop-secondary" />
                    <span>Digital Portfolio</span>
                  </div>
                  <div className="flex items-center gap-3 text-loop-text-secondary">
                    <MessageSquare className="w-4 h-4 text-loop-secondary" />
                    <span>Social Links</span>
                  </div>
                  <div className="flex items-center gap-3 text-loop-text-secondary">
                    <SquareCheck className="w-4 h-4 text-loop-secondary" />
                    <span>Contact Info</span>
                  </div>
                </div>
                
                {/* NFC indicator */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-loop-secondary">
                    <div className="w-2 h-2 rounded-full bg-loop-secondary animate-pulse"></div>
                    <span className="text-sm font-medium">Tap to Connect</span>
                  </div>
                </div>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-loop-secondary/20 rounded-full 
                          blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-loop-primary/20 rounded-full 
                          blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
