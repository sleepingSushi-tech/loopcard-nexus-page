
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Figma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b1e2c886?w=100&h=100&fit=crop&crop=face",
      quote: "LoopCard completely changed how I network at design conferences. The instant connection is magical."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Startup Founder",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "I've connected with 200+ investors and partners using LoopCard. The analytics help me follow up effectively."
    },
    {
      name: "Emily Watson",
      role: "Sales Director", 
      company: "Salesforce",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "My team's conversion rate increased 40% after switching to LoopCard. Our prospects love the tech-forward approach."
    },
    {
      name: "David Kim",
      role: "Creative Director",
      company: "Spotify",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The customization options are incredible. My LoopCard profile perfectly represents my personal brand."
    },
    {
      name: "Lisa Park",
      role: "Marketing Manager",
      company: "HubSpot", 
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      quote: "No more awkward business card exchanges. LoopCard makes networking feel natural and modern."
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "Google",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "As a developer, I appreciate the clean UX and reliable NFC technology. It just works perfectly."
    }
  ];

  return (
    <section className="py-24 section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-loop-primary/5 via-transparent to-loop-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold">
            Loved by <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-xl text-loop-text-secondary max-w-2xl mx-auto">
            Join thousands of professionals who've revolutionized their networking with LoopCard.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 space-y-4 group hover:scale-[1.02] transition-all duration-500 
                       hover:bg-white/[0.08] relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start">
                <MessageSquare className="w-6 h-6 text-loop-secondary opacity-60" />
                <div className="flex text-loop-secondary text-xs">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-loop-text-primary leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-loop-primary/30"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-loop-text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "500K+", label: "Connections Made" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-gradient">{stat.number}</div>
              <div className="text-loop-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
