import Ai from "../../assets/home/ai.svg";

function IntroAi() {
    return (
        <>
            <div className=" border main-container flex w-[1024px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] justify-between items-center flex-nowrap rounded-[48px] relative mx-auto my-0">
                <div className="flex w-[960px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] justify-between items-center shrink-0 flex-nowrap relative">
                    <div className=" w-[304px] h-[304px] shrink-0 bg-[url(../assets/images/c1a7348b-5e3a-411f-8aba-0e9e0d229855.png)] bg-cover bg-no-repeat relative z-[1]" />
                    <div className="border flex w-[425px] flex-col gap-[48px] justify-center items-end shrink-0 flex-nowrap relative z-[2]">
                        <div className="flex w-[425px] flex-col gap-[24px] items-end shrink-0 flex-nowrap relative z-[3]">
                            <div className="w-[425px] shrink-0 font-['Poppins'] text-[43px] font-bold leading-[43px] tracking-[0.13px] relative text-right z-[4]">
                                <span className="font-['Poppins'] text-[43px] font-bold leading-[43px] text-[#031d39] tracking-[0.13px] relative text-right">
                                    Liburan Cerdas Bersama Halo
                                </span>
                                <span className="font-['Poppins'] text-[43px] font-bold leading-[43px] tracking-[0.13px] relative text-right">
                                    Rek
                                </span>
                                <span className="font-['Poppins'] text-[43px] font-bold leading-[43px] tracking-[0.13px] relative text-right">
                                    AI
                                </span>
                            </div>
                            <div className="w-[339px] shrink-0 font-['Poppins'] text-[14px] font-normal leading-[22.652px] tracking-[0.04px] relative text-right z-[5]">
                                <span className="font-['Poppins'] text-[14px] font-normal leading-[22.652px] text-[#304862] tracking-[0.04px] relative text-right">
                                    Jelajahi Pesona Jawa Timur dengan Lebih
                                    Mudah dan Efektif bersama
                                </span>
                                <span className="font-['Poppins'] text-[14px] font-bold leading-[22.652px] tracking-[0.04px] relative text-right">
                                    AI Assistance
                                </span>
                                <span className="font-['Poppins'] text-[14px] font-normal leading-[22.652px] text-[#304862] tracking-[0.04px] relative text-right">
                                    kami, Sahabat Terpercaya yang Siap Membantu
                                    Merencanakan Perjalanan Impianmu
                                </span>
                            </div>
                        </div>
                        <button className="flex w-[114px] pt-[8px] pr-[32px] pb-[8px] pl-[32px] gap-[10px] items-start shrink-0 flex-nowrap rounded-[48px] border-none relative z-[6] pointer">
                            <span className="h-[23px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[22.652px] text-[#fff] tracking-[0.04px] relative text-left whitespace-nowrap z-[7]">
                                Explore
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntroAi;
