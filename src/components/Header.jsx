import { Link, useLocation } from "react-router-dom";
import LogoDr from "../assets/header/dolanrek.svg";
import { clsx } from "clsx";

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation);
    console.log("test");
    return (
        <>
            <header className="bg-bluelight">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center font-medium justify-between">
                        <div className="flex gap-2">
                            <img src={LogoDr} className="h-10 w-10" alt=""/>
                            <a href="{`\`}" className="font-bold text-3xl mt-2">
                                Dolan<span className="text-primary">Rek.</span>
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
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
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    to="/login"
                                    className="hover:font-semibold rounded-3xl p-2 pl-4 pr-4 bg-bluelight  text-black"
                                >
                                    Login
                                </Link>

                                <div className="hidden sm:flex">
                                    <a className="bg-primary rounded-3xl p-2 pl-4 pr-4 text-white">
                                        Sign up
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
