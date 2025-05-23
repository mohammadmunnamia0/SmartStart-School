import React from "react";
import childImg from "../assets/boy1.jpg";

const CoursesPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="bg-pink-400 relative overflow-hidden py-16 text-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="900"
          height="400"
          viewBox="0 0 900 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <circle cx="450" cy="200" r="200" fill="#fff" fillOpacity="0.1" />
          <circle cx="450" cy="200" r="300" fill="#fff" fillOpacity="0.07" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow">
          School
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white font-medium mb-6">
          SmartStart is a Developmental Sensory Relationship-based Education
          Program. Its foundations are built solidly on Literacy, Language and
          Sensory-motor development. We are a fully included school which means
          that all children, regardless of ability, are educated together!
        </p>
        <a
          href="#apply"
          className="inline-block bg-white text-pink-500 font-bold px-8 py-2 rounded-full shadow hover:bg-pink-100 transition"
        >
          APPLY NOW
        </a>
      </div>
    </section>

    {/* What We Offer Section */}
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 bg-white">
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
      <div className="flex-shrink-0">
        <img
          src={childImg}
          alt="Child"
          className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl font-extrabold mb-4">What We Offer</h2>
        <p className="text-gray-700 mb-6">
          We offer developmentally tailored educational programs and services
          that meet the individual needs of all our children. If you are
          searching for a top quality program for your typically developing
          child, or if your child has special abilities, our Developmental Model
          is a dynamic, educational and above all fun way for children to learn
          and grow.
          <br />
          <br />
          If your child does have special needs we also offer speech therapy,
          occupational therapy and comprehensive intervention which may be
          provided in home or in conjunction with our school-based programs. At
          SmartStart Developmental Learning Center parents and children journey
          together!
        </p>
        <a
          href="#apply"
          className="inline-block bg-orange-400 text-white font-bold px-8 py-2 rounded-full shadow hover:bg-orange-500 transition"
        >
          APPLY NOW
        </a>
      </div>
    </section>

    {/* Classes Available Section */}
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-2">
        Classes Available
      </h2>
      <p className="text-center text-gray-700 mb-8 font-medium">
        All Classes are Full-Inclusion serving children with Special Abilities
        and Typical Development
      </p>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="font-bold text-lg mb-2">
          Luminaries (ages 16mos-3 years)
        </h3>
        <ul className="list-disc pl-6 text-gray-700 text-sm mb-2">
          <li>
            The children can attend 8-11am, 12-3pm or 8-3pm. The class is
            available 3,4,5 days per week.
          </li>
          <li>
            This is our only class that offers a naptime 11-12:30pm. And of
            course toilet training is not required.
          </li>
          <li>
            Regional Center funded children attend either 8-11am or 12-3pm.
          </li>
          <li>
            Regional Center funded children can extend their day for an
            additional fee paid by parent.
          </li>
        </ul>
        <p className="text-gray-700 text-sm">
          This class is designed for our youngest students. This class has our
          lowest student:teacher ratio and it is also a full-inclusion model
          open for early intervention children who have some delay in their
          development as well as neurotypical children. Children in this school
          will be followers in an intensive developmental-sensory-based
          curriculum and often attend as a choice (parent/guardian) or medical
          classroom. In our "Luminaries" classroom, we offer an individualized,
          play-based curriculum with lots of music, language, and hands-on
          learning and fun ways for them to learn! There is a significant focus
          on integration and engagement with peers, social learning, and
          communication. Our Luminaries team is led by an Early Intervention
          Teacher and Teaching Assistants and may be passionately combined to
          teaching and learning with related service providers as needed.
        </p>
      </div>
    </section>

    {/* Preschool and Elementary Classes Section */}
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-extrabold text-center mb-6">
        Preschool and Elementary Classes
      </h2>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h3 className="font-bold text-lg mb-2">Available Classes</h3>
        <ul className="list-disc pl-6 text-gray-700 text-sm mb-2">
          <li>Gleamers ages 2-3</li>
          <li>Radiators ages 3-4</li>
          <li>Elementary</li>
          <li>Kinder 4-5</li>
          <li>Grades 1st-5th</li>
        </ul>
        <div className="mt-4">
          <div className="font-semibold mb-1">
            For our children with Special Needs:
          </div>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>Ages 18mo-36 month Regional Center funding available</li>
            <li>
              Ages 3-10 years Non-Public School funding may be available through
              the child's IEP
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Come Visit Us CTA */}
    <section className="bg-gradient-to-r from-orange-300 to-pink-400 py-12 rounded-3xl mx-2 md:mx-8 my-12 text-center shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-4">Come Visit Us</h2>
      <p className="text-white mb-6">
        Contact us today to schedule a free evaluation and tour. Our dedicated
        team is ready to help your child succeed.
      </p>
      <a
        href="/contact"
        className="bg-white text-orange-400 px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-100 transition"
      >
        SCHEDULE A TOUR
      </a>
    </section>
  </div>
);

export default CoursesPage;
