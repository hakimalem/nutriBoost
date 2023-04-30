import React from "react";
import { Link } from 'react-router-dom';
import BrandElement from "./brandElement";

const Categories = () => {
    return (
        <div className="flex flex-col w-64 text-text-black font-poppinsRegular bg-card-gray rounded-md justify-center my-[5%]">
            <h2 className="text-2xl p-4 font-poppinsRegular ">Brands</h2>
            <input type="text" placeholder="Search brand here..." in className=" bg-transparent self-center flex w-[88%] h-[20%] text-sm font-poppinsRegular focus:outline-none text-text-gray2" />

            <ul className="p-4">
                <li >
                    {/* change state to display that category */}
                    <BrandElement />
                </li>
                <li>
                    {/* change state to display that category */}
                    <BrandElement />
                </li>
                <li>
                    {/* change state to display that category */}
                    <BrandElement />
                </li>
                <li>
                    {/* change state to display that category */}
                    <BrandElement />
                </li>
            </ul>
        </div>
    );
};

export default Categories;