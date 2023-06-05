import React from 'react';
import { wishlistItems } from '../data/data';
import { WishlistItem } from '../components/wishlist/wishlistItem';
import { AiFillPrinter, AiOutlineDelete } from 'react-icons/ai';
export const Wishlist = () => {
  return (
    <div className="px-28 py-20 min-h-screen">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Wishlist (10 products)</h1>
          <button className="flex items-center gap-1 text-lg hover:scale-105 duration-150">
            <AiOutlineDelete /> Remove All
          </button>
        </div>
        <div className="flex justify-between my-5">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 text-lg hover:scale-105 duration-150"
          >
            {' '}
            <AiFillPrinter /> Print Page
          </button>
          <button className="h-full  bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Add All To Cart
          </button>
        </div>
        <div className="grid grid-cols-13 items-center uppercase py-3 border-b-2">
          <h3 className="col-span-4">Product</h3>
          <h3 className="col-span-3">Availability</h3>
          <h3 className="col-span-2">Price</h3>
          <h3 className="col-span-3"></h3>
          <h3 className="col-span-1"></h3>
        </div>
        <div>
          {wishlistItems &&
            wishlistItems.map((item) => <WishlistItem item={item} />)}
        </div>
      </div>
    </div>
  );
};
