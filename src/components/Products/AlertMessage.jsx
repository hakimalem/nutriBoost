import React from "react";
import sale from "../../assets/sale.svg"

const AlertMessage = () => {

    return (
        <div className=" text-pink1 bg-pink1 bg-opacity-10 flex flex-row items-center font-poppinsRegular w-[100%]  h-[5%] mb-[1%] rounded-md max-w-7xl mx-auto py-6 sm:px-[3%] lg:px4 ">
            <img className="w-[3%] mx-[1%]"
                src={sale}
                alt="s" />
            <div className="flex flex-row">
                <h1 >
                    Referral your friend and get a 20% discount on first purchase&nbsp;
                </h1>
                <button className=" underline">
                    click here.
                </button>
            </div>

        </div>
    )
};

export default AlertMessage;