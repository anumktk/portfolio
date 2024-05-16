import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import sa4 from "../Assets/sa4.png";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      {/* <div className=" w-full h-20 shadow-md z-[100] bg-gradient-to-b from-black to-[#124C81] border border-[#124b81c7]"> */}
      <div className=" w-full h-20 shadow-md z-[100] bg-gradient-to-b from-black to-slate-800 border border-[#124b81c7]">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-5">
          <Link to="/">
            {/* <button className="font-bold text-white bg-white bg-opacity-35 px-7 rounded-full p-1 pb-2">
              LOGO
            </button> */}
            <img src={sa4} alt="logo4" className="w-20 h-20 rounded-full" />
          </Link>

          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 hover:underline text-white hover:text-[#0cc0df] text-xl ">
                <Link to="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <Link to="/About" onClick={closeNav}>
                  About
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <Link to="/experience" onClick={closeNav}>
                  Experience
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <Link to="/projects2" onClick={closeNav}>
                  Projects
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <Link to="/Certifications" onClick={closeNav}>
                  Certifications
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <Link to="/Testimonials" onClick={closeNav}>
                  Testimonials
                </Link>
              </li>
              <li className="border-b border-transparent ml-10 hover:underline hover:text-[#0cc0df]  text-white text-xl ">
                <button
                  className="bg-[#0cc0df]   rounded-2xl hover:font-bold  text-white hover:border-2 py-1 px-3"
                  onClick={closeNav}
                >
                  <Link to="/Skills">Skills</Link>
                </button>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden text-white">
              <AiOutlineMenu size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  "
              : ""
          }`}
        >
          <div
            className={`${
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#124b818e] p-10 ease-in duration-500 "
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
            }`}
          >
            <div className="flex  ">
              <div className=" flex flex-col">
                <ul className="">
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    <Link to="/" onClick={closeNav}>
                      Home
                    </Link>
                  </li>
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    {" "}
                    <Link to="/about" onClick={closeNav}>
                      About
                    </Link>
                  </li>
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    <Link to="/experience" onClick={closeNav}>
                      Experience
                    </Link>
                  </li>
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    <Link to="/projects2" onClick={closeNav}>
                      Projects
                    </Link>
                  </li>
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    <Link to="/Certifications" onClick={closeNav}>
                      Certifications
                    </Link>
                  </li>
                  <li className="py-4 text-white hover:text-[#0cc0df] ">
                    <Link to="/Testimonials" onClick={closeNav}>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <button
                      className="bg-white border-white border hover:text-[#0cc0df]  rounded-2xl text-black hover:border-2 py-1 px-3"
                      onClick={closeNav}
                    >
                      <Link to="/Skills">Skills</Link>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="absolute top-0 right-0">
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 m-5 cursor-pointer text-white"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
