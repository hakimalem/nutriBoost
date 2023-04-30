import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 w-[105%] justify-items-center px-[1%] border-card-stroke" >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default ProductsList;