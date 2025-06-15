


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";

SwiperCore.use([Autoplay, Pagination]);


const MyCarousel = ({ selectedProject }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {selectedProject.images.map((img, index) => (
        <SwiperSlide key={index} className="">
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className=" rounded m-auto  "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;
