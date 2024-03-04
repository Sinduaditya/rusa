import { Route, useLocation } from "react-router-dom";
import BGImage from "../assets/footer/footerIllustration.png";
import Logo from "../assets/header/dolanrek.svg";

function FooterContent() {
    return (
        <>
            <div className="bg-bluelight ">
                <div className="relative w-full h-full bg-midnight pb-12">
                    <div className="relative z-10 flex justify-center items-center text-white">
                        <footer className="bg-transparent">
                            <div className="mx-auto max-w-screen-lg px-4 font-poppins pt-[50px]">
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                    <div>
                                        <div className="flex text-teal-600 gap-2">
                                            <img
                                                src={Logo}
                                                className="h-10 w-10"
                                                alt=""
                                            />
                                            <a
                                                href="#"
                                                className="font-bold text-3xl mt-2"
                                            >
                                                Dolan
                                                <span className="text-primary">
                                                    Rek.
                                                </span>
                                            </a>
                                        </div>

                                        <p className="mt-4 max-w-xs text-gray-500">
                                            Petualangan Tanpa Hambatan, Pesona
                                            Jatim dalam Genggaman
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                                        <div>
                                            <p className="font-bold text-lg text-gray-900">
                                                Explore
                                            </p>

                                            <ul className="mt-6 space-y-4 text-sm">
                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Pilihan terbaik{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Wisata Alam{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Kuliner{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Religi{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Belanja{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Museum{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Agrowisata{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Landmark{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-bold text-gray-900">
                                                Stories
                                            </p>

                                            <ul className="mt-6 space-y-4 text-sm">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Activities{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Knowledge{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Tips & Trick{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Kuliner & Masakan{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Budaya & Sejarah{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Petualangan{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-bold text-gray-900">
                                                Tentang DolanRek
                                            </p>

                                            <ul className="mt-6 space-y-4 text-sm">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Apa itu DolanRek?{" "}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-700 transition hover:opacity-75"
                                                    >
                                                        {" "}
                                                        Tim Developer{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-bold text-gray-500">
                                    Copyright 2024 &copy;Div48 Dev
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

function FooterIllustration() {
    return (
        <>
            <div className="bg-bluelight">
                <img
                    src={BGImage}
                    className="w-96 md:w-full md:max-w-3xl  mx-auto"
                    alt=""
                />
                <div className="bg-[#576B81] w-full h-[51px] -mt-8"></div>
            </div>
        </>
    );
}

function Footer() {
    const location = useLocation();

    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/about"
    ) {
        return (
            <>
                <FooterIllustration />
                <FooterContent />
            </>
        );
    }
    return (
        <>
            <FooterContent />
        </>
    );
}

export default Footer;
