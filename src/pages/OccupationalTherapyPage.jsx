import React from "react";

const OccupationalTherapyPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="bg-teal-500 relative overflow-hidden py-20 text-center">
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
          Occupational
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
            Occupational Therapy services are delivered here at SmartStart in
            our Gym and on our outdoor play equipment.
          </li>
          <li>The sessions are 50 minutes in length</li>
          <li>
            In addition, our therapist will provide you with a "Sensory Diet",
            these are things to do at home that will bring the skills learned
            here to your home.
          </li>
          <li>
            If you are also receiving other services at SmartStart be assured
            that your therapists are coordinating and collaborating to ensure
            that your child is getting a cohesive therapy package
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
      <div className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl bg-gradient-to-r from-teal-400 to-yellow-400 p-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Come Visit Us
        </h2>
        <p className="text-white mb-8 text-lg font-medium">
          Contact us today to schedule a free evaluation and tour. Our dedicated
          team is ready to help your child succeed.
        </p>
        <a
          href="/contact"
          className="bg-white text-teal-500 px-8 py-2 rounded-full font-bold shadow hover:bg-gray-100 transition tracking-widest"
        >
          CONTACT US
        </a>
      </div>
    </section>
  </div>
);

export default OccupationalTherapyPage;
