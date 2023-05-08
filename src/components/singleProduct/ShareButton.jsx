import { Fragment, useState } from "react";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { MdShare } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import close from '../../assets/close.svg'
import share from "../../assets/share.svg"

export default function ShareButton() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleShareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank', 'noopener');
    };

    const handleShareOnInstagram = () => {
        const url = 'https://www.instagram.com';
        window.open(url, '_blank', 'noopener');
    };

    const handleShareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank', 'noopener');
    };
    const handleShareOnEmail = () => {
        const subject = 'Check out this awesome product';
        const body = 'Hey, check out this product I found: [insert product link]';
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };
    const handleShareOnWhatsapp = () => {
        const message = 'Hey, check out this product I found: [insert product link]';
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className='bg-white hover:bg-blueGray-300 active:bg-blueGray-500 rounded-md h-full  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                onClick={() => setShowModal(true)}
            >
                <img className="w-[100%]"
                    src={share}
                    alt="P" />
            </button>
            {showModal ? (
                <>
                    <div
                        className=" w-[100%] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[100%] my-6 mx-auto max-w-3xl flex justify-center">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[50%] bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-2xl font-poppinsRegular">
                                        Share this product!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <img src={close} alt="c" />
                                    </button>

                                </div>
                                {/*body*/}
                                <div className="relative flex justify-center  p-6 flex-auto">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                                            onClick={handleCopyLink}
                                        >
                                            <FiLink className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                                            onClick={handleShareOnTwitter}
                                        >
                                            <FaTwitter className="w-5 h-5 text-white" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
                                            onClick={handleShareOnInstagram}
                                        >
                                            <FaInstagram className="w-5 h-5 text-white" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                                            onClick={handleShareOnFacebook}
                                        >
                                            <FaFacebook className="w-5 h-5 text-white" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
                                            onClick={handleShareOnWhatsapp}
                                        >
                                            <FaWhatsapp className="w-5 h-5 text-white" />
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
                                            onClick={handleShareOnEmail}
                                        >
                                            <MdEmail className="w-5 h-5 text-white" />
                                        </button>
                                        {isCopied && (
                                            <div id="toast-bottom-left" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                                                <div class="text-sm font-normal">Link copied to clipboard!</div>
                                            </div>

                                        )}
                                    </div>
                                </div>
                                {/*footer*/}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}