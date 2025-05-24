import { motion } from "framer-motion";
import React from "react";

const DevelopmentalBehaviorTherapyPage = () => (
  <motion.div
    className="bg-white"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {/* Hero Section */}
    <section className="bg-purple-800 relative overflow-hidden py-20 text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="900"
          height="400"
          viewBox="0 0 900 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <circle cx="450" cy="200" r="200" fill="#fff" fillOpacity="0.07" />
          <circle cx="450" cy="200" r="300" fill="#fff" fillOpacity="0.04" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-2 text-white drop-shadow">
          Developmental
          <br />
          Behavior Therapy
        </h1>
        <div className="text-2xl text-white font-semibold mb-4">
          At SmartStart
        </div>
      </div>
    </section>

    {/* Info Card Section */}
    <section className="relative py-16 flex justify-center items-center bg-white">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl p-8 z-10">
        <ul className="list-disc pl-6 text-gray-800 text-base space-y-3 mb-4">
          <li>
            SmartStart provides intensive home-based developmental therapy
            programs.
          </li>
          <li>
            Our specialists will work one-to-one with the child and will train
            parents and other family members in our Developmental Sensory
            Relationship-Based Model which integrates the DIR/Floortime model in
            its delivery.
          </li>
          <li>
            This service includes supervision by one of our directors, ongoing
            observation, coaching, evaluation and program development.
          </li>
          <li>
            The average home program involves 6-10 hours of one-to-one
            intervention per week; this varies depending on the individual needs
            of your child
          </li>
          <li>Regional Center children may qualify for funding</li>
        </ul>
      </div>
    </section>

    {/* CTA Section */}
    <section className="flex justify-center items-center py-20 px-2 bg-white">
      <div className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl bg-gradient-to-r from-orange-400 to-pink-400 p-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Come Visit Us
        </h2>
        <p className="text-white mb-8 text-lg font-medium">
          Contact us today to schedule a free evaluation and tour. Our dedicated
          team is ready to help your child succeed.
        </p>
        <a
          href="/contact"
          className="bg-white text-orange-400 px-8 py-2 rounded-full font-bold shadow hover:bg-orange-100 transition tracking-widest"
        >
          CONTACT US
        </a>
      </div>
    </section>
  </motion.div>
);

export default DevelopmentalBehaviorTherapyPage;
