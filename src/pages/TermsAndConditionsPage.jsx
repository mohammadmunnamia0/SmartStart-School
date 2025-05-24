import React from "react";

const TermsAndConditionsPage = () => (
  <div className="bg-white min-h-screen py-12 px-4">
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        Terms & Conditions
      </h1>
      <p className="mb-4 text-gray-700">
        Welcome to the website of SmartStart Developmental Learning Center.
        These Terms & Conditions ("Terms") govern your use of our website.
        <a
          href="https://smartstartschool.com/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smartstartschool.com/
        </a>
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Acceptance of Terms</h2>
      <p className="mb-4 text-gray-700">
        By accessing or using our website, you agree to be bound by these Terms.
        If you disagree with any part of these Terms, you may not access or use
        our website.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Use of Website</h2>
      <p className="mb-4 text-gray-700">
        You may use our website for lawful purposes only. You may not use our
        website for any purpose that is prohibited by these Terms or applicable
        law.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4 text-gray-700">
        The content of our website, including text, graphics, logos, images, and
        software, is the property of SmartStart or its licensors and is
        protected by copyright and other intellectual property laws. You may not
        reproduce, distribute, modify, transmit, or display the content of our
        website without our prior written consent.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">
        Links to Third-Party Websites
      </h2>
      <p className="mb-4 text-gray-700">
        Our website may contain links to third-party websites. We are not
        responsible for the content or privacy practices of any third-party
        websites.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Disclaimer</h2>
      <p className="mb-4 text-gray-700">
        The information on our website is provided for informational purposes
        only and is not intended to be a substitute for professional advice. We
        make no warranties or guarantees about the accuracy, completeness, or
        timeliness of the information on our website.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        We shall not be liable for any damages arising out of your use of our
        website, including but not limited to direct, indirect, incidental,
        consequential, or punitive damages.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Termination</h2>
      <p className="mb-4 text-gray-700">
        We may terminate your access to our website at any time, without notice,
        for any reason.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Governing Law</h2>
      <p className="mb-4 text-gray-700">
        These Terms shall be governed by and construed in accordance with the
        laws of the State of California, United States of America.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Entire Agreement</h2>
      <p className="mb-4 text-gray-700">
        These Terms constitute the entire agreement between you and SmartStart
        with respect to your use of our website.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about these Terms, please contact us at
        <a
          href="mailto:sharon@smartstartschool.com"
          className="text-blue-600 underline"
        >
          sharon@smartstartschool.com
        </a>
        .
      </p>
      <div className="text-center text-gray-400 text-xs mt-8">
        &copy; {new Date().getFullYear()} SmartStart. All rights reserved.
      </div>
    </section>
  </div>
);

export default TermsAndConditionsPage;
