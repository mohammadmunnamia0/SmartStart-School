import { Link } from "react-router-dom";
import { SecondaryButton2 } from "./Buttons";
import { CiStar } from "react-icons/ci";
import { LuBlocks } from "react-icons/lu";
import { FaRegFaceGrin } from "react-icons/fa6";
import Slider from "./Slider";

const HowItWorksSection = () => (
  <section className="py-16 px-4 text-center relative top-[150px] bg-sky-50">
   
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 ">
         <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 md:mb-10 relative top-[-60px]">
            How It Works at SmartStart
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
                <h3 className="text-xl font-bold mb-4">Step 1</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                 Schedule a tour and meet with our Director to see all that SmartStart has to offer
                </p>
              </div>
            </div>
    
            {/* Card2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg lg:relative top-[-70px]">
              <div className="flex justify-center mb-6">
                <div className="text-white bg-orange-600 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
                  <LuBlocks />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 2</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Meet with our Director to discuss to customize your child’s learning path
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/occupational-therapy">
                  <SecondaryButton2 label="Learn More" />
                </Link>
              </div>
            </div>
    
    
            {/* Card3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg ">
              <div className="flex justify-center mb-6">
                <div className="text-white bg-yellow-400 rounded-full p-4 sm:p-5 md:p-6 inline-flex items-center justify-center text-4xl sm:text-5xl md:text-6xl ">
                  <CiStar />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 3</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Enroll your child and watch them thrive in our caring environment
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
      <section>
         <Slider />
      </section>
  </section>
);

export default HowItWorksSection;
