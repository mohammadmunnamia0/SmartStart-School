import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 md:py-10 mt-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/flower.png"
            alt="Logo"
            className="w-10 h-10 mb-2"
          />
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
            Phone: (555) 123-4567 | Email: info@smartstart.com
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="#" className="text-sm sm:text-base hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm sm:text-base hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8">
        &copy; {new Date().getFullYear()} SmartStart. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
