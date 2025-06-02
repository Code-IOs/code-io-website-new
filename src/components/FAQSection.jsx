import React, { useState, useEffect } from "react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project's specific needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive support packages including maintenance, updates, hosting, and technical support. We're here to ensure your application continues to perform optimally long after launch."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes design, development, testing, deployment, and initial training. We provide transparent, fixed-price quotes with no hidden fees. Additional features or changes during development are discussed and approved before implementation."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can help improve, maintain, or completely redesign existing applications. We'll analyze your current setup and provide recommendations for enhancements or necessary updates."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are some common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl mb-4 overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="section-divider mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;