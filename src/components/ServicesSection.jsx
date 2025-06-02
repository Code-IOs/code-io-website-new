import React, { useState, useEffect } from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers through strategic user experience optimization.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive development services tailored to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 service-card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prussian/70 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-fluorescent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;