import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "hover:text-orange-500"
                }`
              }
            >
              Home
            </NavLink>
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
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `block px-6 py-2 ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:bg-orange-50"
                      }`
                    }
                    onClick={() => setDropdownOpen(false)}
                  >
                    Preschool and Elementary School Programs
                  </NavLink>
                  <NavLink
                    to="/speech-therapy"
                    className={({ isActive }) =>
                      `block px-6 py-2 ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:bg-orange-50"
                      }`
                    }
                    onClick={() => setDropdownOpen(false)}
                  >
                    Speech Therapy
                  </NavLink>
                  <NavLink
                    to="/occupational-therapy"
                    className={({ isActive }) =>
                      `block px-6 py-2 ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:bg-orange-50"
                      }`
                    }
                    onClick={() => setDropdownOpen(false)}
                  >
                    Occupational Therapy
                  </NavLink>
                  <NavLink
                    to="/developmental-behavior-therapy"
                    className={({ isActive }) =>
                      `block px-6 py-2 ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:bg-orange-50"
                      }`
                    }
                    onClick={() => setDropdownOpen(false)}
                  >
                    Developmental Behavior Therapy
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "hover:text-orange-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "hover:text-orange-500"
                }`
              }
            >
              Contact
            </NavLink>
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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`
              }
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              >
                Programs & Services
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-1">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`
                    }
                    onClick={handleMenuClick}
                  >
                    Preschool and Elementary School Programs
                  </NavLink>
                  <NavLink
                    to="/speech-therapy"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`
                    }
                    onClick={handleMenuClick}
                  >
                    Speech Therapy
                  </NavLink>
                  <NavLink
                    to="/occupational-therapy"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`
                    }
                    onClick={handleMenuClick}
                  >
                    Occupational Therapy
                  </NavLink>
                  <NavLink
                    to="/developmental-behavior-therapy"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-orange-500 underline underline-offset-4"
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`
                    }
                    onClick={handleMenuClick}
                  >
                    Developmental Behavior Therapy
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`
              }
              onClick={handleMenuClick}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`
              }
              onClick={handleMenuClick}
            >
              Contact
            </NavLink>
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
