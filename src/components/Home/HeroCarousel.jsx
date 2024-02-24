import React from "react";
import { TypeAnimation } from "react-type-animation";
import Location2 from "../../assets/location2.svg";
import Bromo from "../../assets/gunung-bromo-explore.jpg";
import JatimPark from "../../assets/jatim-park-2.jpg";
import Suro from "../../assets/patung-suro-boyo.jpg";

function HeroCarousel() {
    return (
        <>
            <section
                className="overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] z-10 font-poppins relative">
                <div className="">
                    <div
                        className="absolute  left-40 top-7 w-72 z-[-1]  h-72 bg-purple rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-100"></div>
                    <div
                        className="absolute top-7 right-52 w-72 h-72 z-[-1]   bg-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-100"></div>
                    <div
                        className="absolute bottom-8 right-[600px] w-80 z-[-1]  h-80 bg-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-100"></div>
                </div>
                <div className="container  mx-auto">
                    <div className=" flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                {/* <span className="block mb-2 text-5xl font-bold ">*/}
                                {/*    Dolan<span className="text-primary">Rek.</span>*/}
                                {/*</span>*/}
                                <h2 className="mb-1 text-5xl font-bold">
                                    Rasakan Petualangan
                                </h2>
                                <h2 className="text-5xl font-bold text-primary">
                                    <TypeAnimation
                                        sequence={[
                                            'Tanpa Hambatan',
                                            2000,
                                            'Tanpa Gangguan',
                                            2000,
                                            () => {
                                                console.log('Berhasil');
                                            },
                                        ]}
                                        repeat={Infinity}
                                    />
                                </h2>
                                <p className=" mt-3 text-midnight font-medium">
                                    Mulai rencanakan perjalanan Anda sekarang dan temukan pesona eksklusif Jawa Timur.
                                </p>
                                <p className="mb-8 text-midnight font-medium">
                                    Petualangan tanpa hambatan pesona Jatim Dalam Genggaman 🤳
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center py-2 text-base font-medium text-center text-white border border-transparent rounded-3xl px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Explore
                                </a>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 -mt-[2px] sm:py-4">

                                        <img
                                            src={Bromo}
                                            alt=""
                                            className="object-cover w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={JatimPark}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />

                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 mt-[100px] xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        {/*<span className="bg-white inline-flex gap-2 right-2  absolute mt-3 px-4 rounded-full">*/}
                                        {/*    <img src={Location2} alt=""/>*/}
                                        {/*    Patung Sura & Boyo*/}
                                        {/*</span>*/}
                                        <img
                                            src={Suro}
                                            alt=""
                                            className="w-full rounded-2xl "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroCarousel;
