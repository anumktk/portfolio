// import React from "react";
// import FreeCert from "../Assets/FreeCert.png";
// import SEOCert from "../Assets/SEOCert.png";
// import VedioCert from "../Assets/VedioCert.png";
// import { useState } from "react";

// const Certifications = () => {
//   const images = [FreeCert, SEOCert, VedioCert];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? images.length - 1 : prevSlide - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === images.length - 1 ? 0 : prevSlide + 1
//     );
//   };
//   return (
//     <div className="bg-[#124C81] p-4">
//       <div className=" m-16  ">
//         <h2 className=" text-white text-4xl mb-8 md:mb-4 font-Montserrat font-semibold mt-4 m-10">
//           Certifications
//         </h2>
//       </div>
//       <div className="grid grid-cols-2 ml-80">
//         {/* grid 2 */}
//         <div>
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`p-4 ${index === currentSlide ? "block" : "hidden"}`}
//             >
//               <img
//                 src={image}
//                 alt={`slide-${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         {/* grid 1 */}
//         <div className="flex-row ">
//           <div className="flex mt-96  justify-start">
//             <button
//               type="button"
//               className="flex items-center justify-center h-12 w-24 text-6xl  bg-gray-300 text-blue-600 font-bold hover:bg-blue-300"
//               onClick={prevSlide}
//             >
//               {/* this is code is for arrow key  */}
//               &larr;
//             </button>
//             <button
//               type="button"
//               className="flex items-center justify-center h-12 w-24 text-6xl bg-gray-300 text-blue-600 font-bold hover:bg-blue-300 ml-2"
//               onClick={nextSlide}
//             >
//               {/* this is code is for arrow key. it is called character entity */}
//               &rarr;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import React from "react";
import FreeCert from "../Assets/FreeCert.png";
import SEOCert from "../Assets/SEOCert.png";
import VedioCert from "../Assets/VedioCert.png";
import { useState } from "react";

const Certifications = () => {
  const images = [FreeCert, SEOCert, VedioCert];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <div className="bg-[#124C81] p-4">
      <div className="m-4 md:m-16">
        <h2 className="text-white text-4xl mb-4 font-Montserrat font-semibold mt-4">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:ml-80">
        {/* grid 2 */}
        <div className="flex justify-center md:justify-start">
          {images.map((image, index) => (
            <div
              key={index}
              className={`p-4 ${index === currentSlide ? "block" : "hidden"}`}
            >
              <img
                src={image}
                alt={`slide-${index + 1}`}
                className="w-full h-auto md:h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* grid 1 */}
        <div className="flex justify-center md:justify-start items-center mt-4 md:mt-96">
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 md:h-12 md:w-24 text-3xl md:text-6xl bg-gray-300 text-blue-600 font-bold hover:bg-blue-300"
            onClick={prevSlide}
          >
            &larr;
          </button>
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 md:h-12 md:w-24 text-3xl md:text-6xl bg-gray-300 text-blue-600 font-bold hover:bg-blue-300 ml-2"
            onClick={nextSlide}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
