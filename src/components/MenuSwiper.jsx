import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const MenuSwiper = () => {
    return (
      <Swiper
      style={{
          height: "100%",
          position: "relative",
      }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      >

      <SwiperSlide><img src="./images/gnb_slider_1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/gnb_slider_2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/gnb_slider_3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/gnb_slider_4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/gnb_slider_5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/gnb_slider_6.jpg" alt="" /></SwiperSlide>
  </Swiper >
    );
};

export default MenuSwiper;
/* 
import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

class MySwiperComponent extends Component {
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChange: () => {
          this.updateSlideScale();
        },
      },
    });
  }

  componentWillUnmount() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  updateSlideScale() {
    const slides = Array.from(document.querySelectorAll('.swiper-slide'));
    slides.forEach((slide, index) => {
      const scale = this.calculateScale(index);
      slide.style.transform = `scale(${scale})`;
    });
  }

  calculateScale(index) {
    // 슬라이드에 원하는 스케일 값을 계산하는 로직을 작성합니다.
    // 예: 현재 슬라이드 인덱스에 따라 스케일 값을 변경합니다.
    // 원하는 스케일 값은 실제 사용 시나리오에 맞게 조정해야 합니다.
    const baseScale = 1; // 기본 스케일 값
    const scaleIncrement = 0.1; // 스케일 증가량
    return baseScale + index * scaleIncrement;
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          {/* 추가적인 슬라이드 */
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     );
//   }
// }

// export default MySwiperComponent; */