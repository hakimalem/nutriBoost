import React, { useState } from 'react';

const items = [
    { id: 1, name: 'Item A', orders: 10, price: 20 },
    { id: 2, name: 'Item B', orders: 5, price: 15 },
    { id: 3, name: 'Item C', orders: 15, price: 25 },
    { id: 4, name: 'Item D', orders: 20, price: 10 },
];

const SortBy = () => {
    const [sortOption, setSortOption] = useState('bestMatch');

    const handleSortOptionChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortItems = () => {
        switch (sortOption) {
            case 'orders':
                return [...items].sort((a, b) => b.orders - a.orders);
            case 'price':
                return [...items].sort((a, b) => a.price - b.price);
            default:
                return items;
        }
    };

    const sortedItems = sortItems();

    return (
        <div className="container mx-auto py-4 text-text-black font-poppinsRegular flex justify-end">
            <div className="items-center flex flex-row mb-[1%]  mr-[1%]">
                <label htmlFor="sortOption" className="mb-[1%] font-medium text-lg ">Sort by: &nbsp;</label>
                <select
                    id="sortOption"
                    // value={sortOption}
                    // onChange={handleSortOptionChange}
                    className="border bg-gray-100 border-gray-200 text-text-gray2 text-sm rounded-md px-2 py-1"
                >
                    <option value="bestMatch">Best Match</option>
                    <option value="orders">Orders</option>
                    <option value="price">Price</option>
                </select>
                {/* <button
                    // onClick={sortItems}
                    className="bg-green-500 text-white rounded-md px-4 py-1"
                >
                    Sort
                </button> */}
            </div>
            {/* <ul className="divide-y divide-gray-400">
                {sortedItems.map((item) => (
                    <li key={item.id} className="py-2">
                        <span className="font-medium">{item.name}</span> - Orders: {item.orders} - Price: {item.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default SortBy;