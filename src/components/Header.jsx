import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import LogoDr from "../assets/header/dolanrek.svg";
import { clsx } from "clsx";

const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    // const [activePage, setActivePage] = useState("");

    // Set active page based on current location
    // React.useEffect(() => {
    //     const pathname = location.pathname.split("/")[1];
    //     setActivePage(pathname.charAt(0).toUpperCase() + pathname.slice(1));
    //     console.log(pathname);
    // }, [location]);
    console.log(splitLocation);
    console.log("test");
    return (
        <>
            <div className="navbar flex bg-bluelight font-poppins ">
                <div className="navbar-start mt-3">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/" className="hover:font-semibold">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/explore"
                                    className="hover:font-semibold"
                                >
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/stories"
                                    className="hover:font-semibold"
                                >
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:font-semibold"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="hover:font-semibold p-2 pl-4 pr-4 bg-white font-bold text-black"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <a className="p-2 pl-4 pr-4 text-black font-bold ">
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:pl-[80px]  flex gap-2">
                        <img src={LogoDr} className="h-10 w-10" alt="" />
                        <a href="#" className="font-bold text-3xl mt-2">
                            Dolan<span className="text-primary">Rek.</span>
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                to="/"
                                className={clsx(
                                    "nav-link ",
                                    splitLocation[1] === ""
                                        ? "font-semibold text-[#304862]"
                                        : ""
                                )}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/explore"
                                className={clsx(
                                    "nav-link ",
                                    splitLocation[1] === "explore"
                                        ? "font-semibold text-[#304862]"
                                        : ""
                                )}
                            >
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/stories"
                                className={clsx(
                                    "nav-link ",
                                    splitLocation[1] === "stories"
                                        ? "font-semibold text-[#304862]"
                                        : ""
                                )}
                            >
                                Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={clsx(
                                    "nav-link ",
                                    splitLocation[1] === "about"
                                        ? "font-semibold text-[#304862]"
                                        : ""
                                )}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-[110px] gap-5 hidden md:flex">
                    <Link
                        to="/login"
                        className="hover:font-semibold rounded-3xl p-2 pl-4 pr-4 bg-bluelight  text-black"
                    >
                        Login
                    </Link>

                    <a className="bg-primary rounded-3xl p-2 pl-4 pr-4 text-white">
                        Sign up
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
