import React from 'react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-16 items-center mt-16 h-screen">
      <h1 className="text-5xl ">Shopping cart</h1>
      <div className="flex flex-col gap-3 text-gray-600 items-center">
        <h2 className="text-xl">Your cart is currently empty</h2>
        <Link
          to="/"
          className="flex items-center gap-3 hover:scale-110 hover:underline duration-200"
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
          <span>Start shopping</span>
        </Link>
      </div>
    </div>
  );
};
