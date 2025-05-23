import React from "react";

const SpeechTherapyPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-indigo-700 to-purple-600 relative overflow-hidden py-20 text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="900"
          height="400"
          viewBox="0 0 900 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <circle cx="450" cy="200" r="200" fill="#fff" fillOpacity="0.07" />
          <circle cx="450" cy="200" r="300" fill="#fff" fillOpacity="0.04" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-2 text-white drop-shadow">
          Speech Language
          <br />
          Therapy
        </h1>
        <div className="text-2xl text-white font-semibold mb-4">
          At SmartStart
        </div>
      </div>
    </section>

    {/* Info Card Section */}
    <section className="relative py-16 flex justify-center items-center bg-white">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute left-0 top-0 w-1/3 h-64 -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="0,0 200,0 0,200" fill="#4F46E5" opacity="0.7" />
        </svg>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 w-1/5 h-40 -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="80" r="30" fill="#FBBF24" opacity="0.8" />
        </svg>
      </div>
      <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl p-8 z-10">
        <ul className="list-disc pl-6 text-gray-800 text-base space-y-3 mb-4">
          <li>
            We provide speech services both in individual and group setting and
            is truly based on the individual needs of the child.
          </li>
          <li>
            Theme-based teaching in the classroom extends into the therapy rooms
            as well, creativity and inspired therapy is celebrated and the
            children thrive in this environment
          </li>
          <li>Sessions are 50 minutes</li>
          <li>
            Speech Therapists at SmartStart are involved and invested in all
            aspects of the child's development and collaboration with teachers
            and other therapists is a key component of our services
          </li>
        </ul>
        <div className="text-gray-700 text-sm flex flex-col gap-1">
          <span className="inline-flex items-center gap-1">
            <span role="img" aria-label="funding">
              🏛️
            </span>{" "}
            Regional Center funding available for children 18mos-36months
          </span>
          <span className="inline-flex items-center gap-1">
            <span role="img" aria-label="insurance">
              🏥
            </span>{" "}
            Kaiser Insurance accepted
          </span>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="flex justify-center items-center py-20 px-2 bg-white">
      <div className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl bg-gradient-to-r from-purple-500 to-pink-400 p-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Let's Get Started
        </h2>
        <p className="text-white mb-8 text-lg font-medium">
          Contact us today to schedule a free evaluation and tour. Our dedicated
          team is ready to help your child succeed.
        </p>
        <a
          href="/contact"
          className="bg-white text-black px-8 py-2 rounded-full font-bold shadow hover:bg-gray-100 transition tracking-widest"
        >
          CONTACT US
        </a>
      </div>
    </section>
  </div>
);

export default SpeechTherapyPage;
