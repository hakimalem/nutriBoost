import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

export const CartItem = ({ item }) => {
  const { name, id, desc, price, image, quantity = 1 } = item;

  return (
    <div key={id} className="grid grid-cols-13 items-center py-3 border-b-2">
      <div className="col-span-6 flex gap-5">
        <img className="w-28" src={image} alt="" />
        <div className="flex flex-col items-start">
          <h2 className="text-lg">{name}</h2>
          <p className="text-sm mb-5 font- text-gray-500 ">{desc}</p>
        </div>
      </div>
      <div className="col-span-2 text-primary">${price}</div>
      <div className="col-span-3 flex items-center gap-6 border w-fit">
        <button
          className="px-4 py-2 border-r hover:bg-primary hover:text-white text-xl duration-200"
          // onClick={() => {
          //   dispatch(increaseQuantity(item));
          // }}
        >
          +
        </button>
        <p>{quantity}</p>
        <button
          className="px-4 py-2 border-l hover:bg-primary hover:text-white text-xl duration-200 "
          // onClick={() => {
          //   decreaseHandler(item);
          // }}
        >
          -
        </button>
      </div>
      <div className="col-span-1 text-primary">${quantity * price}</div>
      <div className="col-span-1">
        <button
          className="text-red-600 bg-red-100 hover:bg-red-400 hover:text-red-700 px-3 py-2 text-xl duration-300 rounded-md "
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
