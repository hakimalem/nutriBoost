import React from 'react';
// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import '../../App.css';

import { categories } from '../../data/data';
import { offers } from '../../data/data';

// import required modules
import { CategoryCard } from './CategoryCard';
import CustomSwiper from '../common/CustomSwiper';

export default function CategoriesSection() {
  return (
    <div className="py-14 lg:px-52 md:px-20 px-10">
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-0">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <CustomSwiper
        id="sw1"
        title="Offers just for you"
        slidesNumber={[4, 3, 2]}
        delay={2500}
      >
        {offers.map(({ title, image, promotion }, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex gap-4">
              <img src={image} alt="" />
              <div className="font-light">
                <p className="w-max">{title}</p>
                <p>{promotion}% Off</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
}
