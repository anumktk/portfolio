import React from "react";
import Slider from "react-slick";
import appui from "../Assets/appui.png";
import chatbot from "../Assets/chatbot.png";
import stem from "../Assets/stem.png";
import bmw from "../Assets/bmw.png";
import gym from "../Assets/gym.png";
import weather3 from "../Assets/weather3.PNG";
import assignment from "../Assets/assignment.png";
import counterapp from "../Assets/counterapp.PNG";
import docweb from "../Assets/docweb.png";
import pizzsweb from "../Assets/pizzaweb.png";
import herobg from "../Assets/hero-bg.jpg";

function Project2() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className=" m-16 pb-12 ">
        <h2 className="text-[#0cc0df] md:text-5xl  md:font-extrabold font-semibold text-4xl mb-8 md:mb-16 font-Montserrat mt-4 m-10 ">
          Projects
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={pizzsweb} alt="pizzsweb" className="mb-2" />

                  <a
                    href="https://pizzawebsite-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={docweb} alt="docweb" className="mb-2" />

                  <a
                    href="https://doctorswebsite-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={appui} alt="appui" className="mb-2" />

                  <a
                    href="https://pricingwebsite-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={chatbot} alt="chatbot" className="mb-2" />

                  <a
                    href="https://blogapplication-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={stem} alt="stem" className="mb-2" />

                  <a
                    href="https://tailwind-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={bmw} alt="bmw" className="mb-2" />

                  <a
                    href="https://bmwdesign-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={gym} alt="gym" className="mb-2" />

                  <a
                    href="https://gymministore-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={weather3} alt="weather3" className="mb-2" />

                  <a
                    href="https://weatherapp-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={assignment} alt="assignment" className="mb-2" />

                  <a
                    href="https://bootstrap-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div
                tabindex="-1"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="bg-[#D9D9D9] h-52 w-52">
                  <h3 className="font-bold text-sm py-2 ml-2">Websites</h3>
                  <img src={counterapp} alt="counterapp" className="mb-2" />

                  <a
                    href="https://counterapp-anum-shahanas-projects.vercel.app/"
                    className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Project2;
