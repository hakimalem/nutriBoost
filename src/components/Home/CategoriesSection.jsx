import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css';

import { categories } from '../../data/data';

// import required modules
import { Autoplay, Pagination, Navigation, A11y } from 'swiper';
import { CategoryCard } from './CategoryCard';

export default function App() {
  const swiper = useSwiper();

  return (
    <div className="px-52 py-16">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // modules={[Autoplay, Pagination]}
        // watchSlidesProgress={true}
        slidesPerView={3}
        className=""
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation={true}
        // slidesPerView="auto"
      >
   
        {categories.map((category) => (
          <SwiperSlide className="res-sli">
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
