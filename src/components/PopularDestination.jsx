import ZeroLove from "../assets/heartko.svg";
import Star from "../assets/fullstar.svg";

const Populardes = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:h-full lg:items-center lg:px-2 ">
                <h1 className="font-bold text-3xl text-[#304862] font-poppin">
                    Destinasi Populer
                </h1>

                <h3 className="font-cabin font-medium text-xl text-secondary">
                    Kunjungi tempat populer pilihan travellers
                </h3>

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
        </>
    );
};
export default Populardes;
