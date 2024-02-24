import React from "react";
import Hero from "../../assets/hero.jpg";
import Loc from "../../assets/location.svg";
import Nature from "../../assets/naturev2.svg";
import Landmark from "../../assets/landmark.svg";
import Culinary from "../../assets/culinary.svg";

function HeroSection(){
    return (
        <>
            {/*[1150px]*/}
            <div className="hero lg:h-[500px] relative md:h-screen bg-white bg-cover bg-center mt-8 mx-auto md:w-full rounded-2xl h-screen" style={{backgroundImage: `url(${Hero})`}}>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div
                            className="lg:absolute md:relative bottom-[160px] text-center text-white items-center sm:bottom-[120px] sm:left-14">
                            <div className="flex">
                                <img src={Loc} className="w-4 mr-3" alt=""/>
                                <p className="font-medium">
                                    Gunung Kawah Ijen, Jawa Timur
                                </p>
                            </div>
                            <h1 className="text-5xl font-bold sm:text-white sm:text-4xl">
                                Kawah Ijen
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="hidden md:block bg-white rounded-lg  lg:mx-36 p-4 relative -mt-14 justify-center shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                        <h3 className="font-bold text-xl pl-7">
                            Feel the <br/> Local Experience
                        </h3>
                    </div>
                    <div className="flex col-span-1 ml-8 sm:col-span-2 md:col-span-1">
                        <img src={Nature} className="w-12" alt=""/>
                        <div className="pt-2 pl-2">
                            <h1 className="font-semibold">Nature</h1>
                            <p className="text-sm font-cabin">
                                Destinasi Wisata
                            </p>
                        </div>
                    </div>
                    <div className="flex col-span-1 ml-8 sm:col-span-2 md:col-span-1">
                        <img src={Landmark} className="w-12" alt=""/>
                        <div className="pt-2 pl-2">
                            <h1 className="font-semibold">Landmark</h1>
                            <p className="text-sm font-cabin">
                                Destinasi Kota
                            </p>
                        </div>
                    </div>
                    <div className="flex col-span-1 ml- sm:col-span-2 md:col-span-1">
                        <img src={Culinary} className="w-12" alt=""/>
                        <div className="pt-1 pl-2">
                            <h1 className="font-semibold">Culinary</h1>
                            <p className="text-sm font-cabin">
                                Destinasi Kuliner
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HeroSection;