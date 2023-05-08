import { useState } from 'react';

import classNames from 'classnames';
import fav from "../../assets/fav.svg"

function AddToFavorites() {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <button
            // className={classNames('bg-transparent border-none', {
            //     'text-red-500': isFavorited,
            // })}
            className='bg-white hover:bg-red-200 active:bg-red-500 rounded-md h-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            onClick={handleFavoriteClick}
        >
            <img className="w-[100%]"
                src={fav}
                alt="P" />
        </button>
    );
}

export default AddToFavorites;