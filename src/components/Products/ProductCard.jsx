import React from 'react';
import bcaa from '../../assets/png/bcaa.png';
import star from '../../assets/star.svg';
import cart from '../../assets/cart.svg';
import heartLike from '../../assets/heartLike.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const ProductCard = ({ product }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZhYTI5NTM1YjJhMDA0MjFmYTEyNTgiLCJpYXQiOjE2ODQ3MTAzNDUsImV4cCI6MTY5MjQ4NjM0NX0.pd88_1MriegCLeRh0-JB8OXRqYVciPvtscQ5K4rHe-Q';

  const navigate = useNavigate();
  const addToCart = () => {
    axios.post(
      '/api/users/cart/update',
      {
        product_id: product._id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
          'Content-Type': 'application/json',
        },
      }
    );
    toast.success(`${product?.name} added to cart successfully`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  return (
    product && (
      <div
        onClick={() => {
          navigate(`/products/${product._id}`);
        }}
        className=" space-y-[5%] cursor-pointer bg-white border-[1px] border-card-stroke rounded-md h-[339px] w-[270px] flex flex-col justify-center items-center m-[1%] hover:shadow-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:-translate-y-[0.5%] hover:scale-100"
      >
        <div className="bg-gray-200 rounded-lg w-[80%] h-[50%] flex items-center justify-center relative">
          <img className="w-[60%]" src={product?.image} alt="P" />
          <button
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="absolute top-0 right-0 bg-white p-3 m-1 rounded-full hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-[1%] hover:scale-10 active:bg-red-300"
          >
            <img className="w-[100%]" src={heartLike} alt="P" />
          </button>
        </div>
        <div className="flex justify-start items-start flex-col w-[80%]">
          <h1 className="body-font font-poppinsMedium text-base text-text-black">
            {product?.name}
          </h1>
        </div>

        <div className="flex w-[80%] justify-between">
          <div className="flex flex-col w-[50%]">
            <div className="flex space-x-[4%]">
              <img className="w-[19%]" src={star} alt="S" />
              <h1 className="body-font font-poppinsRegular text-base text-text-yellow">
                4.5 Star
              </h1>
            </div>
            <h1 className="body-font font-poppinsRegular text-sm text-text-gray">
              2857 Rating
            </h1>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              addToCart();
            }}
            className="bg-green2 w-[45 rounded-md flex justify-center items-center space-x-[3%] hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-[1%] hover:scale-10 active:bg-green-100"
          >
            <img className="w-[20%]" src={cart} alt="P" />
            <h1 className="text-primary text-sm font-poppinsMedium">
              ${product?.price}
            </h1>
          </button>
        </div>
      </div>
    )
  );
};

export default ProductCard;
