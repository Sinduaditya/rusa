import Hero from "../assets/hero.jpg";
import Loc from "../assets/location.svg";
import Nature from "../assets/naturev2.svg";
import Landmark from "../assets/landmark.svg";
import Culinary from "../assets/culinary.svg";
import Location2 from "../assets/location2.svg";
import Bromo from "../assets/gunung-bromo.jpg";
import JatimPark from "../assets/jatim-park-2.jpg";
import Suro from "../assets/patung-suro-boyo.jpg";
import ZeroLove from "../assets/heartko.svg";
import Star from "../assets/fullstar.svg";

const Home = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppin ">
                {/*header*/}
                <div
                    className="pt-20  pb-4 relative bg-cover bg-center md:w-[80%] lg:w-[100%] h-[336px] md:h-[400px] lg:h-[500px] rounded-2xl mt-7"
                    style={{ backgroundImage: `url(${Hero})` }}
                >
                    <div className="absolute bottom-[160px] left-16 text-white items-center sm:bottom-[120px] sm:left-14">
                        <div className="flex">
                            <img src={Loc} className="w-4 mr-3" alt="" />
                            <p className="font-medium">
                                Gunung Kawah Ijen, Jawa Timur
                            </p>
                        </div>
                        <h1 className="text-5xl font-bold sm:text-white sm:text-4xl">
                            Kawah Ijen
                        </h1>
                    </div>
                </div>
                {/*End header*/}

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
                                <p className="text-sm font-cabin">
                                    Destinasi Kota
                                </p>
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

                {/* Explore */}
                <div className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-2">
                    <div className="max-w-xl mx-auto md:text-left rtl:sm:text-center">
                        <h1 className="max-w-xl mx-auto md:text-left rtl:sm:text-center text-3xl font-poppin font-bold">
                            Rasakan <br /> Petualangan
                            <span className="block text-primary font-bold">
                                Tanpa Hambatan
                            </span>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed pb-20">
                            Mulai rencanakan perjalanan Anda sekarang dan
                            temukan pesona eksklusif Jawa Timur
                        </p>
                        <button className="p-1 pl-4 pr-4 rounded-2xl bg-primary text-white font-poppin">
                            Explore
                        </button>
                    </div>

                    <div className=" w-full mt-48 md:mt-10 md:ml-48 md:w-[541px] md:h-[300px] relative ">
                        <div className="w-[230px] h-60 left-[32px] top-0 absolute">
                            <div className="w-[230px] h-60 left-0 top-0 absolute  rounded-2xl" />
                            <img
                                className="w-[230.55px]  h-[240.43px] left-[-4.28px] object-cover  top-[-86px] absolute rounded-2xl"
                                src={Bromo}
                            />
                        </div>
                        <div className="w-[230px] h-40 left-[32px] top-[180px] absolute">
                            <div className="w-[230px] h-40 left-0 top-0 absolute bg-zinc-300 rounded-2xl" />
                            <img
                                className="w-[230.98px] h-[160px] left-[-3px] top-[-2px] object-cover absolute rounded-2xl"
                                src={JatimPark}
                            />
                        </div>
                        <div className="w-[100px] h-6 px-2 py-1 left-[167px] top-[315px] shadow-lg  absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                    <img src={Location2} alt="" />
                                </div>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-cabin">
                                Jatim Park 2
                            </div>
                        </div>
                        <div className="w-[244px] h-[328px] left-[278px] top-[48px] absolute">
                            <div className="w-[244px] h-[328px] left-0 top-0 absolute bg-zinc-300 rounded-2xl" />
                            <img
                                className="w-[251.28px] h-[300.44px] left-[-3.64px] top-[-23px] absolute object-cover rounded-2xl"
                                src={Suro}
                            />
                        </div>
                        <div className="w-[141px] h-6 px-2 py-1 left-[400px] top-[64px] shadow-lg absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                    <img src={Location2} alt="" />
                                </div>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-cabin">
                                Patung Suro & Boyo
                            </div>
                        </div>
                        <div className="w-[118px] h-6 px-2 py-1 left-0 top-[16px] shadow-lg absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
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
                </div>
                {/* End Explore */}

                <div className="mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:h-full lg:items-center lg:px-2 ">
                    <h1 className="font-bold text-3xl text-[#304862] font-poppin">
                        Destinasi Populer
                    </h1>

                    <h3 className="font-cabin font-medium text-xl text-secondary">
                        Kunjungi tempat populer pilihan travellers
                    </h3>

                    <div className="flex gap-6 ">
                        <div className="mt-16">
                            <div className="w-[266px] h-[247.23px]  relative">
                                <div className="w-[266px] h-[191px] left-0 top-0 absolute">
                                    <div className="w-[266px] h-[191px] left-0 top-0 absolute bg-zinc-300 rounded-lg" />
                                    <img
                                        className="w-[277px] h-[235.09px] rounded-lg left-[-6px] top-[-22px] absolute"
                                        src={Hero}
                                    />
                                </div>
                                <div className="w-[266px] h-[47.17px] left-2 top-[220.07px] absolute flex-col justify-start items-start gap-[8.06px] inline-flex">
                                    <div className="self-stretch text-slate-700 text-base font-medium font-poppin">
                                        Kawah Ijen
                                    </div>
                                    <div className="h-[15.11px] justify-start items-center gap-[8.06px] inline-flex">
                                        <div className="justify-start items-start gap-0.5 flex">
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-secondary text-xs font-medium font-cabin">
                                            224
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24.12px] h-[24.12px] p-1 left-[220px] top-0 absolute bg-white rounded-[50px] justify-center items-center inline-flex">
                                    <div className="w-[16.12px] h-[16.12px] relative">
                                        <img
                                            src={ZeroLove}
                                            className="object-cover"
                                            alt="Love"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <div className="w-[266px] h-[247.23px]  relative">
                                <div className="w-[266px] h-[191px] left-0 top-0 absolute">
                                    <div className="w-[266px] h-[191px] left-0 top-0 absolute bg-zinc-300 rounded-lg" />
                                    <img
                                        className="w-[277px] h-[235.09px] rounded-lg left-[-6px] top-[-22px] absolute"
                                        src={Hero}
                                    />
                                </div>
                                <div className="w-[266px] h-[47.17px] left-2 top-[220.07px] absolute flex-col justify-start items-start gap-[8.06px] inline-flex">
                                    <div className="self-stretch text-slate-700 text-base font-medium font-poppin">
                                        Kawah Ijen
                                    </div>
                                    <div className="h-[15.11px] justify-start items-center gap-[8.06px] inline-flex">
                                        <div className="justify-start items-start gap-0.5 flex">
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-secondary text-xs font-medium font-cabin">
                                            224
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24.12px] h-[24.12px] p-1 left-[220px] top-0 absolute bg-white rounded-[50px] justify-center items-center inline-flex">
                                    <div className="w-[16.12px] h-[16.12px] relative">
                                        <img
                                            src={ZeroLove}
                                            className="object-cover"
                                            alt="Love"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <div className="w-[266px] h-[247.23px]  relative">
                                <div className="w-[266px] h-[191px] left-0 top-0 absolute">
                                    <div className="w-[266px] h-[191px] left-0 top-0 absolute bg-zinc-300 rounded-lg" />
                                    <img
                                        className="w-[277px] h-[235.09px] rounded-lg left-[-6px] top-[-22px] absolute"
                                        src={Hero}
                                    />
                                </div>
                                <div className="w-[266px] h-[47.17px] left-2 top-[220.07px] absolute flex-col justify-start items-start gap-[8.06px] inline-flex">
                                    <div className="self-stretch text-slate-700 text-base font-medium font-poppin">
                                        Kawah Ijen
                                    </div>
                                    <div className="h-[15.11px] justify-start items-center gap-[8.06px] inline-flex">
                                        <div className="justify-start items-start gap-0.5 flex">
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 justify-center items-center flex">
                                                <div className="w-3 h-3 relative">
                                                    <img src={Star} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-secondary text-xs font-medium font-cabin">
                                            224
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[24.12px] h-[24.12px] p-1 left-[220px] top-0 absolute bg-white rounded-[50px] justify-center items-center inline-flex">
                                    <div className="w-[16.12px] h-[16.12px] relative">
                                        <img
                                            src={ZeroLove}
                                            className="object-cover"
                                            alt="Love"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
