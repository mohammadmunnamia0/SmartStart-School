import React from "react";
import founderImg from "../assets/placeholder3.jpg";
import logo from "../assets/smartstart-logo-side-text-3.png";

const AboutPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="bg-purple-700 text-white py-16 text-center">
      <img src={logo} alt="SmartStart Logo" className="mx-auto mb-4 w-24" />
      <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
      <p className="max-w-xl mx-auto text-base font-medium">
        Welcome to SmartStart. We offer a full range of services to meet your
        child's needs, including Speech, Occupational & Developmental Behavior
        Therapy.
      </p>
    </section>

    {/* Welcome & Story */}
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-6">Welcome</h2>
      <p className="text-center mb-8 text-gray-700">
        SmartStart Believes that all children have the right to develop, to be
        fully known hearts and minds, and to be understood deeply.
      </p>
      <p className="text-center mb-12 text-gray-700">
        If you are searching for a cutting-edge educational program for your
        typically developing child, or if your child has special abilities, our
        Relationship based Developmental Educational Model is a dynamic,
        educational and above all, a fun way for children to learn and grow. At
        SmartStart Developmental Learning Center children, parents and educators
        journey together!
      </p>
      <h2 className="text-3xl font-extrabold text-center mb-6">Our Story</h2>
      <p className="text-center text-gray-700 mb-2">
        SmartStart was founded in 1992, and our passion for the most current and
        progressive foundational education and services has not deviated!
        SmartStart is unique in our approach, and we are committed to a
        comprehensive Developmental Education and Therapy Model for all of our
        children.
      </p>
      <p className="text-center text-gray-700 mb-2">
        We offer a full continuum of programs and services, and each is staffed
        with passionate educators and therapists; we consider it a great
        privilege to serve and support all of our children and families!
      </p>
      <p className="text-center text-gray-700">
        We look forward to getting to know you and partnering in crafting a
        unique learning journey for your child.
      </p>
    </section>

    {/* Founder Section */}
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-12 px-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">
          Director and Founder Sharon Lowery, M.A.
        </h3>
        <p className="text-gray-700 mb-2">
          Sharon started SmartStart in 1992 in a converted garage in Culver City
          and 32 years later continues as its Director. Sharon has been a leader
          in the field of special education and for the past 39 years she has
          been devoted to providing the highest quality of services to all
          children with industry leading experience in serving children with
          special needs. Sharon has the unique experience of training in ABA
          with both Ivar Lovaas at UCLA, as an undergraduate, and then being
          part of Dr. Stanley Greenspan's DIR/Floortime faculty. This background
          solidified her knowledge and belief that the Developmental
          Relationship based Model provides a much richer and more effective
          intervention for children. Sharon remains passionately committed to
          the education, support and advocacy for all children and families!
        </p>
        <p className="text-gray-700 mb-2">
          Sharon has 2 adult children, Madison and Jackson.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={founderImg}
          alt="Founder Sharon Lowery"
          className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>

    {/* Staff Cards */}
    <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <div className="bg-orange-100 rounded-full p-4 mb-4">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
            />
          </svg>
        </div>
        <h4 className="font-bold text-lg mb-2">Teachers</h4>
        <p className="text-gray-600 text-sm">
          SmartStart employs both early childhood special education and general
          education teachers. Each must complete an advanced degree in their
          area of specialization, our special education teachers are
          credentialed and all teachers must have a minimum of three years
          experience working with children. Not only have most of our teaching
          staff exceeded these requirements-they also participate in an
          extensive Developmental Sensory Relationship-based Model and
          DIR/Floortime Model training.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <div className="bg-orange-100 rounded-full p-4 mb-4">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 3.87v-2a4 4 0 00-3-3.87m6 3.87v-2a4 4 0 00-3-3.87"
            />
          </svg>
        </div>
        <h4 className="font-bold text-lg mb-2">Teachers' assistants</h4>
        <p className="text-gray-600 text-sm">
          At SmartStart our teaching assistants are full members of our teaching
          team and many hold bachelors degrees in special education or a related
          field.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <div className="bg-orange-100 rounded-full p-4 mb-4">
          <svg
            className="w-8 h-8 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7"
            />
          </svg>
        </div>
        <h4 className="font-bold text-lg mb-2">Therapists</h4>
        <p className="text-gray-600 text-sm">
          SmartStart's speech pathologists and occupational therapists are fully
          licensed and have expertise in sensory integration. Our Developmental
          Interventionists must have a minimum of a BA in child development or a
          related field.
        </p>
      </div>
    </section>

    {/* Come Visit Us CTA */}
    <section className="bg-gradient-to-r from-orange-400 to-yellow-300 py-12 rounded-3xl mx-2 md:mx-8 my-12 text-center shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-4">Come Visit Us</h2>
      <p className="text-white mb-6">
        Contact us today to schedule a free evaluation and tour. Our dedicated
        team is ready to help your child succeed.
      </p>
      <a
        href="/contact"
        className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
      >
        Contact Us
      </a>
    </section>
  </div>
);

export default AboutPage;
