import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://img.icons8.com/ios-filled/50/000000/flower.png"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-extrabold text-orange-400">
                SmartStart
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 font-medium">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:text-orange-500 font-medium flex items-center gap-1 focus:outline-none"
              >
                Programs & Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/courses"
                    className="block px-6 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Preschool and Elementary School Programs
                  </Link>
                  <Link
                    to="/speech-therapy"
                    className="block px-6 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Speech Therapy
                  </Link>
                  <Link
                    to="/occupational-therapy"
                    className="block px-6 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Occupational Therapy
                  </Link>
                  <Link
                    to="/developmental-behavior-therapy"
                    className="block px-6 py-2 hover:bg-orange-50 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Developmental Behavior Therapy
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="hover:text-orange-500 font-medium">
              About
            </Link>
            <Link to="/contact" className="hover:text-orange-500 font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-orange-400 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-orange-500 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              onClick={handleMenuClick}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              >
                Programs & Services
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/courses"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={handleMenuClick}
                  >
                    Preschool and Elementary School Programs
                  </Link>
                  <Link
                    to="/speech-therapy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={handleMenuClick}
                  >
                    Speech Therapy
                  </Link>
                  <Link
                    to="/occupational-therapy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={handleMenuClick}
                  >
                    Occupational Therapy
                  </Link>
                  <Link
                    to="/developmental-behavior-therapy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    onClick={handleMenuClick}
                  >
                    Developmental Behavior Therapy
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              onClick={handleMenuClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              onClick={handleMenuClick}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-orange-400 text-white hover:bg-orange-500"
              onClick={handleMenuClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
