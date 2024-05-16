import React from "react";
import FreeCert from "../Assets/FreeCert.png";
import SEOCert from "../Assets/SEOCert.png";
import VedioCert from "../Assets/VedioCert.png";
import { useState } from "react";
import herobg from "../Assets/hero-bg.jpg";

const Certifications = () => {
  const images = [FreeCert, SEOCert, VedioCert];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    // <div className="bg-[#124C81] p-4">
    <div
      className="bg-[#124C81] p-4"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="m-4 md:m-16">
        <h2 className="text-[#0cc0df] md:text-5xl  md:font-extrabold text-4xl mb-4 font-Montserrat font-semibold mt-4">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:ml-80">
        {/* grid 2 */}
        <div className="flex justify-center md:justify-start">
          {images.map((image, index) => (
            <div
              key={index}
              className={`p-4 ${index === currentSlide ? "block" : "hidden"}`}
            >
              <img
                src={image}
                alt={`slide-${index + 1}`}
                className="w-full h-auto md:h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* grid 1 */}
        <div className="flex justify-center md:justify-start items-center mt-4 md:mt-96">
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 md:h-12 md:w-24 text-3xl md:text-6xl bg-gray-300 text-blue-600 font-bold hover:bg-blue-300"
            onClick={prevSlide}
          >
            &larr;
          </button>
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 md:h-12 md:w-24 text-3xl md:text-6xl bg-gray-300 text-blue-600 font-bold hover:bg-blue-300 ml-2"
            onClick={nextSlide}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
