import { Link } from "react-router-dom";
import { SecondaryButton2 } from "./Buttons";
import { CiStar } from "react-icons/ci";
import { LuBlocks } from "react-icons/lu";
import { FaRegFaceGrin } from "react-icons/fa6";

const TherapySection = () => (
  <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 ">
     <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 md:mb-10">
        Our Therapy Services
      </h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {/* Card1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="text-white bg-red-400 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
              <FaRegFaceGrin />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Speech Therapy</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our speech therapy services help children develop communication
              skills and overcome speech disorders.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/speech-therapy">
              <SecondaryButton2 label="Learn More" />
            </Link>
          </div>
        </div>


        {/* Card2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative top-[70px]">
          <div className="flex justify-center mb-6">
            <div className="text-white bg-orange-600 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
              <LuBlocks />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Occupational Therapy</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              We provide occupational therapy to help children develop the
              skills needed for daily activities.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/occupational-therapy">
              <SecondaryButton2 label="Learn More" />
            </Link>
          </div>
        </div>


        {/* Card3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative top-[120px]">
          <div className="flex justify-center mb-6">
            <div className="text-white bg-yellow-400 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
              <CiStar />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Behavioral Therapy</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our behavioral therapy programs help children develop positive
              behaviors and social skills.
            </p>
          </div>

          <div className="flex justify-center">
            <Link to="/developmental-behavior-therapy">
              <SecondaryButton2 label="Learn More" />
            </Link>
          </div>
        </div> </div>
    </div>
  </section>
);

export default TherapySection;
