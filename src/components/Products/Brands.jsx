import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandElement from './BrandElement';
import { useFetch } from '../../hooks/useFetch';

const Categories = () => {
  const [brands = apiData, error, isLoading] = useFetch('/api/brands/all');
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-64 text-text-black font-poppinsRegular bg-card-gray rounded-md justify-center my-[5%]">
      <h2 className="text-2xl p-4 font-poppinsRegular ">Brands</h2>

      <ul className="p-4">
        {brands?.map(({ name, _id }) => (
          <li
            className={`${
              id === _id ? 'text-primary underline' : ''
            } my-2 cursor-pointer`}
            onClick={() => {
              setId(_id);
              navigate(`/products/brand?brand_id=${_id}`);
            }}
          >
            {name}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Categories;
