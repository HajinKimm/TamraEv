import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper
const Visual = () => {
    return (
        <div className='visualWrap'>
        <Swiper
            style={{
                height: "100%",
                position: "relative",
            }}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            >

            <SwiperSlide><img src="./images/main_slider_1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/main_slider_2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/main_slider_3.jpg" alt="" /></SwiperSlide>
            <div className="text">
                <h2>탐라는 전기차</h2>
                <p>전기차와 함께 제주 여행을 준비하는 당신에게<br />필요한 모든 정보와 꿀팁!</p>
            </div>
            <span className='arrow'></span>
        </Swiper >
        </div>
    );
};

export default Visual;