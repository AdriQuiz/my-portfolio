import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { navigation } from '../constants';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        enablePageScroll();
        setIsOpen(false);
    };

    const toggleMenu = () => {
        if (!isOpen) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-blue-400 backdrop-blur h-24 flex items-center justify-between px-5 lg:px-10">
                <a href="#hero" className="text-white text-2xl font-bold">Adriana</a>
                <div className="hidden lg:flex space-x-10">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className="text-white text-sm font-semibold uppercase hover:text-blue-800 transition"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden text-white">
                    <Hamburger toggle={toggleMenu} toggled={isOpen} size={22} />
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center lg:hidden">
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            onClick={handleClick}
                            className="text-white text-2xl uppercase font-semibold my-4 hover:text-blue-800"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </>
    )
}

export default Navbar