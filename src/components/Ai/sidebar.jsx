import message from "../../assets/ai/message-add.svg";
import add from "../../assets/ai/addmessage.svg";
import up from "../../assets/ai/up.svg";
import compas from "../../assets/ai/compas.svg";
import bed from "../../assets/ai/sleep.svg";
import kereta from "../../assets/ai/kereta.svg";
import  food from "../../assets/ai/coffe.svg";

function Sidebar() {

    return (
        <div className="flex h-screen bg-bluelight pt-10 font-poppins">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-bluelight relative">
                {/* Blob */}
                <div
                    className="absolute top-1/2 -left-[20px] transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-10 rounded-full bg-gradient-to-tl from-blob to-skyblue mix-blend-multiply blur-[200px]"/>

                <div className="flex items-center justify-center h-16">
                    <button
                        className="text-white flex gap-2 rounded-lg pl-[20px] pr-16 items-center py-3 px-12 bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF]">
                        <img src={message} className="h-5 w-5" alt=""/>
                        <span className="pt-1">Chat Baru</span>
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 pl-8 border border-white">
                        <div>
                            <a href="#" className="flex items-center px-4 py-2 text-lg">
                                Hari Ini
                            </a>
                            <ul className="text-md ml-8 mt-5">
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="flex items-center px-4 py-2 text-lg">
                                Bulan Ini
                            </a>
                            <ul className="text-md ml-8 mt-5">
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                                <li className="inline-flex mb-8 items-center gap-2">
                                    <img src={add} className="h-4 w-4" alt=""/>
                                    <p>Bagimana Cara..</p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div
                className="main-container flex w-[616px] flex-col gap-[40px] items-start flex-nowrap relative mx-auto my-0">
                <div className="flex w-[545px] flex-col items-start shrink-0 flex-nowrap relative">
                    <div
                        className="w-[200px] shrink-0 font-['Poppins'] text-[43px] font-bold leading-[64.5px] tracking-[0.13px] relative text-left whitespace-nowrap z-[1]">
                      <span
                            className="font-poppins text-[43px] font-bold leading-[64.5px] text-primary tracking-[0.13px] relative text-left">Halo</span>
                        <span
                            className="font-poppins text-[43px] font-bold leading-[64.5px] tracking-[0.13px] relative text-left">Rek!</span>
                    </div>
                    <span
                        className="h-[51px] shrink-0 basis-auto font-['Poppins'] text-[34px] font-normal leading-[51px] text-[#8c9fb5] tracking-[0.1px] relative text-left whitespace-nowrap z-[2]">Konsultasikan rencanamu disini</span>
                </div>
                <div className="flex w-[616px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[3]">
                    <div className="flex w-[300px] flex-col gap-[16px] items-start shrink-0 flex-nowrap  relative z-[4]">
                        <div
                            className="flex w-[300px] bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF] pt-[24px] pr-[72px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start shrink-0 flex-nowrap rounded-[16px] relative z-[5]">
                            <div
                                className="flex w-[186px] gap-[16px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[6]">
                                <img src={compas} alt=""/>
                                <div
                                    className="flex w-[138px] flex-col justify-center items-start shrink-0 flex-nowrap relative z-[8]">
                                    <span
                                        className="h-[21px] shrink-0 basis-auto  text-[14px] font-bold leading-[21px] text-[#fff] tracking-[0.04px] relative text-left whitespace-nowrap z-[9]">Cari Destinasi</span>
                                    <span
                                        className="h-[17px] shrink-0 basis-auto  text-[11px] font-normal leading-[16.5px] text-[#d7e8ff] tracking-[0.03px] relative text-left whitespace-nowrap z-10">yang baru di Jawa Timur</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex w-[300px] pt-[24px] bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF] pr-[72px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start shrink-0 flex-nowrap rounded-[16px] relative z-[11]">
                            <div
                                className="flex w-[241px] gap-[16px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[12]">
                                <img src={bed} alt=""/>
                                 <div
                                    className="flex w-[193px] flex-col justify-center items-start shrink-0 flex-nowrap relative z-[14]">
                                    <span
                                        className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#fff] tracking-[0.04px] relative text-left whitespace-nowrap z-[15]">Saran Hotel</span>
                                    <span
                                        className="h-[17px] shrink-0 basis-auto font-['Poppins'] text-[11px] font-normal leading-[16.5px] text-[#d7e8ff] tracking-[0.03px] relative text-left whitespace-nowrap z-[16]">yang yang terjangaku di Surabaya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex w-[300px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[17]">
                        <div
                            className="flex w-[300px] pt-[24px] pr-[72px] pb-[24px] pl-[24px] flex-col gap-[8px] bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF] items-start shrink-0 flex-nowrap rounded-[16px] relative z-[18]">
                            <div
                                className="flex w-[240px] gap-[16px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[19]">
                                <img src={kereta} alt=""/>
                                <div
                                    className="flex w-[192px] flex-col justify-center items-start shrink-0 flex-nowrap relative z-[21]">
                                    <span
                                        className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#fff] tracking-[0.04px] relative text-left whitespace-nowrap z-[22]">Angkutan Lokal</span>
                                    <span
                                        className="h-[17px] shrink-0 basis-auto font-['Poppins'] text-[11px] font-normal leading-[16.5px] text-[#d7e8ff] tracking-[0.03px] relative text-left whitespace-nowrap z-[23]">untuk perjalanan keliling surabaya</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex w-[300px] pt-[24px] pr-[72px] pb-[24px] pl-[24px] flex-col gap-[8px] bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF] items-start shrink-0 flex-nowrap rounded-[16px] relative z-[24]">
                            <div
                                className="flex w-[219px] gap-[16px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[25]">
                                <img src={food} alt=""/>
                              <div
                                    className="flex w-[171px] flex-col justify-center items-start shrink-0 flex-nowrap relative z-[27]">
                                    <span
                                        className="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#fff] tracking-[0.04px] relative text-left whitespace-nowrap z-[28]">Kuliner Khas</span>
                                    <span
                                        className="h-[17px] shrink-0 basis-auto font-['Poppins'] text-[11px] font-normal leading-[16.5px] text-[#d7e8ff] tracking-[0.03px] relative text-left whitespace-nowrap z-[29]">untuk pecinta makanan pedas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='main-container flex w-[592px] mt-36  pt-[8px] pr-[8px] pb-[8px] pl-[16px] justify-between items-center flex-nowrap rounded-[16px] border-solid border border-[#304862] relative mx-auto my-0'>
                    <span
                        className="h-[23px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[22.652px] text-[#8c9fb5] tracking-[0.04px] relative text-left whitespace-nowrap">
                         Masukkan perintah di sini
                        </span>
                    <img src={up} className="h-8 w-8 bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF] rounded-xl p-2" alt=""/>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;
