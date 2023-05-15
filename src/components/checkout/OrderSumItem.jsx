import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

export const OrderSumItem = ({ item }) => {
  const { name, id, desc, price, image, quantity = 1 } = item;

  return (
    <div
      key={id}
      className="flex items-center gap-3 justify-between py-3 border-b-2"
    >
      <div>
        <img className="w-20" src={image} alt="" />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-lg">{name}</h2>
        <p className="text-sm mb- w-40 text-gray-500 ">{desc}</p>
        <div className="text-primary">${price * quantity}</div>
      </div>
      <div className="">
        <button
          className="text-red-600  hover:bg-red-200 hover:text-red-700  p-2 text-xl duration-300 rounded-md "
          //   onClick={() => {
          //     dispatch(removeFromCart(item));
          //   }}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};
