
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does LoopCard work?",
      answer: "LoopCard uses Near Field Communication (NFC) technology. When someone taps their phone on your LoopCard, it instantly opens your custom profile page in their browser. No apps needed - it works with any NFC-enabled smartphone."
    },
    {
      question: "Is LoopCard compatible with all phones?",
      answer: "Yes! LoopCard works with any NFC-enabled smartphone, including all modern iPhones (iPhone 7 and newer) and Android devices. The recipient doesn't need to download any apps - it works through their default browser."
    },
    {
      question: "Can I update my information after ordering?",
      answer: "Absolutely! Your LoopCard profile is completely digital and can be updated anytime through our web dashboard. Change your contact info, add new social links, or update your portfolio - all changes are instant."
    },
    {
      question: "What if someone doesn't have NFC on their phone?",
      answer: "While rare with modern phones, your LoopCard also includes a QR code backup. If someone has an older device without NFC, they can simply scan the QR code to access your profile."
    },
    {
      question: "How durable is the LoopCard?",
      answer: "LoopCard is built to last. Made from premium materials with waterproof coating and reinforced NFC chip protection. It's designed to withstand daily use in wallets, purses, and pockets for years."
    },
    {
      question: "Can I customize the design of my card?",
      answer: "Yes! Pro and Team plans include custom branding options. Choose from multiple templates, add your logo, select colors, and create a card that perfectly represents your brand."
    },
    {
      question: "What analytics do I get?",
      answer: "Track profile views, tap counts, link clicks, and geographic data. See which content resonates most with your network and optimize your professional presence based on real data."
    },
    {
      question: "Is there a setup fee or shipping cost?",
      answer: "No setup fees! All plans include free worldwide shipping. We also offer a 30-day money-back guarantee if you're not completely satisfied with your LoopCard."
    }
  ];

  return (
    <section className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-loop-text-secondary">
            Everything you need to know about LoopCard and how it works.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:bg-white/[0.08]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 
                         hover:bg-white/[0.02] transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ArrowRight 
                  className={`w-5 h-5 text-loop-secondary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                  <p className="text-loop-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-semibold text-white">Still have questions?</h3>
          <p className="text-loop-text-secondary">
            Our team is here to help you get started with LoopCard.
          </p>
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold 
                           hover:bg-white/5 transition-all duration-300 backdrop-blur-sm
                           hover:border-loop-primary/50">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
