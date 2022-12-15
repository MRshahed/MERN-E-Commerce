import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/lovely-woman-with-buns-dressed-pink-overalls-white-t-shirt-posing-with-closed-eyes-pink-background.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Catagories = () => {
  return (
    <div className="py-10 px-10">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper h-[70vh] w-[100%]"
      >
        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full ">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative bg-purple-900 h-full w-full">
            <img src={img1} alt="img" className="h-full w-full object-cover " />
            <div className="flex flex-col absolute top-0 left-0 h-full w-full bg-gray-800 bg-opacity-20 justify-center items-center gap-y-6">
              <h1 className="text-white font-bold text-3xl">
                Summer Collection
              </h1>
              <button className="bg-white p-2 text-stone-800 ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagories;
