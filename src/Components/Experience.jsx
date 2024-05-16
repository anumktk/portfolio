import React from "react";
import atomcamp from "../Assets/atomcampImg.jpg";
import DigiskillsImg from "../Assets/DigiskillsImg.jpg";
import VuImg2 from "../Assets/VuImg2.png";
import herobg from "../Assets/hero-bg.jpg";
import expimg from "../Assets/expimg.jpg";

const Experience = () => {
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
      <h1 className="text-[#0cc0df] md:text-5xl  md:font-extrabold font-semibold text-4xl mb-8 md:mb-4 font-Montserrat  mt-4 m-10 ">
        Experience
      </h1>
      <div className="flex-row md:flex m-10 items-center justify-center">
        <img
          src={expimg}
          alt="expimg"
          className="rounded-full ml-10 mr-6 w-24 h-24 border border-white"
          style={{ width: "150px", height: "150px" }}
        />
        <div className=" items-center justify-center mt-2 text-center sm:text-left">
          <h1 className="text-[#0cc0df] md:text-3xl text-2xl  font-semibold mt-5 mb-4 font-Montserrat">
            Digitalized Solutions
          </h1>
          <h2 className="text-white text-xl mb-4 font-Montserrat">
            Front-end Developer
          </h2>
          <h2 className="text-white text-xl mb-4 font-Montserrat ">2024</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// {
//   /* grid */
// }
// <div className="grid grid-rows-3  md:grid-cols-2  gap-4 ">
//   {/* col 1 */}
//   <div className="flex-row md:flex m-10 items-center justify-center">
//     <img
//       src={atomcamp}
//       alt="atomcamp"
//       className="rounded-full ml-10 mr-6 w-24 h-24 "
//       style={{ width: "150px", height: "150px" }}
//     />
//     <div className=" items-center justify-center mt-2">
//       <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
//         AtomCamp
//       </h1>
//       <h2 className="text-white text-xl mb-4 font-Montserrat">
//         Full Stack Developer
//       </h2>
//       <h2 className="text-white text-xl mb-4 font-Montserrat ">2024</h2>
//     </div>
//   </div>
//   {/* col 2 */}
//   <div className="flex-row md:flex m-10 items-center justify-center">
//     <img
//       src={DigiskillsImg}
//       alt="DigiskillsImg"
//       className="rounded-full ml-10 mr-6 w-24 h-24"
//       style={{ width: "150px", height: "150px" }}
//     />
//     <div className=" items-center justify-center mt-2">
//       <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
//         DigiSkills.pk
//       </h1>
//       <h2 className="text-white text-xl mb-4 font-Montserrat">Trainee</h2>
//       <h2 className="text-white text-2xl mb-4 font-Montserrat">2023</h2>
//     </div>
//   </div>
//   {/* row */}
//   <div className="flex-row md:flex m-10 md:ml-28 items-center justify-center ">
//     <img
//       src={VuImg2}
//       alt="VuImg2"
//       className="rounded-full ml-10 mr-6 w-24 h-24"
//       style={{ width: "150px", height: "150px" }}
//     />
//     <div className=" items-center justify-center mt-2">
//       <h1 className="text-white text-3xl font-medium mb-4 font-Montserrat-400">
//         Virtual University Of Pakistan
//       </h1>
//       <h2 className="text-white text-xl mb-4 font-Montserrat">FYP</h2>
//       <h2 className="text-white text-xl mb-4 font-Montserrat">2019</h2>
//     </div>
//   </div>
// </div>;
