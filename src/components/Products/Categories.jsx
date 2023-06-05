import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
const Categories = () => {
  const [categories = apiData, isLoading, error] = useFetch(
    '/api/categories/all'
  );
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  w-64 text-text-gray2  font-poppinsRegular bg-card-gray rounded-md my-[5%]">
      <h2 className="text-2xl p-4 font-poppinsRegular text-text-black">
        Categories
      </h2>

      <ul className="p-4">
        {categories?.map(({ name, _id }) => (
          <li
            className={`${
              id === _id ? 'text-primary underline' : ''
            } my-2 cursor-pointer`}
            onClick={() => {
              setId(_id);
              navigate(`/products/category?id=${_id}`);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
