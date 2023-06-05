import axios from 'axios';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartItem = ({ item, setCart, cart }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdhMzNkN2MyZjRlN2Y5NzBhYWJkNzkiLCJpYXQiOjE2ODU4OTc3MTAsImV4cCI6MTY5MzY3MzcxMH0.2Tzkw3cEQzyvEI4S6Tpwf4sf1AY28OUJUZo0ABQTETY';

  console.log({ cart });
  const increaseQuantity = async () => {
    await axios
      .post(
        '/api/users/cart/update',
        {
          product_id: item?.product_id,
          quantity: item?.quantity + 1,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem?.product_id === item.product_id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else return cartItem;
        });
        setCart(updatedCart);
        toast.info(`${item?.name} quantity increased successfully`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const decreaseQuantity = async () => {
    await axios
      .post(
        '/api/users/cart/update',
        {
          product_id: item?.product_id,
          quantity: item?.quantity - 1,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        if (item.quantity === 1) {
          removeFromCart();
        } else {
          const updatedCart = cart.map((cartItem) => {
            if (cartItem?.product_id === item.product_id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else return cartItem;
          });
          setCart(updatedCart);
          toast.error(`${item?.name} decreased successfully`, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeFromCart = async () => {
    await axios
      .post(
        '/api/users/cart/update',
        {
          product_id: item?.product_id,
          quantity: 0,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        const updatedCart = cart.filter(
          (cartItem) => cartItem.product_id !== item.product_id
        );
        setCart(updatedCart);
        toast.error(`${item?.name} deleted successfully`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(item);

  return (
    <div
      key={item?.product_id}
      className="grid grid-cols-13 items-center py-3 border-b-2"
    >
      <div className="col-span-6 flex gap-5">
        {item?.Img && <img className="w-28" src={item.Img[0]} alt="" />}
        <div className="flex flex-col items-start">
          <h2 className="text-lg">{item?.name}</h2>
          {/* <p className="text-sm mb-5 font- text-gray-500 ">{desc}</p> */}
        </div>
      </div>
      <div className="col-span-2 text-primary">${item?.price}</div>
      <div className="col-span-3 flex items-center gap-6 border w-fit">
        <button
          className="px-4 py-2 border-r hover:bg-primary hover:text-white text-xl duration-200"
          onClick={() => {
            increaseQuantity();
          }}
        >
          +
        </button>
        <p>{item?.quantity}</p>
        <button
          className="px-4 py-2 border-l hover:bg-primary hover:text-white text-xl duration-200 "
          onClick={() => {
            decreaseQuantity();
          }}
        >
          -
        </button>
      </div>
      <div className="col-span-1 text-primary">
        ${item?.quantity * item?.price}
      </div>
      <div className="col-span-1">
        <button
          className="text-red-600  hover:bg-red-200 hover:text-red-700  p-2 text-xl duration-300 rounded-md "
          onClick={() => {
            removeFromCart();
          }}
        >
          <RiDeleteBinLine />
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};
