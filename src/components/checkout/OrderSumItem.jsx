import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
// import removeFromCart from '../cart/CartItem';

export const OrderSumItem = ({ item }) => {
  const { name, id, desc, price, Img, quantity = 1 } = item;

  return (
    <div
      key={id}
      className="flex items-center gap-3 justify-between py-3 border-b-2"
    >
      <div>{Img && <img className="w-20" src={Img[0]} alt="" />}</div>
      <div className="flex flex-col items-start">
        <h2 className="text-lg w-40">{name}</h2>
        <p className="text-sm mb- w-40 text-gray-500 ">{desc}</p>
        <div className="text-primary">${price * quantity}</div>
      </div>
      <div className="">
        <button
          // onClick={() => {
          //   removeFromCart();
          // }}
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
