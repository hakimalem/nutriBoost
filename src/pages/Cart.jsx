import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartItems } from '../data/data';
import { EmptyCart } from '../components/cart/EmptyCart';
import { CartItem } from '../components/cart/CartItem';
import { Coupon } from '../components/cart/Coupon';
import AlertMessage from '../components/Products/AlertMessage';
import { useFetch } from '../hooks/useFetch';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../components/common/Loading';

export const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [error, setError] = useState(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdhMzNkN2MyZjRlN2Y5NzBhYWJkNzkiLCJpYXQiOjE2ODU4OTc3MTAsImV4cCI6MTY5MzY3MzcxMH0.2Tzkw3cEQzyvEI4S6Tpwf4sf1AY28OUJUZo0ABQTETY';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios('/api/users/cart/displayCart', {
          headers: {
            Authorization: 'Bearer ' + token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        });
        setCart(data.cart);
        console.log(data.cart);
        setTotalPrice(data.totalPrice);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-28 py-6 min-h-screen">
      {cart?.message === 'Cart is empty' ? (
        <EmptyCart />
      ) : (
        <div>
          <h1 className="text-3xl mb-10">Shopping cart</h1>

          <div className="grid grid-cols-13 items-center uppercase py-3 border-b-2">
            <h3 className="col-span-6 ">Product</h3>
            <h3 className="col-span-2 ">Price</h3>
            <h3 className="col-span-3 ">Quantity</h3>
            <h3 className="col-span-1 ">Total</h3>
            <h3 className="col-span-1">Remove</h3>
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt"
                role="alert"
              >
                <strong class="font-bold">Holy smokes!</strong>
                <span class="block sm:inline">
                  Something seriously bad happened.
                </span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            ) : (
              cart &&
              cart.map((item) => (
                <CartItem setCart={setCart} cart={cart} item={item} />
              ))
            )}
          </div>

          <div className="mt-10 flex justify-between">
            <Coupon />
            <div className="bg-green2 py-3 px-10 font-bold">
              Total Amount: <span className="text-primary">${totalPrice}</span>
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
