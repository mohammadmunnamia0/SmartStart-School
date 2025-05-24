import { motion } from "framer-motion";
import React from "react";
import AboutFeatures from "./sections/AboutFeatures";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ServicesSection from "./sections/ServicesSection";
import TherapySection from "./sections/TherapySection";
import TourBanner from "./sections/TourBanner";

const leftAnim = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" },
};
const rightAnim = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const HomePage = () => {
  return (
    <div className="bg-white w-full">
      <motion.div {...leftAnim}>
        <HeroSection />
      </motion.div>
      <motion.div {...rightAnim}>
        <TourBanner />
      </motion.div>
      <motion.div {...leftAnim}>
        <AboutFeatures />
      </motion.div>
      <motion.div {...rightAnim}>
        <ServicesSection />
      </motion.div>
      <motion.div {...leftAnim}>
        <TherapySection />
      </motion.div>
      <motion.div {...rightAnim}>
        <HowItWorksSection />
      </motion.div>
      <motion.div {...leftAnim}>
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
