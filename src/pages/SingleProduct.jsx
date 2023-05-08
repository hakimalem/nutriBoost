import React from 'react';
import AlertMessage from '../components/Products/AlertMessage';
import ProductPreview from '../components/singleProduct/ProductPreview';
import ProductProperties from '../components/singleProduct/ProductProperties';
import { ReviewPreview } from '../components/singleProduct/ReviewPreview';
import MoreDetails from '../components/singleProduct/MoreDetails';
// import ReviewPreview from '../components/singleProduct/ReviewPreview';
export const SingleProduct = () => {
  return (
    <div className="flex flex-col items-center text-text-black font-poppinsRegular">
      {/* HEADER */}
      <div className="flex flex-row w-[80%]  items-center justify-center">
        <div className="flex flex-row">
          <h1 className="text-text-black">Home&nbsp;</h1>
          <h1 className="text-text-gray">&gt;&nbsp;</h1>
          <h1 className="text-text-black">Products page</h1>
          <h1 className="text-text-gray">&gt;&nbsp;</h1>
          <h1 className="text-green3">Product Name</h1>
        </div>
        <AlertMessage />
      </div>
      {/* HEADER */}

      {/* PREVIEW PRODUCT */}

      <div className='flex flex-row w-[80%] justify-start py-[1%]'>
        <ProductPreview />
        <ProductProperties />
      </div>
      {/* PREVIEW PRODUCT */}

      <div className='flex flex-row w-[80%] justify-start items-start py-[1%]'>
        <ReviewPreview />
        <MoreDetails />
      </div>
    </div>
  );
};
