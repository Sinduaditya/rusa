import { useState } from "react";
import LoginImg from "../assets/login/login.svg";
import message from "../assets/login/sms.svg";
import lock from "../assets/login/lock.svg";
import eyeSlash from "../assets/login/eye-slash.svg";
import google from "../assets/login/google.svg";
import fb from "../assets/login/facebook.svg";
import {Link} from "react-router-dom";

function ImageLogin() {
    return (
        <div className="max-md:order-1 h-screen min-h-full">
            <img
                src={LoginImg}
                className="w-full h-full object-cover"
                alt="login-image"
            />
        </div>
    );
}

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="font-poppins bg-bluelight">
            <div className="grid md:grid-cols-3 items-center lg:gap-10 gap-4">
                <ImageLogin />
                <div className="w-full h-full md:col-span-2">
                    <div className="rounded-[64px]  w-screen  flex md:w-[544px] py-12 flex-col gap-[8px] justify-center items-center flex-nowrap md:mx-auto my-0">
                        <form className="">
                            <div className="flex w-screen px-6 md:w-[480px] flex-col gap-6 items-start shrink-0 flex-nowrap">
                                <div className="flex md:w-[480px] flex-col gap-[48px] items-start shrink-0">
                                    <h1 className="font-poppins text-[40px] font-bold leading-[60px] text-midnight">
                                        Welcome Back
                                    </h1>
                                </div>
                                <div className="w-full flex flex-col gap-[24px] items-start shrink-0 flex-nowrap ">
                                    <div className="w-full flex flex-col gap-[10px] items-start shrink-0 flex-nowrap">
                                        <label
                                            htmlFor="email"
                                            className="h-[30px] shrink-0 basis-auto font-poppins text-[20px] font-medium leading-[30px] text-[#304862] text-left whitespace-nowrap"
                                        >
                                            Email
                                        </label>
                                        <div className="w-full bg-white flex h-[64px] px-4 gap-2 justify-left items-start rounded-[9px] border-solid border-2 border-[#8c9fb5] overflow-hidden">
                                            <div className="grid px-4 h-full shrink-0 content-center">
                                                <img
                                                    src={message}
                                                    className="w-6 h-6"
                                                    alt=""
                                                />
                                            </div>
                                            <input
                                                id="email"
                                                className="h-16 w-full font-poppins text-[16px] font-medium leading-[24px] text-[#8c9fb5] text-left whitespace-nowrap"
                                                placeholder="michie@member.jkt48.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-[10px] items-start shrink-0 flex-nowrap">
                                    <div className="flex justify-between items-center self-stretch shrink-0 flex-wrap">
                                        <span
                                            className="h-[30px] basis-auto  text-[20px] font-medium leading-[30px] text-[#304862] text-left whitespace-nowrap z-[14]">
                                            Password
                                        </span>
                                        <span
                                            className="h-[18px] basis-auto font-poppins text-[11px] font-normal leading-[17.798px] text-[#00b5ef] tracking-[0.03px]  text-left underline whitespace-nowrap ">
                                            Forgot Password?
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-white flex h-[64px] px-4 gap-2 justify-left items-start rounded-[9px] border-solid border-2 border-[#8c9fb5] overflow-hidden">
                                        <div className="grid px-4 h-full shrink-0 content-center">
                                            <img
                                                src={lock}
                                                className="w-6 h-6"
                                                alt=""
                                            />
                                        </div>
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            id="password"
                                            className="h-16 w-full font-poppins text-[16px] font-medium leading-[24px] text-[#8c9fb5] text-left whitespace-nowrap"
                                            placeholder="••••••••••••••••"
                                        />
                                        <div
                                            className="grid px-4 h-full shrink-0 content-center"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <img
                                                src={
                                                    showPassword
                                                        ? eyeSlash
                                                        : eyeSlash
                                                }
                                                className="w-6 h-6 cursor-pointer"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="">Dont have an account yet?
                                    <Link to="/signup" className="pl-2">
                                        <span className="text-primary font-medium">Register</span>
                                    </Link>
                                </p>
                                <div className="grid md:flex w-full md:w-[457px] gap-[16px] items-start shrink-0 flex-nowrap  z-[28]">

                                    <button className="border w-full flex md:w-[210px] items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] justify-center shrink-0 flex-nowrap rounded-[8px] border-solid border-[#8c9fb5]  pointer">
                                        <img src={google} alt="" />
                                        <span className="h-[24px] shrink-0 basis-auto font-poppins text-[14px] font-medium leading-[24px] text-[#304862]  text-left whitespace-nowrap ">
                                            Sign in with Google
                                        </span>
                                    </button>
                                    <button className="flex w-full justify-center md:w-[200px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#316ff6] rounded-[8px] border-none  pointer">
                                        <img src={fb} alt="" />
                                        <span className="h-[24px] shrink-0 basis-auto font-poppins text-[14px] font-medium leading-[24px] text-[#fff]  text-left whitespace-nowrap ">
                                            Sign in with Facebook
                                        </span>
                                    </button>
                                </div>
                                <button className="flex w-full md:w-full pt-[20px] pr-[16px] pb-[20px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#9382f2] rounded-[8px] border-none  pointer">
                                    <span className="h-[24px] shrink-0 basis-auto font-poppins text-[16px] font-bold leading-[24px] text-[#fff]  text-left whitespace-nowrap ">
                                        Sign In
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
