import React from 'react';

export const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="bg-main text-white border border-gray-400 px-5 py-2 rounded-lg hover:bg-white hover:text-main hover:border-main duration-300"
    >
      {children}
    </button>
  );
};
export const ButtonLight = ({ type, children }) => {
  return (
    <button
      type={type}
      className="bg-main-200  text-main border border-gray-400 px-5 py-2 rounded-lg"
    >
      {children}
    </button>
  );
};
