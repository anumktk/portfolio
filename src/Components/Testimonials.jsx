import React from "react";
import Swiper from "./Swiper";

const Testimonials = () => {
  return (
    <div className="bg-[#124C81] p-4">
      <div className=" m-16 pb-12 ">
        <h2 className=" text-2xl text-[#E2E8F0] pb-5 ml-5">Testimonials</h2>
        <p className=" text-2xl text-[#E2E8F0] pb-5 ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
          beatae similique hic nihil alias. Illo aut, veritatis suscipit nemo
          ipsam, laboriosam tenetur, blanditiis minus inventore excepturi
          laborum sit mollitia.
        </p>
        <Swiper />
      </div>
    </div>
  );
};
export default Testimonials;
