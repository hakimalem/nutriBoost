import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

export const WishlistItem = ({ item }) => {
  const { name, id, price, image, inStock } = item;

  return (
    <div key={id} className="grid grid-cols-13 items-center py-3 border-b-2">
      <div className="col-span-4 flex items-center gap-5">
        <img className="w-20" src={image} alt="" />
        <h2 className="text-xl">{name}</h2>
      </div>
      <div className="col-span-3 flex items-center gap-6  w-fit">
        {inStock ? (
          <p className="bg-primary border-none text-white px-3 py- rounded-md">
            In stock
          </p>
        ) : (
          <p className="bg-red-700 border-none text-white px-3 py- rounded-md">
            Not Available
          </p>
        )}
      </div>
      <div className="col-span-2 text-primary">${price}</div>
      <div className="col-span-3">
        <button className="px-5 py-2 bg-primary text-white font-bold border-2 border-primary duration-200 hover:bg-white rounded-xl hover:text-primary">
          Add to cart
        </button>
      </div>
      <div className="col-span-1">
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
