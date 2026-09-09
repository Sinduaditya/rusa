import ReviewCard from "./ReviewCard.jsx";
import { Link } from "react-router-dom";

function Review() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container-app">
                <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl bg-gradient-to-br from-primary-50 to-surface p-8 sm:p-12 lg:p-14 border border-primary/10">
                    {/* Decorative */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
                            <div>
                                <p
                                    className="text-primary font-semibold text-sm tracking-wide uppercase mb-2"
                                    data-aos="fade-up"
                                >
                                    Testimoni
                                </p>
                                <h2
                                    className="font-display text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    Apa Kata Traveler tentang DolanRek?
                                </h2>
                            </div>
                            <Link
                                to="/about#review"
                                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-600 transition-colors focus-ring shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="200"
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

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            <ReviewCard />
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-6 sm:hidden">
                            <Link
                                to="/about#review"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/20 text-primary font-medium text-sm hover:bg-primary/5 transition-colors focus-ring"
                            >
                                Lihat Semua Review
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
                </div>
            </div>
        </section>
    );
}

export default Review;
