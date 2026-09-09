import WhatsNextCard from "./WhatsNextCard.jsx";
import { Link } from "react-router-dom";

function WhatsNext() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container-app">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-8 sm:mb-10">
                    <div>
                        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">
                            Rekomendasi
                        </p>
                        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight">
                            Mungkin Kamu Suka
                        </h2>
                    </div>
                    <Link
                        to="/explore"
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

                {/* Horizontal Scroll */}
                <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto scrollbar-hide">
                        <WhatsNextCard />
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 sm:hidden">
                    <Link
                        to="/explore"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/20 text-primary font-medium text-sm hover:bg-primary/5 transition-colors focus-ring"
                    >
                        Lihat Semua Destinasi
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

export default WhatsNext;
