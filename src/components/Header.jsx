import { Link, useLocation } from "react-router-dom";
import LogoDr from "../assets/header/dolanrek.svg";
import { clsx } from "clsx";
import { useState, useEffect } from "react";

const navLinks = [
    { to: "/", label: "Home", match: "" },
    { to: "/explore", label: "Explore", match: "explore" },
    { to: "/stories", label: "Stories", match: "stories" },
    { to: "/about", label: "About", match: "about" },
];

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "glass-strong shadow-soft py-3"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container-app">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2.5 focus-ring group"
                        >
                            <img
                                src={LogoDr}
                                className="h-9 w-9 transition-transform group-hover:scale-105"
                                alt="DolanRek Logo"
                            />
                            <span className="font-display font-bold text-xl text-midnight">
                                Dolan<span className="text-primary">Rek.</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav
                            className="hidden md:flex items-center gap-1"
                            aria-label="Global"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    aria-current={
                                        splitLocation[1] === link.match
                                            ? "page"
                                            : undefined
                                    }
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring",
                                        splitLocation[1] === link.match
                                            ? "text-primary bg-primary/10"
                                            : "text-midnight/70 hover:text-midnight hover:bg-midnight/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                to="/login"
                                className="px-5 py-2 rounded-full text-sm font-medium text-midnight/80 hover:text-midnight hover:bg-midnight/5 transition-all focus-ring"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-600 shadow-sm hover:shadow-md transition-all focus-ring"
                            >
                                Sign up
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-xl text-midnight hover:bg-midnight/5 transition-colors focus-ring"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={
                                isMenuOpen ? "Close menu" : "Open menu"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 md:hidden transition-all duration-300",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-midnight/20 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={clsx(
                        "absolute top-0 right-0 h-full w-[280px] bg-white shadow-elevated p-6 pt-20 transition-transform duration-300",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <nav className="flex flex-col gap-1" aria-label="Mobile">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                aria-current={
                                    splitLocation[1] === link.match
                                        ? "page"
                                        : undefined
                                }
                                className={clsx(
                                    "px-4 py-3 rounded-xl text-base font-medium transition-all focus-ring",
                                    splitLocation[1] === link.match
                                        ? "text-primary bg-primary/10"
                                        : "text-midnight/70 hover:text-midnight hover:bg-surface"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8 flex flex-col gap-3">
                        <Link
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-sm font-medium text-midnight border border-midnight/10 hover:bg-surface transition-all focus-ring"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-sm font-semibold text-white bg-primary hover:bg-primary-600 transition-all focus-ring"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed header */}
            <div className="h-16 md:h-18" />
        </>
    );
};

export default Header;
