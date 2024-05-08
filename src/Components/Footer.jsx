import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-sky-950 w-auto">
      <div className=" border-t border-b border-[#E2E8F0] py-6 ">
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
      <div className=" ml-12 mt-3 pb-3">
        <p className="text-[#E2E8F0]">
          © 2024 Anum Shahana All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className=" bg-sky-900">
//       <div className="flex flex-col items-center justify-center border-y-2 border-gray-400">
//         <div className="ml-5 ">
//           <h2 className="text-white text-3xl mt-5 flex mb-5 ">Contact Me</h2>
//         </div>
//         <div className="flex gap-4  ">
//           {/* List 1 */}
//           <h1 className="text-white  mb-5">Github</h1>
//           {/* List 2 */}
//           <h1 className="text-white  mb-5">Youtube</h1>
//           {/* List 3 */}
//           <h1 className="text-white  mb-5">Linkdin</h1>
//           {/* List 4 */}
//           <h1 className="text-white  mb-5">Facebook</h1>
//           {/* List 5 */}
//           <h1 className="text-white  mb-5">Next.js</h1>
//         </div>
//       </div>
//       <div class="w-full  bg-black bg-opacity-40 p-2 ">
//         <a className="text-white"> © 2024 Anum Shahana All rights reserved.</a>
//       </div>
//     </div>
//   );
// };

// export default Footer;
