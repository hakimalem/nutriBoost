import React from "react";
import bcaa from "../../assets/png/bcaa.png"
import star from "../../assets/star.svg"
import cart from "../../assets/cart.svg"
import heartLike from "../../assets/heartLike.svg"
const ProductCard = () => {
    return (
        <div className=" space-y-[5%] bg-white border-[1px] border-card-stroke rounded-md h-[339px] w-[270px] flex flex-col justify-center items-center m-[1%] hover:shadow-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:-translate-y-[0.5%] hover:scale-100" >
            <div className="bg-gray-200 rounded-lg w-[80%] h-[50%] flex items-center justify-center relative">
                <img className="w-[60%]"
                    src={bcaa}
                    alt="P" />
                <button className="absolute top-0 right-0 bg-white p-3 m-1 rounded-full hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-[1%] hover:scale-10 active:bg-red-300">
                    <img className="w-[100%]"
                        src={heartLike}
                        alt="P" />
                </button>
            </div>
            <div className="flex justify-start items-start flex-col w-[80%]">
                <h1 className="body-font font-poppinsMedium text-base text-text-black">Nutrakey BCAA 400G</h1>
                <h2 className="body-font font-poppinsMedium text-sm text-text-gray">Gym protein</h2>
            </div>

            <div className="flex w-[80%] justify-between">
                <div className="flex flex-col w-[50%]">
                    <div className="flex space-x-[4%]">
                        <img className="w-[19%]"
                            src={star}
                            alt="S" />
                        <h1 className="body-font font-poppinsRegular text-base text-text-yellow">
                            4.5 Star
                        </h1>
                    </div>
                    <h1 className="body-font font-poppinsRegular text-sm text-text-gray">
                        2857 Rating
                    </h1>
                </div>
                <button className="bg-green2 w-[45%] rounded-md flex justify-center items-center space-x-[3%] hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-[1%] hover:scale-10 active:bg-green-100">
                    <img className="w-[20%]"
                        src={cart}
                        alt="P" />
                    <h1 className="text-primary text-sm font-poppinsMedium">
                        $389.35
                    </h1>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;