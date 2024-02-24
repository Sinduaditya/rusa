import ReviewCard from "./ReviewCard.jsx";

function Review() {
    return (
        <>
            {/* Review - Start */}
            <div className="grid gap-4 font-poppins max-w-screen-lg mx-auto my-6">
                {/* Review - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                <div className="flex w-full justify-between">
                    <div className="">
                        <h1 className="text-sky-950 font-semibold text-2xl">
                            Apa kata Traveler tentang DolanRek?
                        </h1>
                        <p className="text-xs text-secondary">
                            Beberapa testimonial tentang pengalaman mereka
                            menggunakan DolanRek
                        </p>
                    </div>
                    <div className="flex flex-wrap place-self-center">
                        <a href="" className="underline text-sm text-secondary">
                            Lihat Semua
                        </a>
                    </div>
                </div>
                {/* Review - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                {/* Review - Bagian Card */}
                <div className="grid md:flex gap-2 md:gap-4">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
            {/* Review - End */}
        </>
    );
}

export default Review;
