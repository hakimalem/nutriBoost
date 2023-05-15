import React from 'react';
import { Link } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex items-center justify-center">
        <FaSadTear className="text-4xl text-gray-600 mr-2" />
        <h1 className="text-4xl text-gray-600 font-bold">404 Not Found</h1>
      </div>
      <p className="text-gray-600 mt-4">
        Oops! The page you are looking for could not be found.
      </p>
      <Link
        to="/"
        className="mt-4 bg-primary border duration-200 hover:bg-green2 hover:text-primary  border-primary text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
};
