import React from 'react';

export const Input = ({ placeholder, id, value, onChange }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="outline-main border border-grey px-5 py-2 rounded-lg w-full"
    />
  );
};

export const Element = ({ placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <Input placeholder={placeholder} id={name} />
    </div>
  );
};
