// Import Swiper React components
"use client";
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

// import required modules
import { Navigation } from "swiper/modules";
const Slider = ({ posts, prevButtonRef, nextButtonRef }) => {
  if (!posts) return null;

  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        className="mySwiper"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.Id}>
            <p className="w-full h-[85%] boxshadow rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg "
                src={post.ImageUrl}
                alt=""
              />
            </p>
            <p className="text-black text-center mt-4">{post.Name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
