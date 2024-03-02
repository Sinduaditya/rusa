import Cry from "../assets/notfound/cry.svg";
function NotFound(){
    return(
        <>
            <div className="relative z-20">
                <div
                    className=' bg-glass bg-opacity-70 mt-36 main-container px-16 flex w-[669px] pt-[48px] pr-[40px] pb-[48px] pl-[40px] gap-[48px] items-center flex-nowrap  rounded-[48px] z-20 relative mx-auto my-0'>
                    <div
                        className="w-56 h-56 sm:w-60 sm:h-60 -left-[100px] -top-[50px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>
                    <div
                        className="w-36 h-36 sm:w-48 sm:h-48 -right-[10px] sm:-right-[80px] -bottom-[65px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>

                    <div className='flex w-[589px] flex-col gap-[32px] items-center shrink-0 flex-nowrap relative'>
                        <img src={Cry} alt=""/>
                        <div
                            className='flex w-[589px] flex-col gap-[40px] items-center shrink-0 flex-nowrap relative z-[12]'>
                            <div
                                className='flex w-[589px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-[13]'>
                            <span
                                className="h-[46px] shrink-0 basis-auto font-['Poppins'] text-[34px] font-bold leading-[45.56px] text-[#304862] tracking-[0.1px] relative text-left whitespace-nowrap z-[14]">
                                 Yah, Halaman Tidak Ditemukan
                             </span>
                                <span
                                    className="flex w-[589px] h-[46px] justify-center items-start shrink-0 font-['Poppins'] text-[14px] font-normal leading-[22.652px] text-[#8c9fb5] tracking-[0.04px] relative text-center overflow-hidden z-[15]">
                                 Maaf atas ketidaknyamanannya. Tampaknya Anda mencoba mengakses
                                 halaman
                                <br/>
                                yang telah dihapus atau bahkan tidak pernah ada.
                            </span>
                            </div>
                            <button
                                className='flex w-[213px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#00b5ef] rounded-[48px] border-none relative z-[16] pointer'>
                            <span
                                className="flex w-[165px] h-[23px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[22.652px] text-[#fff] tracking-[0.04px] relative text-center whitespace-nowrap z-[17]">
                                    Kembali ke Homepage
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;