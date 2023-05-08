import React from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Navigation]); // enable Navigation module

export default function CustomSwiper({
  children,
  title,
  id,
  slidesNumber,
  delay,
}) {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center my-5 top-0">
        <div className="md:text-4xl text-xl">{title}</div>
        <div className="flex gap-3 ">
          <div
            className={`custom-prev-${id} cursor-pointer  text-primary bg-green2 hover:bg-primary hover:bg-opacity-50 rounded-sm p-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div
            className={`custom-next-${id} cursor-pointer bg-green2 hover:bg-primary hover:bg-opacity-50 text-primary rounded-sm p-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay,
        }}
        watchSlidesProgress={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={30}
        navigation={{
          nextEl: `.custom-next-${id}`,
          prevEl: `.custom-prev-${id}`,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: slidesNumber[2],
            spaceBetween: 20,
          },
          950: {
            slidesPerView: slidesNumber[1],
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: slidesNumber[0],
            spaceBetween: 50,
          },
        }}
        observer={true}
        observeParents={true}
        parallax={true}
      >
        {children}
      </Swiper>
    </div>
  );
}
