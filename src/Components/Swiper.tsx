
// import { testimonial } from './Databse';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from 'react-icons/ai'
// import { EffectCoverflow, Pagination } from "swiper";
import React from 'react'
import { EffectCoverflow, Pagination } from "swiper/modules";
import { testimonial } from "./Databse";
export default function App() {
  return (
    <>
    <div className=" bg-[#787878] px-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", bulletClass: "swiper-pagination-bullet" }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        {testimonial.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className=" flex mx-auto space-x-1">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              </div>
            <h1>{elem.desc}</h1>
            <div className=" w-14 mx-auto"><img src="/img.avif" alt="" className=" rounded-full" /></div>
            <h1 className=" text-lg font-bold">{elem.name}</h1>
            <h1>{elem.city}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
}
