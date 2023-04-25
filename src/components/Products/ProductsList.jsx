import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <div className="bg-red-300 border-[2px] border-card-stroke w-[900px] flex justify-center items-start" >
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    );
};

export default ProductsList;