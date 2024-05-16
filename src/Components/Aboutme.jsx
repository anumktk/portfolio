import React from "react";
import herobg from "../Assets/hero-bg.jpg";

const Aboutme = () => {
  return (
    // <div className="bg-[#124C81] p-4 items-center ">
    <div
      className="bg-[#124C81] p-4 items-center "
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[#0cc0df] text-3xl md:text-6xl font-extrabold mb-4 font-Montserrat  mt-24 m-10 text-center ">
        About Me
      </h1>
      <p className="text-white font-Montserrat mb-12 m-10 text-center text-pretty">
        As a BSCS graduate from the Virtual University of Pakistan and a current
        full stack development trainee at AtomCamp, I've cultivated a robust
        skill set encompassing JavaScript, React, Bootstrap, and Tailwind CSS.
        Throughout my training, I've seized numerous opportunities to apply
        these skills to diverse projects, fostering hands-on experience and
        deepening my comprehension of web development principles. From crafting
        responsive user interfaces with React to elevating design aesthetics
        with Bootstrap and Tailwind CSS, I've showcased proficiency in creating
        dynamic and visually captivating websites and applications. These
        projects not only fortified my technical prowess but also refined my
        problem-solving acumen and meticulous attention to detail. Armed with a
        solid foundation in both front-end and back-end development, I stand
        prepared to confront challenges head-on and make meaningful
        contributions to the dynamic realm of full stack development.
      </p>
    </div>
  );
};

export default Aboutme;
