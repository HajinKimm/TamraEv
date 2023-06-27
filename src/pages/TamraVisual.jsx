import React from 'react';
import { Visual } from '../styled/TamraStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TamraVisual = () => {
    return (
        <Visual>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true} 
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                <SwiperSlide><img src="./images/main_slider_1.jpg" alt="전기차" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_2.jpg" alt="전기차" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_3.jpg" alt="전기차" /></SwiperSlide>
                </Swiper>
        </Visual>
    );
};

export default TamraVisual;