import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../src/assets/Logo/logo1.png";

const Footer = () => (
  <motion.footer
    className="bg-gray-900 text-white py-8 md:py-10 mt-8"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center md:items-start gap-2">
          <img src={logo1} alt="Logo" className="w-[150px] h-[240px] mb-2" />
          <span className="font-extrabold text-xl text-orange-400 tracking-tight">
            SmartStart
          </span>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-2 font-semibold">Mailing & Street Address</div>
          <div className="text-sm sm:text-base">
            1234 Imagination Ave, Suite 100
            <br />
            Wonderland, USA 12345
          </div>
          <div className="mt-2 text-xs sm:text-sm text-gray-400">
            Phone: 310-452-5437 <br />
            Email:
            <a href="mailto:sharon@smartstartschool.com ">
              sharon@smartstartschool.com{" "}
            </a>
            <br />
            Website: https://smartstartschool.com
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <Link
            to="/privacy-policy"
            className="text-sm sm:text-base hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-sm sm:text-base hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8">
        &copy; {new Date().getFullYear()} SmartStart. All rights reserved.{" "}
        <br />
        Powered By GenZsoft.cloud
      </div>
    </div>
  </motion.footer>
);

export default Footer;
