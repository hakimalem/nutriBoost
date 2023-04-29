import React from 'react';
import CustomSwiper from '../common/CustomSwiper';
import ProductCard from '../Products/ProductCard';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { topCategories } from '../../data/data';

export const TopCategories = () => {
  return (
    <div className=" lg:px-52 md:px-20 px-10 bg-[rgba(255,7,0,0.08)]">
      <CustomSwiper
        id="sw6"
        title="Top categories"
        slidesNumber={[4, 3, 2]}
        delay={3500}
      >
        {topCategories.map(({ title, image }) => (
          <SwiperSlide>
            <div className='bg-card-gray px-4 py-3 text-text-black flex flex-col gap-3'>
              <p>{title}</p>
              <img src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};
