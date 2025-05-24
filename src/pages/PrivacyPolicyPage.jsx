import React from "react";

const PrivacyPolicyPage = () => (
  <div className="bg-white min-h-screen py-12 px-4">
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-700">
        SmartStart Developmental Learning Center respects the privacy of our
        users. This Privacy Policy describes the types of information we collect
        from and about you when you visit our website{" "}
        <a
          href="https://smartstartschool.com/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smartstartschool.com/
        </a>
        , and how we use that information.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-2 text-gray-700 font-semibold">Personal Information</p>
      <p className="mb-4 text-gray-700">
        When you contact us through our website, you may provide us with
        personal information, such as your name, email address, phone number,
        and mailing address.
      </p>
      <p className="mb-2 text-gray-700 font-semibold">
        Non-Personal Information
      </p>
      <p className="mb-4 text-gray-700">
        We may also collect non-personal information about you, such as your
        browsing history on our website, IP address, and device information.
        This information is collected through cookies and other tracking
        technologies.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>To respond to your inquiries and requests.</li>
        <li>
          To provide you with information about SmartStart, our programs, and
          services.
        </li>
        <li>To improve our website and services.</li>
        <li>To send you marketing communications (with your consent).</li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-2">Sharing Your Information</h2>
      <p className="mb-4 text-gray-700">
        We will not share your personal information with third parties without
        your consent, except in the following circumstances:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>
          To service providers who help us operate our website and business.
        </li>
        <li>
          To comply with legal requirements or to respond to a subpoena or court
          order.
        </li>
        <li>
          In the event of a merger, acquisition, or other business transaction.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-2">Your Choices</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>
          You can opt out of receiving marketing communications from us by
          following the unsubscribe instructions in our emails.
        </li>
        <li>
          You can request to access, update, or delete your personal information
          by contacting us at{" "}
          <a
            href="mailto:sharon@smartstartschool.com"
            className="text-blue-600 underline"
          >
            sharon@smartstartschool.com
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-2">Data Security</h2>
      <p className="mb-4 text-gray-700">
        We take reasonable steps to protect your information from unauthorized
        access, disclosure, alteration, or destruction. However, no website or
        internet transmission is completely secure.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Children's Privacy</h2>
      <p className="mb-4 text-gray-700">
        Our website is not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">
        Changes to this Privacy Policy
      </h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time. We will post any
        changes on this page.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
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

export default PrivacyPolicyPage;
