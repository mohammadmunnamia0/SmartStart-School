import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TourBanner = () => (
  <section className="bg-gradient-to-r from-orange-300 to-pink-400 py-12 flex items-center justify-evenly">
    <div>
      <span className="text-white font-bold text-2xl mr-4">
        Now touring for the new 2025/2026 <br /> school year. Schedule your
        tour.
      </span>
    </div>
    <div>
      <Link
        to="/contact"
        className="bg-teal-200 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-500 transition inline-block"
      >
        <p className="border-white flex items-center group transition-all duration-300 ease-in-out hover:pl-2">
          Contact Us
          <FaArrowRightLong className="mt-[6px] ml-2 hidden group-hover:inline-block transition-all duration-300 ease-in-out" />
        </p>
      </Link>
    </div>
  </section>
);

export default TourBanner;
