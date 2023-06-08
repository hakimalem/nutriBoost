import React from 'react';

export const Button = ({ type, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${
        disabled
          ? 'text-text-gray bg-card-gray'
          : 'bg-main text-white hover:bg-white hover:text-main hover:border-main'
      }  border border-gray-400 px-5 py-2 rounded-lg  duration-300`}
    >
      {children}
    </button>
  );
};
export const ButtonLight = ({ type, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-main-200  text-main border border-gray-400 px-5 py-2 rounded-lg"
    >
      {children}
    </button>
  );
};
