import Navigation from './components/navigation';
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/FooterSection";
import "./App.css";


export default function App() {
  return (
    <div className="App"> 
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
