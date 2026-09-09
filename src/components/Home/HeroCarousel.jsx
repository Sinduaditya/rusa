import { TypeAnimation } from "react-type-animation";
import Bromo from "../../assets/gunung-bromo-explore.jpg";
import JatimPark from "../../assets/jatim-park-2.jpg";
import Suro from "../../assets/patung-suro-boyo.jpg";
import IconLocation from "../../assets/location2.svg";
import { Link } from "react-router-dom";

function HeroCarousel() {
    return (
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute -left-32 top-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -right-32 bottom-0 w-72 h-72 bg-accent-amber/10 rounded-full blur-3xl" />

            <div className="container-app relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <p
                            className="text-primary font-semibold text-sm tracking-wide uppercase mb-3"
                            data-aos="fade-up"
                        >
                            Mulai Petualanganmu
                        </p>
                        <h2
                            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight leading-tight tracking-tight"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Rasakan
                            <br />
                            Petualangan{" "}
                            <span className="text-primary">
                                <TypeAnimation
                                    sequence={[
                                        "Tanpa Hambatan",
                                        2000,
                                        "Tanpa Batas",
                                        2000,
                                        "Tanpa Ragu",
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                    wrapper="span"
                                />
                            </span>
                        </h2>
                        <p
                            className="mt-5 text-secondary text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Temukan pesona eksklusif Jawa Timur dan mulai
                            rencanakan perjalananmu bersama{" "}
                            <span className="font-bold text-midnight">
                                DolanRek!
                            </span>
                        </p>
                        <div
                            className="mt-8"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Link
                                to="/explore"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-600 shadow-glow hover:shadow-lg transition-all focus-ring"
                            >
                                Explore Sekarang
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
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div
                        className="relative"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main large image */}
                            <div className="relative col-span-1 row-span-2">
                                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-elevated">
                                    <img
                                        src={Bromo}
                                        alt="Gunung Bromo"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                                            <img
                                                src={IconLocation}
                                                className="w-3 h-3"
                                                alt=""
                                            />
                                            <span className="text-white text-[10px] font-medium">
                                                Gunung Bromo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Jatim Park */}
                            <div className="relative col-span-1">
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                                    <img
                                        src={JatimPark}
                                        alt="Jatim Park 2"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    <div className="absolute bottom-3 left-3">
                                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/20 backdrop-blur-md">
                                            <img
                                                src={IconLocation}
                                                className="w-3 h-3"
                                                alt=""
                                            />
                                            <span className="text-white text-[10px] font-medium">
                                                Jatim Park 2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Patung Sura */}
                            <div className="relative col-span-1">
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                                    <img
                                        src={Suro}
                                        alt="Patung Sura dan Baya"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    <div className="absolute bottom-3 left-3">
                                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/20 backdrop-blur-md">
                                            <img
                                                src={IconLocation}
                                                className="w-3 h-3"
                                                alt=""
                                            />
                                            <span className="text-white text-[10px] font-medium">
                                                Patung Sura & Baya
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroCarousel;
