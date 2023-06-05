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
import { useFetch } from '../../hooks/useFetch';
// import required modules
import { CategoryCard } from './CategoryCard';
import CustomSwiper from '../common/CustomSwiper';
import { Loading } from '../common/Loading';

export default function CategoriesSection() {
  const [offers = apiData, isLoading, error] = useFetch('api/promotions/all');

  return (
    <div className="py-14 lg:px-52 md:px-20 px-10">
      {/* <div className="flex lg:flex-row flex-col lg:gap-10 gap-0">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            An error occured while fetching data
          </div>
        ) : (
          categories?.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))
        )}
      </div> */}

      <CustomSwiper
        id="sw1"
        title="Offers just for you"
        slidesNumber={[4, 3, 2]}
        delay={2500}
      >
        {isLoading || error ? (
          <Loading />
        ) : (
          offers?.map(({ name, image, discount }, index) => (
            <SwiperSlide key={index} className="">
              <div className="flex gap-4">
                <img src={image} alt="" />
                <div className="font-light">
                  <p className="w-max">{name}</p>
                  <p>{discount * 100}% Off</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </CustomSwiper>
    </div>
  );
}
