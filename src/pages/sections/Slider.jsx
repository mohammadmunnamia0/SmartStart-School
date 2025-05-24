import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs - replace these with your actual image URLs
  const slides = [
    "/images/slider/slide1.jpg",
    "/images/slider/slide2.jpg",
    "/images/slider/slide3.jpg",
    "/images/slider/slide4.jpg",
    "/images/slider/slide5.jpg",
    "/images/slider/slide6.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-outer-bg">
      <div className="slider-container">
        <button
          className="slider-arrow left"
          onClick={goToPrev}
          aria-label="Previous Slide"
        >
          &#8249;
        </button>
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="slider-arrow right"
          onClick={goToNext}
          aria-label="Next Slide"
        >
          &#8250;
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
