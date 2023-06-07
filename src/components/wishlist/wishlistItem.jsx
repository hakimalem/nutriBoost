import axios from 'axios';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

export const WishlistItem = ({ item, wishlist, setWishlist }) => {
  const { name, id, price, image, inStock } = item;
  const { auth, setAuth } = useAuth();

  console.log({ wishlist });
  const remove = () => {
    let updated = wishlist?.filter((w) => w.product._id !== item._id);
    setWishlist(updated);
  };

  const addToCart = () => {
    axios.post(
      '/api/users/cart/update',
      {
        product_id: item._id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
          'Content-Type': 'application/json',
        },
      }
    );
    toast.success(`${item?.name} added to cart successfully`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const removeFromWishlist = async () => {
    await axios
      .post(
        '/api/users/removeFromWishList',
        {
          product_id: item?._id,
        },
        {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        remove();
        toast.error(`${item?.name} deleted successfully`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div key={id} className="grid grid-cols-13 items-center py-3 border-b-2">
      <div className="col-span-4 flex items-center gap-5">
        <img className="w-20" src={item?.image} alt="" />
        <h2 className="text-l">{item?.name}</h2>
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
        <button
          onClick={addToCart}
          className="px-5 py-2 bg-primary text-white font-bold border-2 border-primary duration-200 hover:bg-white rounded-xl hover:text-primary"
        >
          Add to cart
        </button>
      </div>
      <div className="col-span-1">
        <button
          className="text-red-600  hover:bg-red-200 hover:text-red-700  p-2 text-xl duration-300 rounded-md "
          onClick={() => {
            removeFromWishlist();
          }}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};
