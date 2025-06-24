
import React from 'react';
import { ArrowRight, Circle, FileText, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tap NFC",
      description: "Simply tap your LoopCard on any NFC-enabled phone. No app required.",
      icon: Circle,
      color: "from-loop-primary to-loop-secondary"
    },
    {
      number: "02", 
      title: "Show Profile",
      description: "Your custom profile page opens instantly with all your info and links.",
      icon: FileText,
      color: "from-loop-secondary to-loop-primary"
    },
    {
      number: "03",
      title: "Save Contact",
      description: "They can save your contact, visit your links, or connect instantly.",
      icon: MessageSquare,
      color: "from-loop-primary to-loop-glow"
    }
  ];

  return (
    <section className="py-24 section-padding bg-gradient-to-b from-transparent to-loop-dark/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-loop-text-secondary max-w-2xl mx-auto">
            Three simple steps to revolutionize how you network and share your professional identity.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 
                              bg-gradient-to-r from-loop-primary/30 to-loop-secondary/30 
                              transform translate-x-4 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-loop-secondary" />
                  </div>
                </div>
              )}

              {/* Step card */}
              <div className="glass-card p-8 text-center space-y-6 hover:scale-105 
                            transition-all duration-500 cursor-pointer relative z-10
                            group-hover:bg-white/[0.08]">
                
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                              bg-gradient-to-br from-loop-primary/20 to-loop-secondary/20 
                              border border-loop-primary/30 mb-4">
                  <span className="text-2xl font-bold text-gradient">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                                bg-gradient-to-br ${step.color} p-0.5`}>
                  <div className="w-full h-full bg-loop-dark rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="text-loop-text-secondary leading-relaxed">{step.description}</p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-loop-primary/5 
                              to-loop-secondary/5 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="glow-button group">
            <span className="relative z-10 flex items-center gap-2">
              See It In Action
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="shine-effect"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
