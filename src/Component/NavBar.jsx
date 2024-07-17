import React, { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-700 bg-opacity-0 m-8 w-full h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-16">
                <div className="mx-3 flex justify-center items-center gap-2">
                    <img className="h-12 rounded-full" src="https://t4.ftcdn.net/jpg/03/22/70/65/360_F_322706505_RoJ120AZEtWlj8i5gpGdNHUByiSR0zlI.jpg" alt="Logo" />
                    <a href="/" className="text-lg font-bold text-white">Vikas Singh</a>
                </div>
                <div className=" md:flex h-12 mx-2 flex justify-center items-center gap-8">
                    <a href="/" className="text-base font-medium text-white">Home</a>
                    <a href="/Products" className="text-base font-medium text-white">Products</a>
                    <a href="/AboutUs" className="text-base font-medium text-white">About Us</a>
                    <a href="/Resources" className="text-base font-medium text-white">Resources</a>
                </div>
            </div>

            <div className=" md:flex h-12 mr-16 flex justify-center items-center gap-8">
                <a href="/" className="text-base font-medium text-white">Book Demo</a>
                <a href="/Login" className="text-base font-medium text-white">Login</a>
                <button className="text-base font-bold text-white bg-blue-500 p-2.5 rounded-2xl" type="submit">Try it free</button>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center mr-4">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-gray-700 bg-opacity-75 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4">
                    <a href="/" className="text-lg font-medium text-white" onClick={toggleMenu}>Home</a>
                    <a href="/Products" className="text-lg font-medium text-white" onClick={toggleMenu}>Products</a>
                    <a href="/AboutUs" className="text-lg font-medium text-white" onClick={toggleMenu}>About Us</a>
                    <a href="//Resources" className="text-lg font-medium text-white" onClick={toggleMenu}>Resources</a>
                    <a href="/" className="text-lg font-medium text-white" onClick={toggleMenu}>Book Demo</a>
                    <a href="/Login" className="text-lg font-medium text-white" onClick={toggleMenu}>Login</a>
                    <button className="text-lg font-bold text-white bg-blue-500 p-2.5 rounded-2xl" onClick={toggleMenu}>Try it free</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
