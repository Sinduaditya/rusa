import GetTipsCard from "./GetTIpsCard.jsx";
import { Link } from "react-router-dom";

function GetTips() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container-app">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-8 sm:mb-10">
                    <div>
                        <p
                            className="text-primary font-semibold text-sm tracking-wide uppercase mb-2"
                            data-aos="fade-up"
                        >
                            Rekomendasi
                        </p>
                        <h2
                            className="font-display text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Mungkin Kamu{" "}
                            <span className="text-primary italic">Suka</span>
                        </h2>
                    </div>
                    <Link
                        to="/stories"
                        className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-600 transition-colors focus-ring"
                    >
                        Lihat Semua
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Carousel */}
                <GetTipsCard />

                {/* Mobile CTA */}
                <div className="mt-6 sm:hidden">
                    <Link
                        to="/stories"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/20 text-primary font-medium text-sm hover:bg-primary/5 transition-colors focus-ring"
                    >
                        Lihat Semua Cerita
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default GetTips;
