import React, { useState } from 'react';
import CustomSwiper from '../common/CustomSwiper';
import ProductCard from '../Products/ProductCard';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { Loading } from '../common/Loading';
import { useFetch } from '../../hooks/useFetch';

export const ProteinSuppliments = () => {
  const [products = apiData, isLoading, error] = useFetch('/api/products/all');
  return (
    <div className="bg-card-gray lg:px-52 md:px-20 px-10">
      <CustomSwiper
        id="sw2"
        title="Recommended Protein based suppliments"
        slidesNumber={[4, 3, 2]}
        delay={4200}
      >
        {isLoading || error ? (
          <Loading />
        ) : (
          products?.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        )}
      </CustomSwiper>
    </div>
  );
};
