import WhatsNextCard from "./WhatsNextCard.jsx";

function WhatsNext(params) {
    return (
        <>
            {/* Mungkin Kamu Suka - Start */}
            <section className="bg-transparent">
                <div className="grid gap-4 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
                            <a
                                href={`/explore/`}
                                className="underline text-sm text-secondary"
                            >
                                Lihat Semua
                            </a>
                        </div>
                    </div>
                    {/* Mungkin Kamu Suka - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    {/* Mungkin Kamu Suka - Bagian Card */}
                    <div className="grid w-full px-2 md:flex gap-4 justify-center">
                        <WhatsNextCard />
                    </div>
                    <div className="flex w-full justify-end md:hidden">
                        <a
                            href={`/explore/`}
                            className="underline text-sm text-secondary"
                        >
                            Lihat Semua
                        </a>
                    </div>
                </div>
            </section>
            {/* Mungkin Kamu Suka - End */}
        </>
    );
}

export default WhatsNext;
