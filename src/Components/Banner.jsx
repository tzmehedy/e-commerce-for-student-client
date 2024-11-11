import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg1 from "../assets/images/Banner/corporate-management-strategy-solution-branding-concept.jpg"
import bannerImg2 from "../assets/images/Banner/marketing-strategy-planning-strategy-concept.jpg"
import bannerImg3 from "../assets/images/Banner/programming-background-collage.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";

export default function Banner() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselSlide image={bannerImg1} text="Are you want to get the service of Digital Marketing???"></CarouselSlide>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide image={bannerImg2} text="Make your logo, business card, poster using a graphics Designer"></CarouselSlide>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            image={bannerImg3}
            text="Build Your new website using MERN Stack"
          ></CarouselSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
