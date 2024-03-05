import WhatsNextCard from "./WhatsNextCard.jsx";

function WhatsNext() {
    return (
        <>
            {/* Mungkin Kamu Suka - Start */}
            <section className="bg-transparent">
                <div className="grid gap-4 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 ">
                    {/* Mungkin Kamu Suka - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    <div className="flex w-full justify-between">
                        <div className="">
                            <h1 className="text-sky-950 font-semibold text-2xl">
                                Mungkin Kamu Suka
                            </h1>
                            <p className="text-xs text-secondary">
                                Rencanakan perjalananmu, Disini!
                            </p>
                        </div>
                        <div className="hidden md:flex md:flex-wrap md:place-self-center">
                            <Link
                                to={`/explore/`}
                                className="underline text-sm text-secondary"
                            >
                                Lihat Semua
                            </Link>
                        </div>
                    </div>
                    {/* Mungkin Kamu Suka - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    {/* Mungkin Kamu Suka - Bagian Card */}
                    <div className="overflow-hidden">
                        <div className="-mx-8 lg:mx-0 grid md:flex justify-center">
                            <WhatsNextCard />
                        </div>
                    </div>

                    <div className="flex w-full justify-end md:hidden">
                        <Link
                            to={`/explore/`}
                            className="underline text-sm text-secondary"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>
            </section>
            {/* Mungkin Kamu Suka - End */}
        </>
    );
}

export default WhatsNext;
