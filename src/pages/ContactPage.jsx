import { motion } from "framer-motion";
import React from "react";

const sectionAnim = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const ContactPage = () => (
  <div className="bg-white">
    <motion.section
      {...sectionAnim}
      className="bg-teal-400 relative overflow-hidden py-16 text-center"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="900"
          height="400"
          viewBox="0 0 900 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <circle cx="450" cy="200" r="200" fill="#fff" fillOpacity="0.1" />
          <circle cx="450" cy="200" r="300" fill="#fff" fillOpacity="0.07" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white font-medium mb-6">
          We're here to help! Reach out to us with any questions, concerns, or
          feedback you may have. Your satisfaction is our priority, and we look
          forward to assisting you with a smile.
        </p>
        <div className="text-white text-base font-semibold">
          <div>
            Telephone:{" "}
            <a href="tel:310-452-5437" className="underline">
              310-452-5437
            </a>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:sharon@smartstartschool.com" className="underline">
              sharon@smartstartschool.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Form Section */}
    <motion.section
      {...sectionAnim}
      className="relative flex justify-center items-center py-20 px-2 bg-white"
    >
      {/* Decorative shapes */}
      <div className="hidden md:block absolute left-0 top-0 w-1/3 h-64 -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="0,0 200,0 0,200" fill="#4F46E5" opacity="0.7" />
        </svg>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 w-1/5 h-40 -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="80" r="30" fill="#FBBF24" opacity="0.8" />
        </svg>
      </div>
      <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl bg-gradient-to-b from-indigo-500 to-blue-500 p-10">
        <h2 className="text-2xl md:text-2xl font-extrabold text-white text-center mb-8">
          Please fill out the form below to get in touch
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 rounded px-3 py-2 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 rounded px-3 py-2 outline-none"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded px-3 py-2 outline-none"
            required
          />
          <textarea
            placeholder="Write what do you want to say..."
            className="w-full rounded px-3 py-2 outline-none"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded font-semibold shadow hover:bg-orange-600 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </motion.section>
  </div>
);

export default ContactPage;
