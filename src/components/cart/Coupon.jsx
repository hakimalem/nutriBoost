import React from 'react';

export const Coupon = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-start">
        {/* <label htmlFor="coupon" className="text-sm text-text-gray ">
          Enter coupon code
        </label> */}
        <input
          type="text"
          className="outline-none bg-card-gray p-3 text-lg"
          placeholder='Enter coupon code'
        />
      </div>
      <div className=''>
        <button className="text-[#F8A300] bg-[#F8A300] bg-opacity-[0.08] p-3 hover:scale-110 duration-150">Apply coupon</button>
      </div>
    </div>
  );
};
