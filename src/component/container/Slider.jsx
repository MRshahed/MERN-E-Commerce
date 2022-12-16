import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/home2.jpg";
import img2 from "../../assets/home1.jpg";
import img3 from "../../assets/home3.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="lg:h-[80.7vh] w-[100%] h-[92.7vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[100%] bg-purple-100"
      >
        <SwiperSlide>
          <img
            src={img1}
            className="lg:h-[auto] h-[100%] lg:object-contain object-cover w-[100%]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="lg:h-[auto] h-[100%] lg:object-contain object-cover w-[100%]"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            className="lg:h-[auto] h-[100%] lg:object-contain object-cover w-[100%]"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
