
import React from 'react';
import { ArrowRight, Circle, FileText, MessageSquare, SquareCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Circle,
      title: "Tap to Connect",
      description: "Instant connection with any NFC-enabled device. No apps, no friction, just tap and share.",
      gradient: "from-loop-primary to-loop-secondary"
    },
    {
      icon: FileText,
      title: "Custom Link Page",
      description: "Beautiful, personalized profile page that showcases your brand, portfolio, and personality.",
      gradient: "from-loop-secondary to-loop-glow"
    },
    {
      icon: MessageSquare,
      title: "Analytics Dashboard",
      description: "Track engagement, views, and connections. See who's interested in your network.",
      gradient: "from-loop-glow to-loop-primary"
    },
    {
      icon: SquareCheck,
      title: "Works with All Phones",
      description: "Compatible with iPhone and Android. Your contacts don't need any special apps.",
      gradient: "from-loop-primary/80 to-loop-secondary/80"
    }
  ];

  return (
    <section className="py-24 section-padding relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold">
            Why Choose <span className="text-gradient">LoopCard</span>
          </h2>
          <p className="text-xl text-loop-text-secondary max-w-2xl mx-auto">
            More than just a business card. It's your digital identity, reimagined for the modern world.
          </p>
        </div>

        {/* Features bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:scale-[1.02] transition-all duration-500 
                       cursor-pointer relative overflow-hidden"
            >
              {/* Feature icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl 
                             bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-loop-dark rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-gradient 
                             transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-loop-text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Learn more link */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-loop-secondary text-sm font-medium gap-1 
                              hover:gap-2 transition-all duration-300 cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 
                             group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Enhanced feature showcase */}
        <div className="mt-20 glass-card p-8 lg:p-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-space font-bold">
                Professional Networking, <span className="text-gradient">Simplified</span>
              </h3>
              <p className="text-loop-text-secondary leading-relaxed text-lg">
                Stop carrying outdated paper cards. LoopCard represents the future of professional 
                networking - smart, sustainable, and impressive. Make every connection count.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Eco-friendly alternative to paper cards",
                  "Never run out of business cards again", 
                  "Update your info anytime, anywhere",
                  "Track your networking ROI with analytics"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-loop-text-secondary">
                    <SquareCheck className="w-5 h-5 text-loop-secondary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="glow-button group mt-6">
                <span className="relative z-10 flex items-center gap-2">
                  Start Networking Smarter
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="shine-effect"></div>
              </button>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="glass-card p-6 transform rotate-3 hover:rotate-0 transition-transform 
                            duration-500 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">Alex Chen</div>
                    <div className="w-8 h-8 bg-gradient-to-br from-loop-primary to-loop-secondary 
                                  rounded-full flex items-center justify-center text-white text-sm font-bold">
                      AC
                    </div>
                  </div>
                  <div className="text-loop-text-secondary text-sm">Product Designer</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-loop-text-secondary">
                      <span>Profile Views</span>
                      <span className="text-loop-secondary">1,247</span>
                    </div>
                    <div className="flex justify-between text-loop-text-secondary">
                      <span>Connections</span>
                      <span className="text-loop-secondary">89</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-loop-secondary/10 rounded-full 
                            blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-loop-primary/10 rounded-full 
                            blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
