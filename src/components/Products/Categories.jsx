import React from "react";
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div className="flex flex-col bg-gray-100 w-64 text-text-black font-poppinsRegular bg-card-gray rounded-md">
            <h2 className="font-bold text-lg p-4 font-poppinsMedium ">Categories</h2>
            <ul className="p-4">
                <li className="my-2">
                    {/* <Link to="/covid-19-preventatives" className="text-gray-700 hover:text-blue-500"> */}
                    Covid-19 Preventatives
                    {/* </Link> */}
                </li>
                <li className="my-2">
                    {/* <Link to="/personal-hygiene" className="text-gray-700 hover:text-blue-500"> */}
                    Personal Hygiene
                    {/* </Link> */}
                </li>
                <li className="my-2">
                    {/* <Link to="/immunity-boosters" className="text-gray-700 hover:text-blue-500"> */}
                    Immunity Boosters
                    {/* </Link> */}
                </li>
                <li className="my-2">
                    {/* <Link to="/food-nutrition" className="text-gray-700 hover:text-blue-500"> */}
                    Food & Nutrition
                    {/* </Link> */}
                </li>
                <li className="my-2">
                    {/* <Link to="/personal-care" className="text-gray-700 hover:text-blue-500"> */}
                    Personal Care
                    {/* </Link> */}
                </li>
                <li className="my-2">
                    {/* <Link to="/diabetic-care" className="text-gray-700 hover:text-blue-500"> */}
                    Diabetic Care
                    {/* </Link> */}
                </li>

            </ul>
        </div>
    );
};

export default Categories;