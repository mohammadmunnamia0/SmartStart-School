import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TherapyButton = ({ to, label }) => (
  <Link
    to={to}
    className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition group inline-block"
  >
    <span className="flex items-center">
      {label}
      <FaArrowRightLong className="ml-2 hidden group-hover:inline-block group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
    </span>
  </Link>
);

const TherapySection = () => (
  <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 md:mb-10">
        Our Therapy Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Speech Therapy</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Our speech therapy services help children develop communication
            skills and overcome speech disorders.
          </p>
          <TherapyButton to="/speech-therapy" label="Learn More" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Occupational Therapy</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            We provide occupational therapy to help children develop the skills
            needed for daily activities.
          </p>
          <TherapyButton to="/occupational-therapy" label="Learn More" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Behavioral Therapy</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Our behavioral therapy programs help children develop positive
            behaviors and social skills.
          </p>
          <TherapyButton
            to="/developmental-behavior-therapy"
            label="Learn More"
          />
        </div>
      </div>
    </div>
  </section>
);

export default TherapySection;
