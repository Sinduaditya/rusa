import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="justify-between font-poppin backdrop-blur-lg">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <h1 className="text-2xl font-bold">Dolan<span className="text-primary">Rek</span></h1>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="font-bold" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="hover:font-semibold" href="#">Explore</a>
                                </li>
                                <li>
                                    <a className="hover:font-semibold" href="#">Stories</a>
                                </li>
                                <li>
                                    <a className="hover:font-semibold" href="#">About</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a className="rounded-2xl px-5 py-1.5 text-sm font-medium text-dark " href="#">Sign in</a>
                            <div className="hidden sm:flex">
                                <a className="rounded-2xl bg-primary px-5 py-1.5 text-sm font-medium text-white shadow" href="#">Sign up</a>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Responsive Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav aria-label="Global" className="bg-gray-100 p-4">
                        <ul className="flex flex-col gap-3">
                            <li><a className="hover:text-primary" href="#">Home</a></li>
                            <li><a className="hover:text-primary" href="#">Explore</a></li>
                            <li><a className="hover:text-primary" href="#">Stories</a></li>
                            <li><a className="hover:text-primary" href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
