import React from "react";
import PriceSlider from "./PriceSlider";
const Price = () => {
    return (
        <div className="flex flex-col w-64 text-text-black font-poppinsRegular bg-card-gray rounded-md justify-center my-[5%] h-50">
            <div className="flex flex-row items-center mb-[2%] ">
                <h2 className=" text-2xl p-4 pr-2 font-poppinsRegular">Price</h2>
                <h3 className=" text-sm font-poppinsRegular text-text-gray">(dzd) </h3>
            </div>
            <PriceSlider />

        </div>
    );
};

export default Price;