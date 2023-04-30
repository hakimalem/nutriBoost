import React from 'react';
import imag from '../../assets/images/homeImage.png';
import { Link } from 'react-router-dom';

export const MainSection = () => {
  return (
    <div className="bg-main h-[400px] flex justify-between lg:px-52 items-center">
      <div className="text-white">
        <div>
          <h1 className="text-6xl font-extrabold mb-2">Get your Fitness</h1>
          <h2 className="text-4xl font-bold">supplements and more</h2>
          <p className="text-lg">
            For the best prices, in one click and delivered to your doorstep
          </p>
        </div>
        <Link to="/products">
          <button className="bg-white text-main px-4 py-3 rounded translate-x-12 translate-y-5 hover:scale-110 duration-200 hover:shadow-xl">
            Shop Now!
          </button>
        </Link>
      </div>

      <img className="h-full" src={imag} alt="" />
    </div>
  );
};
