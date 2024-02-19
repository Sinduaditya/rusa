import Hero from "../assets/hero.jpg";
import Loc from "../assets/location.svg";
import Nature from "../assets/naturev2.svg";
import Landmark from "../assets/landmark.svg";
import Culinary from "../assets/culinary.svg";
import Location2 from "../assets/location2.svg";
import Bromo from "../assets/gunung-bromo.jpg";
import JatimPark from "../assets/jatim-park-2.jpg";
import Suro from "../assets/patung-suro-boyo.jpg";

const Home = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppin ">
                {/*header*/}
                <div
                    className="pt-20 pb-4 relative bg-cover bg-center w-full md:w-[90%] lg:w-[100%] h-[336px] md:h-[400px] lg:h-[500px] rounded-2xl mt-7"
                    style={{backgroundImage: `url(${Hero})`}}>
                    <div
                        className="absolute bottom-[160px] left-16 text-white items-center sm:bottom-[120px] sm:left-14">
                        <div className="flex">
                            <img src={Loc} className="w-4 mr-3" alt=""/>
                            <p className="font-medium">Gunung Kawah Ijen, Jawa Timur</p>
                        </div>
                        <h1 className="text-5xl font-bold sm:text-white sm:text-4xl">Kawah Ijen</h1>
                    </div>
                </div>
                {/*End header*/}

                <div
                    className="hidden md:block bg-white rounded-lg mx-4 sm:mx-10 lg:mx-28 p-4 relative -mt-14 justify-center shadow-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <h3 className="font-bold text-xl pl-7">Feel the <br/> Local Experience</h3>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Nature} className="w-12" alt=""/>
                            <div className="pt-2 pl-2">
                                <h1 className="font-semibold">Nature</h1>
                                <p className="text-sm font-cabin">Destinasi Wisata</p>
                            </div>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Landmark} className="w-12" alt=""/>
                            <div className="pt-2 pl-2">
                                <h1 className="font-semibold">Landmark</h1>
                                <p className="text-sm font-cabin">Destinasi Kota</p>
                            </div>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Culinary} className="w-12" alt=""/>
                            <div className="pt-1 pl-2">
                                <h1 className="font-semibold">Culinary</h1>
                                <p className="text-sm font-cabin">Destinasi Kuliner</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore */}
                <div
                    className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-2">

                    <div className="max-w-xl mx-auto md:text-left rtl:sm:text-center">
                        <h1 className="max-w-xl mx-auto md:text-left rtl:sm:text-center text-3xl font-poppin font-bold">
                            Rasakan <br/> Petualangan
                            <span className="block text-primary font-bold">Tanpa Hambatan</span>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed pb-20">
                            Mulai rencanakan perjalanan Anda sekarang dan temukan pesona eksklusif Jawa Timur
                        </p>
                        <button className="p-1 pl-4 pr-4 rounded-2xl bg-primary text-white font-poppin">Explore
                        </button>
                    </div>

                    <div className=" w-full mt-48 md:mt-10 md:ml-48 md:w-[541px] md:h-[300px] relative">
                        <div className="w-[230px] h-60 left-[32px] top-0 absolute">
                            <div className="w-[230px] h-60 left-0 top-0 absolute  rounded-2xl"/>
                            <img
                                className="w-[238.55px]  h-[320.43px] left-[-4.28px] object-cover top-[-86px] absolute rounded-2xl"
                                src={Bromo}/>
                        </div>
                        <div className="w-[230px] h-40 left-[32px] top-[256px] absolute">
                            <div className="w-[230px] h-40 left-0 top-0 absolute bg-zinc-300 rounded-2xl"/>
                            <img
                                className="w-[236.98px] h-[164px] left-[-3px] top-[-2px] object-cover absolute rounded-2xl"
                                src={JatimPark}/>
                        </div>
                        <div
                            className="w-[100px] h-6 px-2 py-1 left-[167px] top-[400px] absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                    <img src={Location2} alt=""/>
                                </div>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-cabin">Jatim Park 2</div>
                        </div>
                        <div className="w-[244px] h-[328px] left-[278px] top-[48px] absolute">
                            <div className="w-[244px] h-[328px] left-0 top-0 absolute bg-zinc-300 rounded-2xl"/>
                            <img
                                className="w-[251.28px] h-[300.44px] left-[-3.64px] top-[-23px] absolute object-cover rounded-2xl"
                                src={Suro}/>
                        </div>
                        <div
                            className="w-[141px] h-6 px-2 py-1 left-[400px] top-[64px] absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                    <img src={Location2} alt=""/>
                                </div>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-cabin">Patung Suro & Boyo</div>
                        </div>
                        <div
                            className="w-[118px] h-6 px-2 py-1 left-0 top-[16px] absolute bg-white rounded-[48px] shadow justify-center items-center gap-2 inline-flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                    <img src={Location2} alt=""/>
                                </div>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-cabin">Gunung Bromo</div>
                        </div>
                    </div>
                </div>
                {/* End Explore */}
            </div>


        </>
    );
}
export default Home;