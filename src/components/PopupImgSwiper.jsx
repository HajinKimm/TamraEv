import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const PopupImgSwiper = ({img, MainTitle}) => {
    const imgList = img.map(item=>item)
    return (
        <Swiper
            style={{
                height: "100%",
                position: "relative",
               
            }}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

            >
                {
                    img.map((item,idx)=><SwiperSlide key={idx}><img src={item} alt={MainTitle} /></SwiperSlide>)
                }
            
        </Swiper >
    );
};

export default PopupImgSwiper;