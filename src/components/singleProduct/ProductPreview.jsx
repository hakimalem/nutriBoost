import React from "react";
import bcaa from "../../assets/png/bcaa.png"
import star from "../../assets/star.svg"
import cart from "../../assets/cart.svg"
import heartLike from "../../assets/heartLike.svg"
import expand from "../../assets/expand.svg"
const ProductPreview = () => {
    return (
        <div className="bg-white border-[1px] border-card-stroke rounded-md h-[70%] w-[35%] flex flex-col justify-between p-[1%] items-center mr-[1%]" >
            {/* Preview image */}
            <div className="bg-green2 rounded-lg w-[100%] h-[70%] flex items-center justify-center relative mb-[2%] ">
                <img className="w-[60%]"
                    src={bcaa}
                    alt="P" />
                <button className="absolute top-0 right-0 bg-white p-3 m-[2%] rounded-lg hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-[1%] hover:scale-10 active:bg-blue-300 flex justify-center items-center">
                    <img className="w-[90%]"
                        src={expand}
                        alt="P" />
                </button>
            </div>
            {/* Preview image */}
            {/* product images  */}
            <div className="w-[100%] flex justify-between">
                {/* 1 */}
                <button className="bg-white border-[1px] border-card-stroke rounded-md w-[100%] h-[80%] p-[1%] flex flex-col justify-start items-center m-[1%] hover:shadow-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:-translate-y-[0.5%] hover:scale-100 active:border-text-black" >
                    <div className="bg-green2 rounded-lg w-[100%] h-[100%] flex items-center justify-center relative">
                        <img className="w-[60%]"
                            src={bcaa}
                            alt="P" />
                    </div>
                </button>
                {/* 2 */}
                <button className="bg-white border-[1px] border-card-stroke rounded-md w-[100%] h-[80%] p-[1%] flex flex-col justify-start items-center m-[1%] hover:shadow-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:-translate-y-[0.5%] hover:scale-100 active:border-text-black" >
                    <div className="bg-green2 rounded-lg w-[100%] h-[100%] flex items-center justify-center relative">
                        <img className="w-[60%]"
                            src={bcaa}
                            alt="P" />
                    </div>
                </button>
                {/* 3 */}
                <button className="bg-white border-[1px] border-card-stroke rounded-md w-[100%] h-[80%] p-[1%] flex flex-col justify-start items-center m-[1%] hover:shadow-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:-translate-y-[0.5%] hover:scale-100 active:border-text-black" >
                    <div className="bg-green2 rounded-lg w-[100%] h-[100%] flex items-center justify-center relative">
                        <img className="w-[60%]"
                            src={bcaa}
                            alt="P" />
                    </div>
                </button>
            </div>

            {/* product images  */}

        </div>
    );
};

export default ProductPreview;