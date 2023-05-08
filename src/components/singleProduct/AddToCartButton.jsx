import React from 'react';

function AddToCartButton({ handleClick }) {
    const handleAddToCart = () => {
        // ADDING TO CART LOGIC
        console.log('Product added to cart!');
    };

    return (
        <button
            onClick={handleAddToCart}
            className="h-full bg-primary hover:bg-green-300 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
            Add to Cart
        </button>
    );
}

export default AddToCartButton;
