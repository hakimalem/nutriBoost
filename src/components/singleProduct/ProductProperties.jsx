import { Rating } from '@mui/material';
import React, { useState } from 'react';
import sale from '../../assets/sale.svg';
import xMark from '../../assets/xMark.svg';
import checkMark from '../../assets/checkMark.svg';
import { QuantitySelector } from './QuantitySelector';
import SelectProperty from './SelectProperty';
import AddToCartButton from './AddToCartButton';
import AddToFavorites from './AddToFavorites';
import ShareButton from './ShareButton';

const ProductProperties = ({ product }) => {
  const [value, setValue] = useState(1);

  return (
    <div className=" w-[50%] h-[70%] border-card-stroke flex flex-col justify-between p-[1%] ml-[1px] items-start">
      {/* FIRST PART */}
      <h1 className="text-poppinsMedium text-text-black text-2xl mb-[1%]">
        {product?.name}{' '}
      </h1>
      <h2 className="text-poppinsLight text-text-gray text-lg mb-[2%]">
        {product?.discription}{' '}
      </h2>
      <div className="flex text-xl justify-between w-[50%] font-poppinsLight mb-[2%]">
        <Rating name="read-only" value={+product?.rating} readOnly />
        <div className="flex w-[60%] ml-[12%] justify-between">
          <h1 className="text-text-yellow">{product?.rating} Star</h1>
          <h1 className="text-text-gray">
            {product?.reviews.length + 1} Ratings
          </h1>
        </div>
      </div>
      {/* IS AVAILABLE */}
      {product?.quantity == 0 ? (
        <div className="flex w-[40%] mb-[1%]">
          <img className="w-[5%] mr-[3%]" src={xMark} alt="s" />
          <h1 className=" text-red-alert text-lg font-poppinsLight">
            Not available in stock
          </h1>
        </div>
      ) : (
        <p className="bg-primary border-none text-white px-3 py-1 rounded-md">
          Quantity : {product?.quantity}
        </p>
      )}
      {/* PRODUCT ID */}
      <h1 className="text-text-gray text-lg mb-[5%]">
        Product ID: {product?._id}
      </h1>
      {/* PRICE */}
      <div className="flex justify-start items-end">
        <h1 className="text-primary text-4xl">${product?.price}&nbsp;</h1>
        {/* THIS IS ONLY FOR THE OFFERS */}
        <h2 className="text-text-gray text-lg line-through mb-[1%]">$389.35</h2>
      </div>
      {/* FIRST PART */}
      <hr class="w-[100%] h-[100%] mx-auto border-3 rounded my-[2%]"></hr>

      {/* SECOND PART */}
      <div>
        <h1 className=" font-normal text-text-gray w-[90%] mb-[5%]">
          We provide a wide variety of family medicine services including
          hospital care. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled 😍
        </h1>

        {/* QTT PROPRETY */}
        <div className="flex justify-between w-[70%] mb-[4%] text-text-gray">
          <div className="flex flex-col items-start w-[60%]">
            <h1>Quantity</h1>
            <QuantitySelector value={value} setValue={setValue} />
          </div>
          <div className="flex flex-col items-start w-[50%]">
            <h1>Property</h1>
            {/* (added by the admin) */}
            <SelectProperty />
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex items-center gap-3 mb-[4%]">
          <AddToCartButton
            product={product}
            quantity={value}
            quantityInStock={product?.quantity}
          />
          <AddToFavorites />
          <ShareButton />
        </div>
      </div>
      {/* SECOND PART */}
    </div>
  );
};

export default ProductProperties;
