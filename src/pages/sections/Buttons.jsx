
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

export const PrimaryButton2 = ({ label }) => {
  return (
    <button className="group bg-teal-200 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-500 transition-all duration-300 ease-in-out flex items-center">
      <span className="transition-all duration-300 ease-in-out group-hover:pr-2">
        {label}
      </span>
      <FaArrowRightLong
        className="ml-0 w-0 opacity-0 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ease-in-out"
      />
    </button>
  );
};


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

export const SecondaryButton2 = ({ label }) => {
  return (
    <button className="group bg-orange-400 text-white  px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition-all duration-300 ease-in-out flex items-center">
      <span className="transition-all duration-300 ease-in-out group-hover:pr-2">
        {label}
      </span>
      <FaArrowRightLong
        className="ml-0 w-0 opacity-0 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ease-in-out"
      />
    </button>
  );
};


