import { Rating } from "@mui/material";
import React from "react";
import sale from "../../assets/sale.svg";
import xMark from "../../assets/xMark.svg";
import checkMark from "../../assets/checkMark.svg"
import { QuantitySelector } from "./QuantitySelector";
import SelectProperty from "./SelectProperty";
import AddToCartButton from "./AddToCartButton";
import AddToFavorites from "./AddToFavorites";
import ShareButton from "./ShareButton";

const ProductProperties = () => {
    return (
        <div className=" w-[50%] h-[70%] border-card-stroke flex flex-col justify-between p-[1%] ml-[1px] items-start" >

            {/* FIRST PART */}
            <h1 className="text-poppinsMedium text-text-black text-2xl mb-[1%]">Nutrakey BCAA 400G Unflavored.</h1>
            <h2 className="text-poppinsLight text-text-gray text-lg mb-[2%]">Mfr: NutraKey Health & Performance INC.</h2>
            <div className="flex text-xl justify-between w-[50%] font-poppinsLight mb-[2%]">
                <Rating name="read-only"
                    // value={value}
                    readOnly
                    defaultValue={2}
                />
                <div className="flex w-[60%] ml-[12%] justify-between">
                    <h1 className="text-text-yellow">
                        2.0 Star
                    </h1>
                    <h1 className="text-text-gray">
                        2857 Rating
                    </h1>
                </div>
            </div>
            {/* IS AVAILABLE */}
            <div className="flex w-[40%] mb-[1%]">
                <img className="w-[5%] mr-[3%]"
                    src={xMark}
                    alt="s" />
                <h1 className=" text-red-alert text-lg font-poppinsLight">
                    Not available in stock
                </h1>
            </div>
            {/* PRODUCT ID */}
            <h1 className="text-text-gray text-lg mb-[5%]">
                Product ID: 231548652
            </h1>
            {/* PRICE */}
            <div className="flex justify-start items-end">

                <h1 className="text-primary text-4xl">
                    $120.22&nbsp;
                </h1>
                {/* THIS IS ONLY FOR THE OFFERS */}
                <h2 className="text-text-gray text-lg line-through mb-[1%]">
                    $389.35
                </h2>
            </div>
            {/* FIRST PART */}
            <hr class="w-[100%] h-[100%] mx-auto border-3 rounded my-[2%]"></hr>

            {/* SECOND PART */}
            <div>
                <h1 className=" font-normal text-text-gray w-[90%] mb-[5%]">
                    We provide a wide variety of family medicine services including hospital care. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 😍
                </h1>

                {/* QTT PROPRETY */}
                <div className="flex justify-between w-[70%] mb-[4%] text-text-gray">
                    <div className="flex flex-col items-start w-[60%]">
                        <h1>Quantity</h1>
                        <QuantitySelector />
                    </div>
                    <div className="flex flex-col items-start w-[50%]">
                        <h1>Property</h1>
                        {/* (added by the admin) */}
                        <SelectProperty />
                    </div>
                </div>
                {/* BUTTONS */}
                <div className="flex items-center w-[35%] justify-between mb-[4%]">
                    <AddToCartButton />
                    <AddToFavorites />
                    <ShareButton />
                </div>
            </div>
            {/* SECOND PART */}
        </div >
    );
};

export default ProductProperties;