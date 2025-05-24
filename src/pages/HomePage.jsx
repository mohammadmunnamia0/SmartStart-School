import React from "react";
import AboutFeatures from "./sections/AboutFeatures";
import ContactSection from "./sections/ContactSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ServicesSection from "./sections/ServicesSection";
import TherapySection from "./sections/TherapySection";
import TourBanner from "./sections/TourBanner";

const HomePage = () => {
  return (
    <div className="bg-white w-full">
      <HeroSection />
      <TourBanner />
      <AboutFeatures />
      <ServicesSection />
      <TherapySection />
      <HowItWorksSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
