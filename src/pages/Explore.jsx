import Hero from "../assets/gunung-bromo-explore.jpg";
import React from "react";
import Nature from "../assets/naturev2.svg";
import Landmark from "../assets/landmark.svg";
import Culinary from "../assets/culinary.svg";
import Loc from "../assets/location2.svg";


function Explore() {
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppins mt-12">
                <div
                    className="hero lg:h-[240px] h-screen relative bg-white bg-cover bg-center mt-8 mx-auto md:w-full rounded-2xl"
                    style={{backgroundImage: `url(${Hero})`}}>
                    <div className="hero-content text-center flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-6xl font-bold text-white">Temukan Destinasi <br/> Favoritmu</h1>
                        </div>
                    </div>
                </div>

                {/*  kategori  */}
                <div className="mt-12 m-20">
                    <div className="flex flex-col  sm:flex-row items-center justify-between">
                        <div className="ml-4 text-[17px] sm:ml-0 mb-4 sm:mb-0 font-poppin font-medium">Pilih Kategori
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="sm:hidden">
                                <label htmlFor="Tab" className="sr-only">Tab</label>
                                <select id="Tab"
                                        className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm">
                                    <option className="py-2">Wisata Alam</option>
                                    <option className="py-2">Rekreasi & Santai</option>
                                    <option className="py-2">Perjalanan Kuliner</option>
                                </select>

                            </div>

                            <div className="hidden sm:block">
                                <nav className="ml-4 sm:ml-0 flex gap-3" aria-label="Tabs">
                                    <a
                                        href="#"
                                        className="inline-flex  shrink-0 items-center gap-2 bg-primary border-solid px-4 pt-2 pb-2 pb-0 text-sm font-medium text-white
                                         rounded-2xl"
                                    >
                                        Semua
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-flex  shrink-0 items-center gap-2 border-secondary border-2 px-5 pb-0 text-sm font-medium text-gray-500
                                         rounded-2xl"
                                    >
                                        <img src={Nature} className="h-5 w-5" alt=""/>
                                        Wisata Alam
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-flex  shrink-0 items-center gap-2 border-secondary border-2 px-5 pb-0 text-sm font-medium text-gray-500
                                         rounded-2xl"
                                    >
                                        <img src={Landmark} className="h-5 w-5" alt=""/>
                                        Rekreasi & Santai
                                    </a>

                                    <a
                                        href="#"
                                        className="inline-flex  shrink-0 items-center gap-2 border-secondary border-2 px-5 pb-0 text-sm font-medium text-gray-500
                                         rounded-2xl"
                                    >
                                        <img src={Culinary} className="h-5 w-5" alt=""/>
                                        Perjalanan Kuliner
                                    </a>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
                {/*  end kategori  */}
                <section className="flex items-center py-10 bg-white  lg:py-12 font-poppins">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 ">
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]  gap-x-6 gap-y-4 mb-16">
                                <img
                                    className="object-cover w-full  rounded-md lg:w-80 h-80"
                                    src={Hero}
                                    alt=" "
                                />
                                <div className="flex items-center">
                                    <div>
                                        <h1 className="text-4xl font-bold font-poppin">Kawah Ijen</h1>
                                        <a href="#">
                                            <p className="mt-3 text-sm text-gray-400 flex gap-2 lg:text-lg ">
                                                <img src={Loc}  alt=""/>
                                                Kabupaten Banyuwangi, Jawa Timur
                                            </p>
                                        </a>
                                        <div className="rating rating-sm pt-2">
                                            <input type="radio" name="rating-2"
                                                   className="mask mask-star-2 bg-orange-400"/>
                                            <input type="radio" name="rating-2"
                                                   className="mask mask-star-2 bg-orange-400" checked/>
                                            <input type="radio" name="rating-2"
                                                   className="mask mask-star-2 bg-orange-400"/>
                                            <input type="radio" name="rating-2"
                                                   className="mask mask-star-2 bg-orange-400"/>
                                            <input type="radio" name="rating-2"
                                                   className="mask mask-star-2 bg-orange-400"/>
                                            <p className="text-xs text-gray-400 pl-2">203</p>
                                        </div>
                                        <div className="">
                                            <a
                                                href="#"
                                                className="flex absolute mt-2 shrink-0 items-center gap-2 border-secondary border-2 px-5 p-2 text-sm font-medium text-gray-500
                                         rounded-3xl"
                                            >
                                                <img src={Nature} className="h-5 w-5" alt=""/>
                                                Wisata Alam
                                            </a>

                                        </div>

                                        <p className="hidden mt-12 leading-7 text-gray-700  md:block lg:text-lg ">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam
                                            at aut blanditiis corporis cumque deleniti, eligendi error exercitationem
                                            facere fugiat illo ipsa ipsam iure iusto laboriosam laborum molestiae
                                            placeat, provident quam quas quia repudiandae sapiente sint tenetur vel
                                            voluptas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Explore;