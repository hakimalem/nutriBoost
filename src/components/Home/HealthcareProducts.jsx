import React, { useState } from 'react';
import CustomSwiper from '../common/CustomSwiper';
import ProductCard from '../Products/ProductCard';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../common/Loading';

export const HealthcareProducts = () => {
  const [products = apiData, isLoading, error] = useFetch('/api/products/all');
  console.log(error, isLoading, products);

  return (
    <div className=" lg:px-52 md:px-20 px-10">
      <CustomSwiper
        id="sw3"
        title="Popular Healthcare Products"
        slidesNumber={[4, 3, 2]}
        delay={3500}
      >
        {isLoading || error ? (
          <Loading />
        ) : (
          products &&
          products.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        )}
      </CustomSwiper>
    </div>
  );
};
