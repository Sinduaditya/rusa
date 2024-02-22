import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [activePage, setActivePage] = useState('');

    // Set active page based on current location
    React.useEffect(() => {
        const pathname = location.pathname.split('/')[1];
        setActivePage(pathname.charAt(0).toUpperCase() + pathname.slice(1));
    }, [location]);
    return (
        <>
            <div className="navbar bg-white font-poppins ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/" className="hover:font-semibold">Home</Link>
                            </li>
                            <li>
                                <Link to="/explore" className="hover:font-semibold">Explore</Link>
                            </li>
                            <li>
                                <Link to="/stories" className="hover:font-semibold">Stories</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:font-semibold">About</Link>
                            </li>
                            <li><a className=" p-2 pl-4 pr-4 bg-white font-bold text-black">Log in</a></li>
                            <li><a className="p-2 pl-4 pr-4 text-black font-bold ">Sign up</a></li>

                        </ul>
                    </div>
                    <a className="md:pl-[110px] font-bold text-3xl">
                        Dolan<span className="text-primary">Rek.</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === '/' ? 'font-bold' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/explore"
                                className={`nav-link ${location.pathname === '/explore' ? 'font-bold' : ''}`}
                            >
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/stories"
                                className={`nav-link ${location.pathname === '/stories' ? 'font-bold' : ''}`}
                            >
                                Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`nav-link ${location.pathname === '/about' ? 'font-bold' : ''}`}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-[110px] gap-5 hidden md:flex">
                    <a className="rounded-3xl p-2 pl-4 pr-4 bg-white text-black">Log in</a>
                    <a className="bg-primary rounded-3xl p-2 pl-4 pr-4 text-white">Sign up</a>
                </div>
            </div>
        </>
    );
};

export default Header;
