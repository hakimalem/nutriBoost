import React from "react";
import Brands from "../components/Products/Brands";
import Categories from "../components/Products/Categories";
import Price from "../components/Products/Price";
import ProductsList from "../components/Products/ProductsList";

const ProductsPage = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">

        <div className="bg-white flex ">
            <div className="flex flex-col" >
                <Categories />
                <Brands />
                <Price />
            </div>
            <div>
                <ProductsList />
            </div>
        </div>
        </div>
    );
};

export default ProductsPage;