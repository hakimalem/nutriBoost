import axios from 'axios';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

function AddToCartButton({ product, quantity }) {
  const { auth } = useAuth();

  const addToCart = () => {
    axios.post(
      '/api/users/cart/update',
      {
        product_id: product?._id,
        quantity,
      },
      {
        headers: {
          Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
          'Content-Type': 'application/json',
        },
      }
    );
    toast.success(`${product?.name} added to cart successfully`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <button
      onClick={addToCart}
      className="h-full bg-primary hover:bg-green-300 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
