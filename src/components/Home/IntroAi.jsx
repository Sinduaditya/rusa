import AiIllustration from "../../assets/home/aiintro.png";
import { Link } from "react-router-dom";
import AOS from 'aos';

function IntroAi() {
    return (
        <>
            <div className="flex justify-center">
                <div className="grid gap-10 lg:gap-48 lg:flex lg:justify-between items-center  max-w-[1024px] p-6 rounded-[48px] mx-auto lg:mx-0">
                <div data-aos="fade-up-right">
                    <div className="w-[304px] h-[304px] bg-cover bg-no-repeat mx-auto ">
                        <img
                            src={AiIllustration}
                            alt="AI Illustration"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div data-aos="fade-up-left">
                    <div className="flex flex-col gap-[24px] max-w-md items-end ">
                        <div className="text-right">
                            <h2 className="font-bold text-[43px] leading-[43px] text-midnight">
                                Liburan Cerdas Bersama{" "}
                                <span className="text-primary">
                                    {" "}
                                    HaloRek <sup>AI</sup>
                                </span>
                            </h2>
                        </div>
                        <p className="text-[14px] leading-[22.652px] text-[#304862] text-right">
                            Jelajahi Pesona Jawa Timur dengan Lebih Mudah dan
                            Efektif bersama{" "}
                            <span className="font-bold text-primary">
                                AI Assistance
                            </span>{" "}
                            kami, Sahabat Terpercaya yang Siap Membantu
                            Merencanakan Perjalanan Impianmu
                        </p>
                        <button className="flex items-center py-2 px-8 rounded-full hover:bg-midnight bg-primary text-white">
                            <Link to={"/dolanrek-ai"}>
                                <span className="text-[14px] font-normal">
                                    Coba Sekarang
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default IntroAi;
