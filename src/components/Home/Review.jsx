import ReviewCard from "./ReviewCard.jsx";
import { Link } from "react-router-dom";

function Review() {
    return (
        <>
            <div className="relative z-10 border-transparent">
                {/* Review - Start */}
                <div className="justify-center grid gap-4 font-poppins max-w-screen-lg mx-auto  px-12 py-12  md:justify-between bg-glass bg-opacity-70 rounded-[64px] border-2 border-white border-opacity-50 backdrop-blur-4xl">
                    {/* Review - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    <div className="flex w-full justify-between ">
                        <div className="grid gap-1">
                            <h1 className="text-sky-950 pt-8 font-semibold text-2xl">
                                Apa kata Traveler tentang DolanRek?
                            </h1>
                            <p className="text-xs text-secondary">
                                Beberapa testimonial tentang pengalaman mereka
                                menggunakan DolanRek
                            </p>
                        </div>
                        <div className="hidden lg:flex flex-wrap place-self-center">
                            <Link
                                to={`/about#review`}
                                className="underline text-sm text-secondary"
                            >
                                Lihat Semua
                            </Link>
                        </div>
                    </div>
                    {/* Review - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    {/* Review - Bagian Card */}
                    <div className="grid md:flex gap-2 md:gap-4">
                        <ReviewCard />
                    </div>
                    <div className="flex flex-wrap place-self-end lg:hidden">
                        <Link
                            to={`/about#review`}
                            className="underline text-sm text-secondary"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>
                {/* Review - End */}
            </div>
        </>
    );
}

export default Review;
