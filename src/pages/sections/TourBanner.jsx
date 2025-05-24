import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton2 } from "./Buttons";

const TourBanner = () => (
  <section className="bg-gradient-to-r from-orange-300 to-pink-400 px-8 lg:px-0  py-12 lg:flex text-center lg:items-center justify-evenly">
    <div>
      <span className="text-white font-bold text-2xl mr-4">
        Now touring for the new 2025/2026 <br /> school year. Schedule your
        tour.
      </span>
    </div>
    <div className="lg:px-0 px-16 lg:mt-0 mt-4">
      <Link to="/contact">
        <PrimaryButton2 label="Contact Us" />
      </Link>
    </div>
  </section>
);

export default TourBanner;
