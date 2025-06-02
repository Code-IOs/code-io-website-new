import React, { useState, useEffect } from "react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 49, 83, 0.8), rgba(0, 26, 46, 0.9)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Transform Your Business with
            <span className="gradient-text block"> Premium Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up" style={{animationDelay: '0.2s'}}>
            We craft exceptional web and mobile applications that drive growth for small businesses and empower consumers with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-fluorescent to-transparent rounded-full opacity-20 floating" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-transparent to-fluorescent rounded-full opacity-10 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-fluorescent to-prussian rounded-full opacity-15 floating" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;