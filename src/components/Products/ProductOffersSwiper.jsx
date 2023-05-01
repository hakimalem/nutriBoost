import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import tw from 'tailwind-styled-components';
import imag from '../../assets/images/homeImage.png';
import arrow from '../../assets/arrow.svg';
import CustomSwiper from '../common/CustomSwiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

const ProductOffersSwiper = () => {
  return (
    <div className=" bg-sky-200 h-[45%] flex flex-col w-[100%] justify-center font-poppinsRegular rounded-md py-[5%] mb-[5%] px-[5%]">
      <h1 className="text-3xl self-start text-text-black mb-2 w-[70%]">
        Best Medicine Immunity Boosters Products.
      </h1>
      <h2 className="text-2xl self-start text-green3 mb-2">
        Save 25% On Every Order!
      </h2>
      <button className="text-3xl mt-[5%] w-[22%] flex justify-between rounded hover:scale-110 duration-200">
        <h1>SHOP NOW!</h1>
        <img className="h-[50%] w-auto self-center" src={arrow} alt="A" />
      </button>
    </div>
  );
};

export default ProductOffersSwiper;
