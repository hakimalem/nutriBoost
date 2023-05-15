import React from 'react';
import { Link } from 'react-router-dom';
import { cartItems } from '../../data/data';
import { CartItem } from '../cart/CartItem';
import { OrderSumItem } from './OrderSumItem';

export const OrderSummary = () => {
  let total = 0;
  cartItems.map((item) => (total += item.quantity || 1 * item.price));
  const tax = 0;
  const shipping = 5.99;
  return (
    <div className="bg-card-gray px-4 pb-4">
      <div className="flex px-3 py-4 items-center justify-between border-b-2">
        <p className="text-2xl">Order summary</p>
        <Link to="/cart" className="text-primary hover:underline duration-200">
          Edit cart
        </Link>
      </div>
      {cartItems && cartItems.map((item) => <OrderSumItem item={item} />)}
      <div className="flex flex-col gap-3 mt-4 text-text-gray2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{total}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="coupon">Coupon/Gift Certificate</label>
          <div className="flex justify-between">
            <input
              className="outline-none w-52"
              id="coupon"
              name="coupon"
              type="text"
            />
            <button className="text-[#F8A300] bg-[#F8A300] bg-opacity-[0.08] p-3 hover:scale-110 duration-150 ">
              Apply
            </button>
          </div>
          <div className="bg-green2 py-3 px-10 font-bold mt-4">
            Total Amount: <span className="text-primary">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
