import React from 'react'
import { useRef, useState } from "react";
import ApartmentCard from './ApartmentCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


function ApartmentsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ApartmentCard />
        </SwiperSlide>
        <SwiperSlide>
            <ApartmentCard />
        </SwiperSlide>
        <SwiperSlide>
            <ApartmentCard />
        </SwiperSlide>
        <SwiperSlide>
            <ApartmentCard />
        </SwiperSlide>
      </Swiper>
  </>
  )
}

export default ApartmentsCarousel