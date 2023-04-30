import React from "react";
// import { Checkbox } from "@material-tailwind/react";
import Checkbox from "../common/CheckBox";
const BrandElement = () => {
    return (
        <div>

            <div className="flex justify-between items-center bg-white-500 text-text-gray2 mt-3 font-poppinsRegular">
                <h1>elementBrand</h1>
                {/* <Checkbox color="purple" className="flex" /> */}
                <Checkbox className="flex" />
            </div>
            <hr class="w-[100%] h-[0.3px] mx-auto bg-gray-blue border-0 rounded "></hr>
        </div>
    );
};
export default BrandElement;
