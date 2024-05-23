"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SectionView() {
  return (
    <section className="projects grid grid-cols-2 gap-x-20 items-center">
      {/*<Swiper*/}
      {/*  spaceBetween={50}*/}
      {/*  slidesPerView={3}*/}
      {/*  onSlideChange={() => console.log("slide change")}*/}
      {/*  onSwiper={(swiper) => console.log(swiper)}*/}
      {/*>*/}
      {/*  <SwiperSlide>Slide 1</SwiperSlide>*/}
      {/*  <SwiperSlide>Slide 2</SwiperSlide>*/}
      {/*  <SwiperSlide>Slide 3</SwiperSlide>*/}
      {/*  <SwiperSlide>Slide 4</SwiperSlide>*/}
      {/*</Swiper>*/}
    </section>
  );
}

export default SectionView;
