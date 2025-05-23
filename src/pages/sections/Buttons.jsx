import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ label = "Contact Us", onClick }) => (
  <Link
    to="/contact"
    className="bg-teal-200 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-500 transition group inline-block"
  >
    <span className="flex items-center">
      {label}
      <FaArrowRightLong className="mt-[6px] ml-2 hidden group-hover:inline-block group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
    </span>
  </Link>
);

export const SecondaryButton = ({ label = "Contact Us", onClick }) => (
  <Link
    to="/contact"
    className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition group inline-block"
  >
    <span className="flex items-center">
      {label}
      <FaArrowRightLong className=" ml-2 hidden group-hover:inline-block group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
    </span>
  </Link>
);
