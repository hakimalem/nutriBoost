import React from 'react';

import { testimonials } from '../../data/data';
import CustomSwiper from '../common/CustomSwiper';
import { SwiperSlide } from 'swiper/react';

export const Testimonials = () => {
  return (
    <div className=" lg:px-52 md:px-20 px-10 bg-[rgba(255,7,0,0.08)]">
      <CustomSwiper
        title="What our customers have to say"
        id="sw4"
        slidesNumber={[2, 2, 2]}
        delay={3100}
      >
        {testimonials.map(({ name, profession, text, image }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-3 py-3 px-2 bg-white px-3 py-2 rounded-md">
              <div className="text-text-gray">{text}</div>
              <div className="flex justify-between items-end">
                <div className="flex gap-3 items-center">
                  <img src={image} alt="" />
                  <div className="flex flex-col gap-2">
                    <p>{name}</p>
                    <p className="text-text-gray text-sm">{profession}</p>
                  </div>
                </div>
                <div className="text-[#ff0700] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};
