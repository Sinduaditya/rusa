import React from "react";
import { TypeAnimation } from "react-type-animation";
import Location2 from "../assets/location2.svg";
import Bromo from "../assets/gunung-bromo.jpg";
import JatimPark from "../assets/jatim-park-2.jpg";
import Suro from "../assets/patung-suro-boyo.jpg";

function HeroCarousel() {
    return (
        <div className="hero min-h-screen bg-white ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between md:w-full mx-12 ">
                <div className="  max-w w-full md:mt-4 md:w-[541px] md:h-[300px] md:grid md:justify-between relative">
                    <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[230px] h-60 left-[32px] top-0 absolute">
                                <div className="w-[230px] h-60 left-0 top-0 absolute  rounded-2xl"></div>
                                <img
                                    className="w-[230.55px]   h-[240.43px] left-[-4.28px] object-cover top-[-86px] absolute rounded-2xl"
                                    src={Bromo}
                                />
                            </div>
                        </div>
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[230px] h-40 left-[32px] top-[180px] absolute">
                                <div className="w-[230px] h-40 left-0 top-0 absolute  rounded-2xl"></div>
                                <img
                                    className="w-[230.98px] h-[160px]  left-0 top-[-2px] object-cover absolute rounded-2xl"
                                    src={JatimPark}
                                />
                            </div>
                        </div>
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[100px] h-6 px-2 py-1 motion-safe:animate-bounce left-[167px] top-[315px] shadow-lg absolute bg-white rounded-[48px] justify-center items-center gap-2 inline-flex">
                                <div className="w-5 h-4 justify-center items-center flex">
                                    <div className="w-4 h-4 relative">
                                        <img src={Location2} alt="" />
                                    </div>
                                </div>
                                <div className="text-slate-700 text-xs font-normal font-cabin">
                                    Jatim Park
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[244px] h-[328px] left-[278px] top-[48px] absolute">
                                <div className="w-[244px] h-[328px] left-0 top-0 absolute rounded-2xl"></div>
                                <img
                                    className="w-[251.28px] h-[350.44px] left-0 top-[-23px] absolute object-cover rounded-2xl"
                                    src={Suro}
                                />
                            </div>
                        </div>
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[141px] h-6 px-2 py-1 motion-safe:animate-bounce left-[400px] top-[64px] shadow-lg absolute bg-white rounded-[48px] justify-center items-center gap-2 inline-flex">
                                <div className="w-4 h-4 flex">
                                    <div className="w-5 h-4 relative">
                                        <img src={Location2} alt="" />
                                    </div>
                                </div>
                                <div className="text-slate-700 text-xs font-normal font-cabin whitespace-nowrap">
                                    Patung Suro & Boyo
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h-full hidden md:block">
                            <div className="w-[128px] h-6 px-2 py-1 motion-safe:animate-bounce left-0 top-[16px] shadow-lg absolute bg-white rounded-[48px] justify-center items-center gap-2 inline-flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                    <div className="w-4 h-4 relative">
                                        <img src={Location2} alt="" />
                                    </div>
                                </div>
                                <div className="text-slate-700 text-xs font-normal font-cabin">
                                    Gunung Bromo
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item mt-2 p-2 h-full md:hidden ">
                            <img
                                src={Bromo}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="carousel-item p-3 h-full md:hidden ">
                            <img
                                src={JatimPark}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="carousel-item p-3 h-full md:hidden">
                            <img
                                src={Bromo}
                                className="object-cover  rounded-2xl"
                            />
                        </div>
                        <div className="carousel-item p-3 h-full md:hidden">
                            <img
                                src={JatimPark}
                                className="object-cover  rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div className=" min-w-fit">
                    <h1 className="font-bold text-5xl font-poppin">
                        Rasakan <br />
                        Petualangan
                    </h1>
                    {/* React Type-Animation */}
                    <span className="text-primary text-5xl font-bold">
                        <TypeAnimation
                            sequence={[
                                "Tanpa Hambatan",
                                1000,
                                "Tanpa diganggu",
                                1000,
                                "Apapun itulah...",
                                1000,
                                () => {
                                    console.log("Sequence completed");
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </span>
                    {/* END React Type-Animation  */}
                    <p className="py-5 text-base font-cabin">
                        Mulai rencanakan perjalanan Anda sekarang dan <br />{" "}
                        temukan pesona eksklusif Jawa Timur
                    </p>
                    <button className="p-2 pl-4 pr-4 rounded-2xl bg-primary text-white font-poppin">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroCarousel;
