
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import StickyFooter from '@/components/StickyFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <HowItWorks />
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <StickyFooter />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-loop-dark/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto section-padding py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-loop-primary to-loop-secondary 
                              rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LC</span>
                </div>
                <span className="text-xl font-space font-bold text-white">LoopCard</span>
              </div>
              <p className="text-loop-text-secondary text-sm leading-relaxed">
                The future of professional networking. Share your identity with a single tap.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <div className="space-y-2">
                {['Features', 'Pricing', 'How it works', 'API'].map((link) => (
                  <a key={link} href="#" className="block text-loop-text-secondary text-sm 
                                                   hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2">
                {['Help Center', 'Contact', 'Privacy', 'Terms'].map((link) => (
                  <a key={link} href="#" className="block text-loop-text-secondary text-sm 
                                                   hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2">
                {['About', 'Blog', 'Careers', 'Press'].map((link) => (
                  <a key={link} href="#" className="block text-loop-text-secondary text-sm 
                                                   hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row 
                        justify-between items-center gap-4">
            <p className="text-loop-text-secondary text-sm">
              © 2024 LoopCard. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-loop-text-secondary hover:text-white 
                                                  transition-colors duration-200 text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
