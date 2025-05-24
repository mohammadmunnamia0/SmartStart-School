import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const placeholder2 = require("../../assets/boy1.jpg");
const placeholder3 = require("../../assets/boy2.jpg");
import { SecondaryButton2 } from "./Buttons";


const AboutFeatures = () => (

  <section className="px-4 bg-gray-50">
  {/* First Section */}
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-2 items-center">
    <img
      src={placeholder2}
      alt="Happy child"
      className="object-cover h-2/3 rounded-t-full rounded-b-full shadow-xl mx-auto transition-transform duration-300 ease-in-out hover:-translate-y-5"
    />
    <div>
      <h2 className="text-3xl font-extrabold mb-4">
        Children Come to Know <br /> and Be Known
      </h2>
      <p className="text-gray-700 mb-6 text-justify">
        SmartStart Believes that all children have the right to <br />
        develop, to be fully known hearts and minds, and to be understood
        deeply. <br />
        If you are searching for a cutting-edge educational program for <br />
        your typically developing child, or if your child has special
        abilities, <br /> our Relationship based Developmental Educational
        Model is a <br /> dynamic, educational and above all, a fun way for
        children to learn <br /> and grow. At SmartStart Developmental
        Learning Center children, <br /> parents and educators journey
        together!
      </p>
      <SecondaryButton2 label="Contact Us" />
    </div>
  </div>

  {/* Second Section */}
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-2 items-center relative top-8 lg:top-[-150px]">
    <div>
      <h2 className="text-3xl font-extrabold mb-4">
        Children Come to Know <br /> and Be Known
      </h2>
      <p className="text-gray-700 mb-6 text-justify">
        Designing Your Child's Developmental Ladder The staff at SmartStart
        develop a passionate vision for each individual child. Each vision is
        orchestrated to build bridges, to scaffold, to help children reach
        their highest potential. We are here to guide and support them up
        their unique developmental ladder – to reach for the stars!
      </p>
      <SecondaryButton2 label="Contact Us" />
    </div>
    <img
      src={placeholder3}
      alt="Happy child"
      className="object-cover h-2/3 rounded-t-full rounded-b-full shadow-xl mx-auto transition-transform duration-300 ease-in-out hover:-translate-y-5"
    />
  </div>
</section>

);

export default AboutFeatures;
