
import React, { useState } from 'react';
import { ArrowRight, SquareCheck } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started",
      monthlyPrice: 15,
      yearlyPrice: 12,
      features: [
        "1 LoopCard included",
        "Custom profile page",
        "Basic analytics",
        "Social media links",
        "Contact information"
      ],
      popular: false,
      gradient: "from-loop-primary/20 to-loop-secondary/20"
    },
    {
      name: "Pro", 
      description: "For professionals who network frequently",
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: [
        "2 LoopCards included",
        "Advanced profile customization",
        "Detailed analytics dashboard",
        "Lead capture forms",
        "Calendar scheduling",
        "Custom branding"
      ],
      popular: true,
      gradient: "from-loop-primary to-loop-secondary"
    },
    {
      name: "Team",
      description: "Built for teams and organizations",
      monthlyPrice: 79,
      yearlyPrice: 65,
      features: [
        "10 LoopCards included",
        "Team management dashboard",
        "Advanced analytics & reporting",
        "Custom domain support", 
        "API access",
        "Priority support",
        "White-label options"
      ],
      popular: false,
      gradient: "from-loop-glow/20 to-loop-primary/20"
    }
  ];

  return (
    <section className="py-24 section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-loop-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-loop-text-secondary max-w-2xl mx-auto">
            Choose the plan that fits your networking needs. All plans include our premium LoopCard hardware.
          </p>

          {/* Pricing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-loop-text-secondary ${!isYearly ? 'text-white font-semibold' : ''}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-loop-primary' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-loop-text-secondary ${isYearly ? 'text-white font-semibold' : ''}`}>
              Yearly
            </span>
            {isYearly && (
              <div className="ml-2 px-2 py-1 bg-loop-secondary/20 text-loop-secondary text-xs 
                           rounded-full font-medium">
                Save 20%
              </div>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative group hover:scale-[1.02] transition-all duration-500 
                        ${plan.popular ? 'ring-2 ring-loop-primary shadow-2xl shadow-loop-primary/20' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-loop-primary to-loop-secondary px-4 py-1 
                                rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-loop-text-secondary text-sm mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-loop-text-secondary">/month</span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-loop-text-secondary">
                      Billed annually (${plan.yearlyPrice * 12})
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <SquareCheck className="w-5 h-5 text-loop-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-loop-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 
                               ${plan.popular 
                                 ? 'bg-loop-primary text-white hover:bg-loop-primary/90 hover:scale-105 shadow-lg hover:shadow-xl' 
                                 : 'border border-white/20 text-white hover:bg-white/5'
                               }`}>
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-loop-text-secondary">
            All plans include free shipping and a 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-loop-text-secondary">
            <div className="flex items-center gap-2">
              <SquareCheck className="w-4 h-4 text-loop-secondary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="w-4 h-4 text-loop-secondary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="w-4 h-4 text-loop-secondary" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
