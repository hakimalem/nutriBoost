import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

export const QuantitySelector = ({ value, setValue }) => {
  const handleIncrement = () => {
    if (value < 10) setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) setValue(value - 1);
  };

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 0 && newValue <= 10 && !isNaN(newValue)) {
      setValue(parseInt(newValue));
    }
  };

  return (
    <div className="flex items-center w-[60%] h-[100%] ">
      <button
        type="button"
        onClick={handleDecrement}
        className=" px-[5%] py-[10%] rounded-r-none w-[33%] h-[100%] flex items-center justify-center border border-gray-blue rounded-sm text-text-gray2 active:bg-gray-200 focus:outline-none hover:bg-blueGray-100 "
      >
        <MinusIcon className="h-5 w-5" />
      </button>
      <input
        value={value}
        onChange={handleInputChange}
        className="rounded-l-none rounded-r-none w-[33%] h-[100%] text-center border border-gray-blue rounded-sm text-text-gray2 focus:outline-none "
        min={1}
        max={10}
      />
      <button
        type="button"
        onClick={handleIncrement}
        className=" px-[5%] py-[10%] rounded-r-none w-[33%] h-[100%] flex items-center justify-center border border-gray-blue rounded-sm text-text-gray2 active:bg-gray-200 focus:outline-none hover:bg-blueGray-100 "
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
