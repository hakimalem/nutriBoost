import React from 'react';
import CustomSwiper from '../common/CustomSwiper';
import ProductCard from '../Products/ProductCard';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { offers2 } from '../../data/data';
import { Link } from 'react-router-dom';

export const Offers2 = () => {
  return (
    <div className=" lg:px-52 md:px-20 px-10">
      <CustomSwiper
        id="sw5"
        title="Offers for you"
        slidesNumber={[2, 2, 1]}
        delay={4500}
      >
        {offers2.map(({ title, desc, image }, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex bg-[#DDF2FF] justify-between px-14 py-5 items-center rounded-md`}
            >
              <div className="flex flex-col items-start gap-3 justify-between">
                <h1 className="text-4xl font-bold ">{title}</h1>
                <h2 className="text-xl">{desc}</h2>
                <Link
                  to="#"
                  className="flex items-center gap-1 hover:scale-110 duration-200 hover:underline p-2 mt-10"
                >
                  <p className="text-xl">Shop now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>{' '}
              </div>
              <img className="w-40" src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};
