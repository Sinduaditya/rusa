import { useState, useEffect } from "react";
import message from "../assets/login/sms.svg";
import user from "../assets/login/user-square.svg";
import lock from "../assets/login/lock.svg";
import eyeSlash from "../assets/login/eye-slash.svg";
import eye from "../assets/login/eye-slash.svg";
import google from "../assets/login/google.svg";
import fb from "../assets/login/facebook.svg";
import { Link } from "react-router-dom";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Side - Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#F4F9FF] items-center justify-center p-8">
                <img
                    src="/src/assets/login/signup.svg"
                    alt=""
                    className="w-full h-auto max-h-[90vh] object-contain"
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <div
                    className={`w-full max-w-md transition-all duration-700 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                            Create Account
                        </h1>
                        <p className="mt-2 text-gray-500">
                            Daftar akun baru untuk memulai petualangan
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <img src={message} alt="" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                    placeholder="michie@member.jkt48.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <img src={user} alt="" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                    placeholder="Michelle Alexandra"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <img src={lock} alt="" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-14 pl-12 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                    placeholder="••••••••••••••••"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <img src={showPassword ? eye : eyeSlash} alt="" className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary font-semibold hover:text-primary-600">
                                Login
                            </Link>
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                                <img src={google} alt="" className="h-5 w-5" />
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-[#316ff6] rounded-xl text-sm font-medium text-white hover:bg-[#2d63d9] transition-all">
                                <img src={fb} alt="" className="h-5 w-5" />
                                Facebook
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-400">atau</span>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-md shadow-primary/25">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
