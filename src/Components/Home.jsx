import React from "react";
import logo2 from "../Assets/logo2.jpg";
import herobg from "../Assets/hero-bg.jpg";

const Home = () => {
  return (
    // <div className="bg-[#124C81] p-10">
    <div
      className="bg-[#124C81] p-10"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20 mb-10 flex flex-col md:flex-row items-center justify-center">
        <img
          src={logo2}
          alt="logo2"
          className="w-24 h-24 md:w-60 md:h-56 md:rounded-full rounded-full mx-auto object-cover "
          // style={{ width: "250px", height: "150px" }}
        />

        <div className="md:ml-6 mt-4">
          <h1 className="text-[#0cc0df] text-2xl font-extrabold text-center  md:text-6xl  mb-4 font-Montserrat-600 ">
            Anum Shahana
          </h1>
          <h2 className="text-white  text-xl text-center md:text-2xl  mb-4 font-Montserrat-300 ">
            Full Stack Developer
          </h2>
          <p className="text-white mb-6 md:mr-12  text-center">
            I'm a BSCS graduate from the Virtual University of Pakistan and a
            full stack
            <br className="hidden sm:block" /> development trainee at AtomCamp.
            Proficient in JavaScript, React, Next js, Bootstrap, and
            <br className="hidden sm:block" /> Tailwind CSS, I excel in crafting
            dynamic websites and applications, ready to contribute effectively
            to the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
