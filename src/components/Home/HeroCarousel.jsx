import { TypeAnimation } from "react-type-animation";
import Bromo from "../../assets/gunung-bromo-explore.jpg";
import JatimPark from "../../assets/jatim-park-2.jpg";
import Suro from "../../assets/patung-suro-boyo.jpg";

function HeroCarousel() {
    return (
        <>
            <div className="relative z-10 mt-20">
                <section
                    className="overflow-hidden rounded-[48px] bg-glass bg-opacity-70 p-10 border-2 border-white border-opacity-50 backdrop-blur-3xl  lg:pt-[10px] lg:pb-[40px] relative z-20  font-poppins ">

                    <div className="container mx-auto">
                        <div className=" flex flex-wrap items-center justify-between -mx-4">
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-2 lg:mt-0">
                                    {/* <span className="block mb-2 text-5xl font-bold ">*/}
                                    {/*    Dolan<span className="text-primary">Rek.</span>*/}
                                    {/*</span>*/}
                                    <h2 className="mb-1 text-4xl sm:text-5xl font-bold">
                                        Rasakan Petualangan
                                    </h2>
                                    <h2 className=" text-4xl sm:text-5xl font-bold text-primary">
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
                                        Mulai rencanakan perjalanan Anda sekarang dan temukan pesona eksklusif Jawa
                                        Timur.
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

                <div
                    className="w-56 h-56 sm:w-80 sm:h-80 -left-[140px] -top-[50px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>
                <div
                    className="w-36 h-36 sm:w-48 sm:h-48 -right-[10px] sm:-right-[100px] -bottom-[65px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>

            </div>
        </>
    );
}

export default HeroCarousel;
