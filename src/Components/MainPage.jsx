import React from "react";
import herobg from "../Assets/hero-bg.jpg";

const MainPage = () => {
  return (
    // <div className="bg-[#124C81] p-10 ">
    <div
      className="bg-[#124C81] p-10 "
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-3xl mb-4 font-Montserrat text-center">
        Let us create awesome products!
      </h1>
      <p className="text-white mb-4 font-Montserrat text-center">
        I am always open to discussing your project, improving your online
        presence, or helping with <br /> Your website design and converting
        challenges.
      </p>
    </div>
  );
};

export default MainPage;
