import React from 'react';
import { Link } from 'react-router-dom';
import { cartItems } from '../data/data';
import { EmptyCart } from '../components/cart/EmptyCart';
import { CartItem } from '../components/cart/CartItem';
import { Coupon } from '../components/cart/Coupon';
import AlertMessage from '../components/Products/AlertMessage';

export const Cart = () => {
  let total = 0;
  cartItems.map((item) => (total += item.quantity || 1 * item.price));
  return (
    <div className="px-28 py-6 min-h-screen">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <h1 className="text-3xl mb-10">Shopping cart</h1>
          {/* <div className="flex justify-between">  const decreaseHandler = (item) => {
    item.quantity >= 2
      ? dispatch(decreaseQuantity(item))
      : dispatch(removeFromCart(item));
  }; 
            <div>s </div>
            <AlertMessage />
          </div> */}
          <div className="grid grid-cols-13 items-center uppercase py-3 border-b-2">
            <h3 className="col-span-6 ">Product</h3>
            <h3 className="col-span-2 ">Price</h3>
            <h3 className="col-span-3 ">Quantity</h3>
            <h3 className="col-span-1 ">Total</h3>
            <h3 className="col-span-1">Remove</h3>
          </div>
          <div>
            {cartItems && cartItems.map((item) => <CartItem item={item} />)}
          </div>
          {/* <div className="flex justify-between mt-8">
            <div>
              <button
                // onClick={() => {
                //   dispatch(clearCart());
                // }}
                className="text-gray-500 border-gray-500 px-6 py-2 rounded-lg border"
              >
                Clear cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-2xl">
                <p>Subtotal</p>
                <p className="font-bold">{total}</p>
              </div>
              <div className="text-gray-500">
                Taxes and shipping calculated at checkout
              </div>
              <button className="text-white bg-blue-600 py-2 rounded-lg">
                Checkout
              </button>
              <Link
                to="/"
                className="flex items-center gap-3 hover:underline duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Continue shopping</span>
              </Link>
            </div>
          </div> */}
          <div className="mt-10 flex justify-between">
            <Coupon />
            <div className="bg-green2 py-3 px-10 font-bold">
              Total Amount: <span className="text-primary">${total}</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between ">
            <Link
              to="/"
              className="flex items-center gap-3 hover:underline duration-200 hover:text-primary hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Continue shopping</span>
            </Link>
            <Link
              to="/checkout"
              className="px-5 py-3 bg-primary text-white font-bold border-2 border-primary duration-200 hover:bg-white hover:text-primary"
            >
              Checkout now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
