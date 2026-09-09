import Cry from "../assets/notfound/cry.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

const NotFound = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="relative z-20">
                <div className="w-full max-w-[669px] bg-glass bg-opacity-70 mt-36 main-container flex py-12 px-6 sm:px-10 gap-8 sm:gap-12 items-center flex-nowrap rounded-[40px] lg:rounded-[48px] z-20 relative mx-auto justify-center">
                    {/* blob */}
                    <div className="w-40 h-40 sm:w-60 sm:h-60 -left-[100px] -top-[50px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply animate-blob animation-delay-100" />
                    <div className="w-36 h-36 sm:w-48 sm:h-48 -right-[10px] sm:-right-[80px] -bottom-[65px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply animate-blob animation-delay-100" />

                    <div className="flex w-full flex-col gap-8 items-center shrink-0 flex-nowrap relative">
                        <div data-aos="fade-up">
                            <img src={Cry} alt="Not found illustration" />
                        </div>
                        <div className="flex w-full flex-col gap-10 items-center shrink-0 flex-nowrap relative z-[12]">
                            <div className="flex w-full flex-col gap-4 items-center shrink-0 flex-nowrap relative z-[13]">
                                <span className="w-full text-center shrink-0 basis-auto font-poppins text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight text-midnight tracking-[0.1px] relative z-[14]">
                                    Yah, Halaman Tidak Ditemukan
                                </span>
                                <span className="flex w-full justify-center items-start shrink-0 font-poppins text-sm font-normal leading-relaxed text-secondary tracking-[0.04px] relative text-center overflow-hidden z-[15]">
                                    Maaf atas ketidaknyamanannya. Tampaknya Anda
                                    mencoba mengakses halaman yang telah dihapus
                                    atau bahkan tidak pernah ada.
                                </span>
                            </div>
                            <Link
                                to="/"
                                className="flex w-fit px-6 py-3 gap-2 justify-center items-center shrink-0 bg-primary rounded-full text-white font-poppins text-sm font-bold tracking-[0.04px] relative z-[16] focus-ring transition-colors hover:bg-opacity-90"
                            >
                                Kembali ke Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
