import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import handImage from "./image/hand.jpg";
import secImage from "./image/photo_2024-01-28_10-47-43.jpg";
import thrImage from "./image/foo.jpg";
import forImage from "./image/foodp.jpg";
import fifImage from "./image/photo_6_2024-01-06_22-26-40.jpg";
import sixImage from "./image/photo_2024-01-28_10-48-19.jpg";
import sevImage from "./image/food.jpg";

const Swipe = () => {
  return (
    <section id="slides">
      <div className="container">
        <Swiper
          className="slider"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={handImage} alt="" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={secImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={thrImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={forImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={fifImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={sixImage} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="slide-img">
              <img src={sevImage} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Swipe;
