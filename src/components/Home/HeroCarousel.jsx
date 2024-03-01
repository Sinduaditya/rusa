import { TypeAnimation } from "react-type-animation";
import Bromo from "../../assets/gunung-bromo-explore.jpg";
import JatimPark from "../../assets/jatim-park-2.jpg";
import Suro from "../../assets/patung-suro-boyo.jpg";
import IconLocation from "../../assets/location2.svg";

function HeroCarousel() {
    return (
        <>
            <div className="relative z-10 my-20">
                <section className="overflow-hidden rounded-[64px] bg-glass bg-opacity-70 px-8 py-10 lg:p-10 border-2 border-white border-opacity-50 backdrop-blur-3xl lg:pt-[10px] lg:pb-[40px] relative z-20  font-poppins">
                    <div className="container mx-auto">
                        <div className="grid gap-8 lg:flex lg:flex-wrap items-center justify-between">
                            {/* text */}
                            <div className="grid gap-4 lg:gap-10">
                                <div className="grid gap-1 lg:gap-3">
                                    {/* Rasakan petualangan Tanpa.... */}
                                    <div>
                                        <h2 className="text-midnight mb-1 text-2xl lg:text-[43px] leading-none font-bold">
                                            Rasakan Petualangan
                                        </h2>
                                        <h2 className="text-2xl lg:text-[43px] leading-none font-bold text-primary">
                                            <TypeAnimation
                                                sequence={[
                                                    "Tanpa Hambatan",
                                                    2000,
                                                    "Tanpa Gangguan",
                                                    2000,
                                                    () => {
                                                        console.log("Berhasil");
                                                    },
                                                ]}
                                                repeat={Infinity}
                                            />
                                        </h2>
                                    </div>
                                    {/* Rasakan petualangan Tanpa.... */}
                                    <p className="text-xs lg:text-sm mt-3 text-midnight font-medium max-w-72">
                                        Temukan pesona eksklusif Jawa Timur dan
                                        Mulai rencanakan perjalananmu bersama
                                        <span className="text-midnight font-bold">
                                            {" "}
                                            Dolan
                                        </span>
                                        <span className="text-primary font-bold">
                                            Rek!
                                        </span>
                                    </p>
                                </div>

                                <a
                                    href={"/explore"}
                                    className="w-fit inline-flex items-center justify-center py-2 text-sm lg:text-base font-medium text-center text-white border border-transparent rounded-3xl px-8 bg-primary hover:bg-opacity-90"
                                >
                                    Explore
                                </a>
                            </div>
                            {/* end text */}
                            {/* caroursel */}
                            <div className="w-full px-4 lg:w-6/12 pr-8">
                                <div className="grid lg:flex gap-4 max-w-[540px] w-full lg:max-h-[424px] h-full justify-center">
                                    {/* bagian 1. Bromo dan Jatim Park 2 */}
                                    <div className="grid gap-4">
                                        {/* bromo */}
                                        <div className="relative">
                                            <div className="flex absolute -left-8 top-4 bg-white rounded-full gap-1 py-1 px-2 shadow-lg">
                                                <img
                                                    src={IconLocation}
                                                    alt=""
                                                />
                                                <p className="text-xs text-midnight">
                                                    Gunung Bromo
                                                </p>
                                            </div>
                                            <img
                                                src={Bromo}
                                                alt="Gunung Bromo"
                                                className="w-[230px] h-60 rounded-2xl object-cover"
                                            />
                                        </div>
                                        {/* jatim park */}
                                        <div className="relative">
                                            <div className="flex absolute -right-2 -bottom-2 bg-white rounded-full gap-1 py-1 px-2 shadow-xl">
                                                <img
                                                    src={IconLocation}
                                                    alt=""
                                                />
                                                <p className="text-xs text-midnight">
                                                    Jatim Park 2
                                                </p>
                                            </div>
                                            <img
                                                src={JatimPark}
                                                alt="Jatim Park 2"
                                                className="w-[230px] h-40 rounded-2xl object-cover"
                                            />
                                        </div>
                                        {/* jatim park */}
                                    </div>
                                    {/* end bagian 1. Bromo dan Jatim Park 2 */}
                                    {/* bagian 2. Patung sura baya */}
                                    <div className="grid self-center">
                                        {/* patung sura baya */}
                                        <div className="relative">
                                            <div className="flex absolute -right-8 top-4 bg-white rounded-full gap-1 py-1 px-2 shadow-xl">
                                                <img
                                                    src={IconLocation}
                                                    alt=""
                                                />
                                                <p className="text-xs text-midnight">
                                                    Patung Sura dan Baya
                                                </p>
                                            </div>
                                            <img
                                                src={Suro}
                                                alt="Patung sura baya"
                                                className="w-[244px] h-[328px] rounded-2xl object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end caroursel */}
                        </div>
                    </div>
                </section>

                <div className="w-56 h-56 sm:w-80 sm:h-80 -left-[140px] -top-[50px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
                <div className="w-36 h-36 sm:w-48 sm:h-48 -right-[10px] sm:-right-[100px] -bottom-[65px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
            </div>
        </>
    );
}

export default HeroCarousel;
