import ReviewCard from "./ReviewCard.jsx";

function Review() {
    return (
        <>
            <div className="relative z-10">
                {/* Review - Start */}
                <div className="justify-center grid gap-4 font-poppins max-w-screen-lg mx-auto my-12 px-12 py-6  md:justify-between bg-white bg-opacity-40 rounded-3xl border-2 border-white border-opacity-50 backdrop-blur-4xl">
                    {/* Review - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    <div className="flex w-full justify-between">
                        <div className="grid gap-1">
                            <h1 className="text-sky-950 font-semibold text-2xl">
                                Apa kata Traveler tentang DolanRek?
                            </h1>
                            <p className="text-xs text-secondary">
                                Beberapa testimonial tentang pengalaman mereka
                                menggunakan DolanRek
                            </p>
                        </div>
                        <div className="hidden lg:flex flex-wrap place-self-center">
                            <a
                                href={`/about#review`}
                                className="underline text-sm text-secondary"
                            >
                                Lihat Semua
                            </a>
                        </div>
                    </div>
                    {/* Review - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    {/* Review - Bagian Card */}
                    <div className="grid md:flex gap-2 md:gap-4">
                        <ReviewCard />
                    </div>
                    <div className="flex flex-wrap place-self-end lg:hidden">
                        <a
                            href={`/about#review`}
                            className="underline text-sm text-secondary"
                        >
                            Lihat Semua
                        </a>
                    </div>
                </div>
                {/* Review - End */}
            </div>
        </>
    );
}

export default Review;
