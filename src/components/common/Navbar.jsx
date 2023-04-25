import React from "react";
import logoNavbar from "../../assets/logoNavbar.svg";
import SearchButton from "../Products/SearchButton";
import cart from "../../assets/cart.svg"
import heart from "../../assets/heart.svg"
import question from "../../assets/question.svg"

export const Navbar = () => {
    return (
        <nav className=" bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">            {/* media queries */}

                <div className="relative flex items-center justify-between h-180 ml-[10%]">
                    {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> */}
                    <div className="flex-1 flex  sm:items-stretch  ">
                        {/* LOGO */}
                        <div className="flex flex[1] justify-end mr-[1%]">
                            <img className="hidden lg:block w-[60%]"
                                src={logoNavbar}
                                alt="NutriBoost" />
                        </div>
                        {/* NAVIGATIONS AND OTHERS */}
                        <div className="flex flex-[1]  justify-center ">
                            <div className="flex-col ">
                                <div className="hidden sm:block sm:mx-6">
                                    <div className="flex space-x-[6%] my-[2%] justify-center">
                                        <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Home
                                        </a>
                                        <a href="#"
                                            className="text-gray-900 hover:bg-gray-700 active:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Features
                                        </a>
                                        <a href="#"
                                            className="text-gray-900 hover:bg-gray-700 active:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Shop
                                        </a>
                                        <a
                                            className="text-gray-900 hover:bg-gray-700 active:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Contacts
                                        </a>
                                        <a href="#"
                                            className="bg-green2 hover:bg-primary hover:bg-opacity-50 active:bg-opacity-70 active:bg-primary rounded-sm text-sm font-medium text-gray-700 h-[30px] w-[30px] flex justify-center items-center"
                                        >
                                            <img className="h-[70%] w-auto"
                                                src={cart}
                                                alt="C" />
                                        </a>
                                    </div>

                                    <div className="rounded-md flex w-[400px] my-[2%]">
                                        <input type="text" placeholder=" Search for Healthy Product" in className=" bg-slate-50 rounded-l-md flex w-full h-[30px] bg-dragos-iput text-sm font-medium focus:outline-none border border-dragos-input hover:border-primary hover:border-opacity-30 focus:border-primary" />
                                        <SearchButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BUTTONS SIDE */}
                        <div className="flex items-start flex-col  flex-[1] ml-[1%] mr-[6%]">
                            <div className="flex items-center justify-start flex-row  flex-[1] w-[100%] space-x-[5%]">
                                <a href="#"
                                    className="bg-green2 hover:bg-primary hover:bg-opacity-50 active:bg-opacity-60 active:bg-primary rounded-sm text-sm font-medium text-gray-700 h-[30px] w-[30px] flex justify-center items-center"
                                >
                                    <img className="h-[70%] w-auto"
                                        src={heart}
                                        alt="H" />
                                </a>
                                <button type="button"
                                    className="py-2 border justify-center h-[80%] border-primary rounded-md text-sm font-medium text-primary bg-transparent hover:bg-primary hover:text-white w-[40%]">
                                    Login / Sign up
                                </button>
                            </div>
                            <div className="flex items-center justify-start flex-row  flex-[1] w-[100%] space-x-[5%]">
                                <a href="#"
                                    className="bg-green2 hover:bg-primary hover:bg-opacity-50 active:bg-opacity-60 active:bg-primary rounded-sm text-sm font-medium text-gray-700 h-[30px] w-[30px] flex justify-center items-center"
                                >
                                    <img className="h-[70%] w-auto"
                                        src={question}
                                        alt="Q" />
                                </a>
                                <button type="button"
                                    className="py-2 border justify-center h-[80%] border-dragos-orange rounded-md text-sm font-medium text-dragos-orange bg-transparent hover:bg-dragos-orange hover:text-white w-[40%]">
                                    Offers & Discounts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* linkings + SMALL*/}
            < div className="sm:hidden" id="mobile-menu" >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </a>
                    <a href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Features
                    </a>
                    <a href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Shop
                    </a>
                    <a href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Contacts
                    </a>
                </div>
            </div >
        </nav >
    );
};

