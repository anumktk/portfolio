import React from "react";
import AnumPic from "../Assets/AnumPic.jpg";
import logo2 from "../Assets/logo2.jpg";

const Home = () => {
  return (
    <div className="bg-[#124C81] p-10">
      <div className="mt-20 mb-10 flex flex-col md:flex-row items-center justify-center">
        <img
          src={logo2}
          alt="logo2"
          className="w-24 h-24 md:w-96 md:h-56 md:rounded-full rounded-full mx-auto object-cover "
          // style={{ width: "250px", height: "150px" }}
        />
        {/* <img
          src={logo}
          alt="logo"
          className="w-24 h-24 md:w-72 md:h-60 md:rounded-full rounded-full   "
          // style={{ width: "250px", height: "150px" }}
        /> */}
        <div className="md:ml-6 mt-4">
          <h1 className="text-white text-2xl text-center md:text-start md:text-4xl  mb-4 font-Montserrat-600 ">
            Anum Shahana
          </h1>
          <h2 className="text-white text-xl text-center md:text-2xl mb-4 font-Montserrat-300 md:text-start">
            Full Stack Developer
          </h2>
          <p className="text-white mb-6 md:mr-12  text-justify">
            I'm a BSCS graduate from the Virtual University of Pakistan and a
            full stack development trainee at AtomCamp. Proficient in
            JavaScript, React, Bootstrap, and Tailwind CSS, I excel in crafting
            dynamic websites and applications, ready to contribute effectively
            to the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import AnumPic from "../Assets/AnumPic.jpg";

// const Home = () => {
//   return (
//     <div className="bg-teal-700 p-10 ">
//       <div className="mt-20 mb-10 flex">
//         <img
//           src={AnumPic}
//           alt="AnumPic"
//           className="rounded-full ml-10 mr-6"
//           style={{ width: "300px", height: "200px" }}
//         />
//         <div className="flex-col ">
//           <h1 className="text-white text-5xl font-semibold mb-4 font-Montserrat">
//             Anum Shahana
//           </h1>
//           <h2 className="text-white text-3xl mb-4 font-Montserrat">
//             Full Stack Developer
//           </h2>
//           <p className="text-white  mr-12 mb-36">
//             As a BSCS graduate from the Virtual University of Pakistan and a
//             current full stack development trainee at AtomCamp, I've cultivated
//             a robust skill set encompassing JavaScript, React, Bootstrap, and
//             Tailwind CSS. Throughout my training, I've seized numerous
//             opportunities to apply these skills to diverse projects, fostering
//             hands-on experience and deepening my comprehension of web
//             development principles. From crafting responsive user interfaces
//             with React to elevating design aesthetics with Bootstrap and
//             Tailwind CSS, I've showcased proficiency in creating dynamic and
//             visually captivating websites and applications. These projects not
//             only fortified my technical prowess but also refined my
//             problem-solving acumen and meticulous attention to detail. Armed
//             with a solid foundation in both front-end and back-end development,
//             I stand prepared to confront challenges head-on and make meaningful
//             contributions to the dynamic realm of full stack development.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
