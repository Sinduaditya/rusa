import AiIllustration from "../../assets/home/aiintro.png";
import { Link } from "react-router-dom";

function IntroAi() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container-app">
                <div className="relative overflow-hidden backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative">
                                <div className="w-[240px] sm:w-[300px] lg:w-[340px] aspect-square relative">
                                    <img
                                        src={AiIllustration}
                                        alt="HaloRek AI Illustration"
                                        className="w-full h-full object-contain animate-float"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 scale-75" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center lg:text-left order-1 lg:order-2">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                                AI ASSISTANT
                            </span>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
                                Liburan Cerdas Bersama{" "}
                                <span className="text-primary">
                                    HaloRek <sup className="text-lg">AI</sup>
                                </span>
                            </h2>
                            <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Jelajahi pesona Jawa Timur dengan lebih mudah
                                bersama AI assistance kami. Perencana
                                perjalanan pribadi yang siap membantu
                                mewujudkan liburan impianmu.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/dolanrek-ai"
                                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-600 shadow-lg shadow-primary/25 transition-all focus-ring"
                                >
                                    Coba Sekarang
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                                <span className="text-gray-400 text-sm">
                                    Gratis untuk semua pengguna
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroAi;
