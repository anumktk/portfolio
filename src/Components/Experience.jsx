import React from "react";
import atomcamp from "../Assets/atomcampImg.jpg";
import DigiskillsImg from "../Assets/DigiskillsImg.jpg";
import VuImg2 from "../Assets/VuImg2.png";

const Experience = () => {
  return (
    <div className="bg-[#124C81] p-4">
      <h1 className="text-white text-4xl mb-8 md:mb-4 font-Montserrat font-semibold mt-4 m-10 ">
        Experience
      </h1>
      {/* grid */}
      <div className="grid grid-rows-3  md:grid-cols-2  gap-4 ">
        {/* col 1 */}
        <div className="flex-row md:flex m-10 items-center justify-center">
          <img
            src={atomcamp}
            alt="atomcamp"
            className="rounded-full ml-10 mr-6 w-24 h-24 "
            style={{ width: "150px", height: "150px" }}
          />
          <div className=" items-center justify-center mt-2">
            <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
              AtomCamp
            </h1>
            <h2 className="text-white text-xl mb-4 font-Montserrat">
              Full Stack Developer
            </h2>
            <h2 className="text-white text-xl mb-4 font-Montserrat ">2024</h2>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex-row md:flex m-10 items-center justify-center">
          <img
            src={DigiskillsImg}
            alt="DigiskillsImg"
            className="rounded-full ml-10 mr-6 w-24 h-24"
            style={{ width: "150px", height: "150px" }}
          />
          <div className=" items-center justify-center mt-2">
            <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
              DigiSkills.pk
            </h1>
            <h2 className="text-white text-xl mb-4 font-Montserrat">Trainee</h2>
            <h2 className="text-white text-2xl mb-4 font-Montserrat">2023</h2>
          </div>
        </div>
        {/* row */}
        <div className="flex-row md:flex m-10 md:ml-28 items-center justify-center ">
          <img
            src={VuImg2}
            alt="VuImg2"
            className="rounded-full ml-10 mr-6 w-24 h-24"
            style={{ width: "150px", height: "150px" }}
          />
          <div className=" items-center justify-center mt-2">
            <h1 className="text-white text-3xl font-medium mb-4 font-Montserrat-400">
              Virtual University Of Pakistan
            </h1>
            <h2 className="text-white text-xl mb-4 font-Montserrat">FYP</h2>
            <h2 className="text-white text-xl mb-4 font-Montserrat">2019</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import React from "react";
// import atomcamp from "../Assets/atomcampImg.jpg";
// import DigiskillsImg from "../Assets/DigiskillsImg.jpg";
// import VuImg2 from "../Assets/VuImg2.png";

// const Experience = () => {
//   return (
//     <div className="bg-[#124C81] p-4">
//       <h1 className="text-white text-4xl mb-4 font-Montserrat  mt-4 m-10 ">
//         Experience
//       </h1>
//       <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-rows-3 grid-cols-1  ">
//         {/* <div className="grid grid-cols-2 grid-rows-2 sm:grid-rows-3 sm:grid-cols-1"> */}
//         <div className="mt-10 mb-10 flex items-center sm:flex-row">
//           <img
//             src={atomcamp}
//             alt="atomcamp"
//             className="rounded-full ml-10 mr-6 w-24 h-24 sm:w-24 sm:h-20"
//             style={{ width: "150px", height: "150px" }}
//           />
//           <div className="flex flex-col ">
//             <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
//               AtomCamp
//             </h1>
//             <h2 className="text-white text-xl mb-4 font-Montserrat">
//               Full Stack Developer
//             </h2>
//             <h2 className="text-white text-xl mb-4 font-Montserrat ">2024</h2>
//           </div>
//         </div>
//         <div className="mt-10 mb-10 flex items-center">
//           <img
//             src={DigiskillsImg}
//             alt="DigiskillsImg"
//             className="rounded-full ml-10 mr-6"
//             style={{ width: "150px", height: "150px" }}
//           />
//           <div className="flex flex-col">
//             <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
//               DigiSkills.pk
//             </h1>
//             <h2 className="text-white text-xl mb-4 font-Montserrat">Trainee</h2>
//             <h2 className="text-white text-2xl mb-4 font-Montserrat">2023</h2>
//           </div>
//         </div>
//         <div className="mt-10 mb-10 flex items-center">
//           <img
//             src={VuImg2}
//             alt="VuImg2"
//             className="rounded-full ml-10 mr-6"
//             style={{ width: "150px", height: "150px" }}
//           />
//           <div className="flex flex-col">
//             <h1 className="text-white text-3xl font-medium mb-4 font-Montserrat-400">
//               Virtual University Of Pakistan
//             </h1>
//             <h2 className="text-white text-xl mb-4 font-Montserrat">FYP</h2>
//             <h2 className="text-white text-xl mb-4 font-Montserrat">2019</h2>
//           </div>
//         </div>
//         {/* <div className="mt-20 mb-10 flex items-center">
//           <img
//             src={atomcamp}
//             alt="atomcamp"
//             className="rounded-full ml-10 mr-6"
//             style={{ width: "150px", height: "150px" }}
//           />
//           <div className="flex flex-col">
//             <h1 className="text-white text-3xl font-semibold mb-4 font-Montserrat">
//               Trainee
//             </h1>
//             <h2 className="text-white text-2xl mb-4 font-Montserrat">2024</h2>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Experience;
