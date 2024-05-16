/* eslint-disable import/no-anonymous-default-export */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "styles/Swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img
            className="rounded-full"
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
          />
          <h1>Hamza ali</h1>
          <p>
            Working with Anum has been an absolute pleasure. Her dedication to
            her craft is unmatched, and her attention to detail is commendable
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-full"
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
          />
          <h1>Hamza ali</h1>
          <p>
            Working with Anum has been an absolute pleasure. Her dedication to
            her craft is unmatched, and her attention to detail is commendable
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-full"
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
          />
          <h1>Hamza ali</h1>
          <p>
            Working with Anum has been an absolute pleasure. Her dedication to
            her craft is unmatched, and her attention to detail is commendable
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-full"
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
          />
          <h1>Hamza ali</h1>
          <p>
            Working with Anum has been an absolute pleasure. Her dedication to
            her craft is unmatched, and her attention to detail is commendable
          </p>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
