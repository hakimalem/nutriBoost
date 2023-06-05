import React from 'react';
import Brands from '../components/Products/Brands';
import Categories from '../components/Products/Categories';
import Price from '../components/Products/Price';
import ProductsList from '../components/Products/ProductsList';
import SortBy from '../components/Products/SortBy';
import ProductOffersSwiper from '../components/Products/ProductOffersSwiper';
import AlertMessage from '../components/Products/AlertMessage';
const ProductsPage = () => {
  return (
    <div className="flex py-10  justify-center text-text-black font-poppinsRegular">
      <div className="flex flex-col mt-[1%]">
        <div className="px-[5%] mb-[3%] flex flex-row">
          <h1 className="text-text-black">Home&nbsp;</h1>
          <h1 className="text-text-gray">&gt;&nbsp;</h1>
          <h1 className="text-green3">Products page</h1>
        </div>
        <Categories />
        <Brands />
        <Price />
      </div>
      <div className="flex ml-[2%] flex-col items-center">
        {/* <AlertMessage /> */}
        {/* <ProductOffersSwiper /> */}
        <div className="flex justify-between flex-row w-[105%]">
          <h1 className="text-3xl flex justify-start ml-[2%] items-center w-[100%]">
            Recommended Products
          </h1>
          <SortBy />
        </div>
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
