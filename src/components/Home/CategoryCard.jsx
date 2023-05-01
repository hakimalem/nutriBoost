import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
  const { name, image, promotion } = category;
  return (
    <div
      className={`bg-[#FFF2D8] mx-auto w-72 h-44 px-5 py-4 mb-10 rounded-lg  flex flex-col justify-between`}
    >
      <div className="flex justify-between">
        <h2 className="text-xl w-7 h-3">{name}</h2>
        <p className="bg-main text-white p-1">{promotion}</p>
      </div>
      <div className="flex justify-between items-end">
        <Link
          to="#"
          className="flex items-center gap-1 hover:scale-110 duration-200 hover:underline p-2"
        >
          <p>Buy now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
        <img className="lg:w-32 w-28" src={image} />
      </div>
    </div>
  );
};
