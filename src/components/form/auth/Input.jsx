import React, { forwardRef } from 'react';

export const Input = forwardRef(function Input(props, ref) {
  const { label, ...otherProps } = props;

  return (
    <input
      {...otherProps}
      ref={ref}
      className="outline-main border border-grey px-5 py-2 rounded-lg w-full"
    />
  );
});

export const Element = ({ placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <Input placeholder={placeholder} id={name} />
    </div>
  );
};

/*

{
  placeholder,
  id,
  value,
  onChange,
  onBlur,
  onFocus,
  type,
}

*/
