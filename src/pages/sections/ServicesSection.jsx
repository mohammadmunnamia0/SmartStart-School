import React from "react";
import { FaSchool } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SecondaryButton2 } from "./Buttons";

const ServicesSection = () => (
  <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 relative lg:top-[-150px]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 md:mb-10">
        Providing Individualized Education Services{" "}
        <br className="hidden md:block" /> from Preschool through Elementary
        School
      </h2>
      <p className="text-center text-sm sm:text-base mb-8 md:mb-12">
        We offer a full range of services to meet your child's needs, including
        Speech, Occupational <br className="hidden md:block" />& Developmental
        Behavior Therapy.
      </p>

      <div className="max-w-5xl mx-auto border-2 border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-20 text-center bg-white">
        <div className="flex justify-center mb-6">
          <div className="text-white bg-cyan-400 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
            <FaSchool />
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Fully Inclusive Preschool & Elementary School
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6 md:mb-8 max-w-3xl mx-auto">
            Our school provides a supportive environment for ALL children ages
            16 months to 12 years, where children with developmental delays, and
            typically developing peers, learn and grow alongside one another.
          </p>
          <div className="flex justify-center">
            <Link to="/courses">
              <SecondaryButton2 label="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
