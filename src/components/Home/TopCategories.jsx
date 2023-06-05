import React, { useState } from 'react';
import CustomSwiper from '../common/CustomSwiper';
import ProductCard from '../Products/ProductCard';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { useFetch } from '../../hooks/useFetch';

import { topCategories } from '../../data/data';
import axios from 'axios';
import { Loading } from '../common/Loading';
import { useNavigate } from 'react-router-dom';

export const TopCategories = () => {
  const [categories = apiData, isLoading, error] = useFetch(
    '/api/categories/all'
  );
  const navigate = useNavigate();
  return (
    <div className=" lg:px-52 md:px-20 px-10 bg-[rgba(255,7,0,0.08)]">
      <CustomSwiper
        id="sw6"
        title="Top categories"
        slidesNumber={[4, 3, 2]}
        delay={3500}
      >
        {isLoading || error ? (
          <Loading />
        ) : (
          categories?.map(({ name, image, _id }) => (
            <SwiperSlide>
              <div
                style={{ '--image-url': `url(${image})` }}
                className={`rounded-md bg-[image:var(--image-url)] w-52 h-36 bg-contain bg-no-repeat hover:scale-110 cursor-pointer duration-300`}
                onClick={() => {
                  navigate(`/products/category?id=${_id}`);
                }}
              >
                <div className="absolute rounded-md w-52 h-36 bg-black bg-opacity-30 flex items-end pl-2 py-3">
                  <p className="text-white font-bold ">{name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </CustomSwiper>
    </div>
  );
};
