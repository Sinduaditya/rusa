import Hero from "../../assets/hero.jpg";
import Loc from "../../assets/location.svg";
import Nature from "../../assets/naturev2.svg";
import Landmark from "../../assets/landmark.svg";
import Culinary from "../../assets/culinary.svg";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <>
            {/*[1150px]*/}
            <div
                className="lg:h-[500px] relative bg-white bg-cover bg-center mx-auto rounded-2xl h-screen"
                style={{ backgroundImage: `url(${Hero})` }}
            >
                <div className="text-center w-full h-full bg-gradient-to-b from-midnight/10 to-[#000000]/80 rounded-2xl flex justify-center items-center">
                    <div className="max-w-md">
                        <div className="lg:absolute -my-10 md:relative lg:bottom-[160px] text-center text-white items-center sm:bottom-24 sm:left-14">
                            <div className="flex justify-start">
                                <img src={Loc} className="w-4 mr-3" alt="" />
                                <p className="font-medium">
                                    Gunung Kawah Ijen, Jawa Timur
                                </p>
                            </div>
                            <h1 className="text-center text-5xl font-bold sm:text-white sm:text-5xl md:text-7xl">
                                Kawah Ijen
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block bg-white rounded-lg  lg:mx-36 p-4 relative -mt-14 justify-center shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <h3 className="font-bold text-xl pl-7">
                            Feel the <br /> Local Experience
                        </h3>
                    </div>
                    <div className="flex col-span-1 ml-8 sm:col-span-2 md:col-span-1">
                        <img src={Nature} className="w-12" alt="" />
                        <div className="pt-2 pl-2">
                            <h1 className="font-semibold">Nature</h1>
                            <p className="text-sm font-cabin">
                                Destinasi Wisata
                            </p>
                        </div>
                    </div>
                    <div className="flex col-span-1 ml-8 sm:col-span-2 md:col-span-1">
                        <img src={Landmark} className="w-12" alt="" />
                        <div className="pt-2 pl-2">
                            <h1 className="font-semibold">Landmark</h1>
                            <p className="text-sm font-cabin">Destinasi Kota</p>
                        </div>
                    </div>
                    <div className="flex col-span-1 ml- sm:col-span-2 md:col-span-1">
                        <img src={Culinary} className="w-12" alt="" />
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
