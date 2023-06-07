import React, { useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Loading } from '../common/Loading';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { SkeletonLoading } from '../common/SkeletonLoading';

const ProductsList = () => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search).get('query');
  const queryFilterCat = new URLSearchParams(location.search).get('id');
  const queryFilterBrand = new URLSearchParams(location.search).get('brand_id');
  const minQuery = new URLSearchParams(location.search).get('min');
  const maxQuery = new URLSearchParams(location.search).get('max');

  console.log(minQuery);
  let products, isLoading, error;
  if (querySearch) {
    [products = apiData, isLoading, error] = useFetch(
      `/api/products/search?name=${querySearch}`
    );
  } else if (queryFilterCat) {
    [products = apiData, isLoading, error] = useFetch(
      `/api/products/filter/category?id=${queryFilterCat}`
    );
  } else if (queryFilterBrand) {
    [products = apiData, isLoading, error] = useFetch(
      `/api/products/filter/brand?id=${queryFilterBrand}`
    );
  } else if (minQuery && maxQuery) {
    [products = apiData, isLoading, error] = useFetch(
      `/api/products/filter/price?max=${maxQuery}&min=${minQuery}`
    );
  } else {
    [products = apiData, isLoading, error] = useFetch('/api/products/all');
  }

  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 w-[105%] justify-items-center px-[1%] border-card-stroke">
      {isLoading || error || products?.length == 0 ? (
        <>
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </>
      ) : (
        products?.map((product) => {
          return <ProductCard product={product} />;
        })
      )}
      <ProductCard />
    </div>
  );
};

export default ProductsList;
