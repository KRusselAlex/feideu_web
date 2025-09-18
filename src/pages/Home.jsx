import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';
import HeroSection from '../components/home/HeroSection';
import QuoteRequestSection from '../components/home/QuoteRequestSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
     <ServicesSection />

      {/* About Section */}
      <AboutSection />
      
      {/* portfolio section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />

      <QuoteRequestSection />

      
    </div>
  );
};

export default Home;