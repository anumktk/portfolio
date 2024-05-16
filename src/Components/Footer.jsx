import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    // <div className="bg-sky-950 w-auto">
    <div className="bg-gradient-to-b from-slate-900 to to-black  w-auto">
      <div className=" border-t border-b border-t-[#124b81c7] border-b-black  py-6 ">
        <h3 className="flex items-center justify-center  text-white text-xl">
          Contact Me
        </h3>
        <div className="flex flex-wrap items-center justify-center text-[#CBD5E1] gap-8 mt-8">
          <a
            href="https://github.com/anumktk"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Github</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a
            href="https://www.linkedin.com/in/anum-shahana-51ab052ba/"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5>Linkedin</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a target="_blank" className="flex justify-center items-center gap-2">
            <h5>Facebook</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a target="_blank" className="flex justify-center items-center gap-2">
            <h5>Instagram</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
          <a target="_blank" className="flex justify-center items-center gap-2">
            <h5>Youtube</h5>
            <MdArrowOutward className=" bg-[#CBD5E1] text-[#124C81]" />
          </a>
        </div>
      </div>
      <div className="  mt-3 pb-3 flex items-center justify-center">
        <p className="text-[#E2E8F0] text-center">
          © 2024 Anum Shahana All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
