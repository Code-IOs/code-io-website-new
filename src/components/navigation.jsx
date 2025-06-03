import React, { useState, useEffect, useCallback } from "react";
import { throttle } from 'lodash';

const Navigation = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, []);

  const isLowPerformance = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'} ${isLowPerformance ? 'no-blur' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          Code<span className="text-fluorescent">IO</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-fluorescent transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-fluorescent transition-colors">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-fluorescent transition-colors">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-fluorescent transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-fluorescent transition-colors">Contact</button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-fluorescent transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-fluorescent transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-fluorescent transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-fluorescent transition-colors text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-fluorescent transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navigation;