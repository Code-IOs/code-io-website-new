import React from "react";

const TestimonialsSection = React.memo(() => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Local Bakery Co.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&format=webp",
      quote: "Code IO transformed our online presence completely. Our new website increased our orders by 150% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Startup",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&format=webp",
      quote: "The mobile app they built for us is exactly what we envisioned. Professional, fast, and our users love it!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            อะไรคือ <span className="gradient-text">ความเห็นจากลูกค้า</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            อย่าเชื่อแค่คำพูดของเรา นี่คือสิ่งที่ลูกค้าที่พึงพอใจของเราพูดถึงการทำงานกับ Code IO
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-fluorescent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-200 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-fluorescent text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;