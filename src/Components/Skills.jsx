import React from "react";
import herobg from "../Assets/hero-bg.jpg";

const Skills = () => {
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
      <h1 className="text-white text-4xl  font-Montserrat  mt-16 m-10 ">
        Skills
      </h1>
      <div className="grid md:grid-cols-6 grid-rows-8 m-10 gap-3 ">
        <div className="text-white rounded-lg border border-white p-2 ">
          React Js
        </div>
        <div className="text-white rounded-lg border border-white p-2">
          Tailwind Css
        </div>

        <div className="text-white rounded-lg border border-white p-2">
          MongoDB
        </div>
        <div className="text-white rounded-lg border border-white p-2">
          Dialogflow
        </div>
        <div className="text-white rounded-lg border border-white p-2">
          HTML
        </div>
        <div className="text-white rounded-lg border border-white p-2">CSS</div>
        <div className="text-white rounded-lg border border-white p-2">
          Express JS
        </div>
        <div className="text-white rounded-lg border border-white p-2">
          NodeJS
        </div>
      </div>
    </div>
  );
};

export default Skills;
