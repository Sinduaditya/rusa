import Inspire from "../../assets/about/search-normal.svg";
import Recomend from "../../assets/about/location-tick.svg";
import Educate from "../../assets/about/lamp-on.svg";
import { Link } from "react-router-dom";

function WhatWedo() {
    return (
        <>
            <section className="py-10  sm:py-16 lg:py-24 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
                            What We <span className="text-primary">Do ?</span>
                        </h2>
                    </div>
                    <div className="grid max-w-xl grid-cols-1 mx-auto mt-10 text-center lg:max-w-full lg:mt-20 lg:grid-cols-3 gap-x-2 xl:gap-x-4">
                        <div className="overflow-hidden bg-transparent rounded-md">
                            <div className="px-8 py-28">
                                <img
                                    className="object-cover w-36 h-36 mx-auto "
                                    src={Inspire}
                                    alt=""
                                />
                                <h1 className="text-4xl font-semibold  mt-9">
                                    Inspire
                                </h1>
                                <p className="mt-3 text-base text-secondary">
                                    Membangkitkan minat wisata domestik
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-transparent rounded-md">
                            <div className="px-8 py-28">
                                <img
                                    className="object-cover w-36 h-36 mx-auto "
                                    src={Recomend}
                                    alt=""
                                />
                                <h1 className="text-4xl font-semibold  mt-9">
                                    Recommend
                                </h1>
                                <p className="mt-3 text-base text-secondary">
                                    Menyajikan pilihan tempat wisata terbaik
                                    Membangkitkan minat wisata domestik
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-transparent rounded-md">
                            <div className="px-8 py-28">
                                <img
                                    className="object-cover w-36 h-36 mx-auto "
                                    src={Educate}
                                    alt=""
                                />
                                <h1 className="text-4xl font-semibold  mt-9">
                                    Educate
                                </h1>
                                <p className="mt-3 text-base text-secondary">
                                    Mengupas budaya & sejarah secara menarik
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhatWedo;
