import React from "react";

const AboutSection = React.memo(() => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Code IO</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're a passionate team of developers and designers dedicated to empowering small businesses and consumers with innovative technology solutions.
            </p>
            <p className="text-gray-400 mb-8">
              Founded with the mission to make premium development accessible, we combine technical expertise with creative problem-solving to deliver solutions that not only meet your needs but exceed your expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-white"
            >
              Let's Work Together
            </button>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Planning</h4>
                    <p className="text-gray-400 text-sm">We understand your business goals and technical requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Development</h4>
                    <p className="text-gray-400 text-sm">Create beautiful, functional solutions using modern technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Testing & Launch</h4>
                    <p className="text-gray-400 text-sm">Rigorous testing followed by smooth deployment and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default AboutSection;