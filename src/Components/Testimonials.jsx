import React from "react";
import Slider from "./Slider";
import herobg from "../Assets/hero-bg.jpg";

const Testimonials = () => {
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
      <div className=" m-16 pb-12 ">
        <h2 className=" text-[#0cc0df] md:text-5xl  md:font-extrabold text-4xl mb-4 font-Montserrat font-semibold mt-4">
          Testimonials
        </h2>
        <Slider className="z-0" />
      </div>
    </div>
  );
};
export default Testimonials;
