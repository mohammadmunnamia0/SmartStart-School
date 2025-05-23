import React from "react";
import placeholder1 from "../../assets/Hero.jpg";
import { PrimaryButton } from "./Buttons";

const HeroSection = () => (
  <section className="px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:max-w-xl text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Unlock Your Child's Potential at{" "}
        <span className="text-orange-500">SmartStart</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        Our inclusive preschool and elementary program is designed to nurture
        every child's. Schedule a tour to see how we can help
        your child thrive!
      </p>
      <div className="flex justify-center md:justify-start">
        <PrimaryButton label="Contact Us" />
      </div>
    </div>
    <div className="w-full md:w-auto">
      <img
        src={placeholder1}
        alt="Children playing"
        className="w-full max-w-sm md:w-80 h-48 sm:h-64 object-cover rounded-3xl shadow-2xl/30 mx-auto"
      />
    </div>
  </section>
);

export default HeroSection;
