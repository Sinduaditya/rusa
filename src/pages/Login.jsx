import LoginImg from "../assets/login/login.svg";
import message from "../assets/login/sms.svg";
import lock from "../assets/login/lock.svg";
import eye from "../assets/login/eye-slash.svg";
import google from "../assets/login/google.svg";
import fb from "../assets/login/facebook.svg";
function Login(){
    return (
        <>
            <div className="font-poppins bg-bluelight">
                <div className="grid md:grid-cols-3 items-center lg:gap-10 gap-4">
                    <div className="max-md:order-1 h-screen min-h-full">
                        <img
                            src={LoginImg}
                            className="w-full h-full object-cover"
                            alt="login-image"
                        />
                    </div>
                    <form className="md:col-span-2 max-w-lg w-full p-6 mx-auto">
                        <div
                            className='main-container  rounded-[64px]  flex w-[544px] pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[8px] justify-center items-center flex-nowrap  mx-auto my-0'>
                            <div
                                className='flex w-[480px] flex-col gap-[40px] items-start shrink-0 flex-nowrap '>
                                <div
                                    className='flex w-[480px] flex-col gap-[48px] items-start shrink-0 flex-nowrap  '>
                                    <div
                                        className='flex w-[480px] flex-col items-start shrink-0 flex-nowrap  '>
                                        <span
                                            className="flex w-[480px] h-[60px] justify-start items-start shrink-0 basis-auto font-poppins text-[40px] font-bold leading-[60px] text-[#304862]  text-left whitespace-nowrap ">
                                        Welcome Back
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className='flex w-[480px] flex-col gap-[24px] items-start shrink-0 flex-nowrap '>
                                    <div
                                        className='flex w-[480px] flex-col gap-[10px] items-start shrink-0 flex-nowrap'>
                                     <span
                                         className="h-[30px] shrink-0 basis-auto font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#304862] text-left whitespace-nowrap">
                                      Email
                                     </span>
                                        <div
                                            className='flex w-[480px] h-[64px] pt-0 pr-[32px] pb-0 pl-[32px] flex-col gap-[8px] justify-center items-start shrink-0 flex-nowrap  rounded-[9px] border-solid border-2 border-[#8c9fb5]  overflow-hidden '>
                                            <div
                                                className='flex w-[295px] gap-[24px] items-center shrink-0 flex-nowrap  '>
                                                <div className='w-[24px] h-[24px] shrink-0'>
                                                    <img src={message} alt=""/>
                                                </div>
                                                <span
                                                    className="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#8c9fb5]  text-left whitespace-nowrap ">
                                                  michelle.rivera@example.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='flex w-[480px] flex-col gap-[10px] items-start shrink-0 flex-nowrap'>
                                    <div
                                        className='flex justify-between items-center self-stretch shrink-0 flex-wrap'>
                                    <span
                                        className="h-[30px] basis-auto  text-[20px] font-medium leading-[30px] text-[#304862] text-left whitespace-nowrap z-[14]">
                                            Password
                                    </span>
                                        <span
                                            className="h-[18px] basis-auto font-['Poppins'] text-[11px] font-normal leading-[17.798px] text-[#00b5ef] tracking-[0.03px]  text-left underline whitespace-nowrap ">
                                            Forgot Password?
                                        </span>
                                    </div>
                                    <div
                                        className='flex w-[480px] h-[64px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[209px] items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.6)] rounded-[9px] border-solid border-2 border-[#8c9fb5]  overflow-hidden '>
                                        <div
                                            className='flex w-[416px] justify-between items-center shrink-0 flex-nowrap '>
                                            <div
                                                className='flex w-[167px] gap-[24px] items-center shrink-0 flex-nowrap '>
                                                <div className='w-[24px] h-[24px] shrink-0 '>
                                                    <img src={lock} alt=""/>
                                                </div>
                                                <span
                                                    className="h-[24px] shrink-0 basis-auto  text-[16px] font-medium leading-[24px] text-[#8c9fb5]  text-left whitespace-nowrap ">
                                                ••••••••••••••••
                                                </span>
                                            </div>
                                            <div className='w-[24px] h-[24px] shrink-0 '>
                                                <img src={eye} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='flex w-[457px] gap-[16px] items-start shrink-0 flex-nowrap  z-[28]'>
                                    <button
                                        className='flex w-[210px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#8c9fb5]  pointer'>
                                        <img src={google} alt=""/>
                                        <span
                                            className="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#304862]  text-left whitespace-nowrap ">
                                            Sign in with Google
                                         </span>
                                    </button>
                                    <button
                                        className='flex w-[231px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#316ff6] rounded-[8px] border-none  pointer'>
                                        <img src={fb} alt=""/>
                                        <span
                                            className="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#fff]  text-left whitespace-nowrap ">
                                        Sign in with Facebook
                                         </span>
                                    </button>
                                </div>
                                <button
                                    className='flex w-[480px] pt-[20px] pr-[16px] pb-[20px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#9382f2] rounded-[8px] border-none  pointer'>
                                    <span
                                            className="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-bold leading-[24px] text-[#fff]  text-left whitespace-nowrap ">
                                            Sign In
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;