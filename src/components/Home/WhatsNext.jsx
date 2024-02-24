import WhatsNextCard from "./WhatsNextCard.jsx";

function WhatsNext(params) {
    return (
        <>
            {/* Mungkin Kamu Suka - Start */}
            <div className="grid gap-8 md:gap-2 font-poppins max-w-screen-lg mx-auto my-6">
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
                    <div className="flex flex-wrap place-self-center">
                        <a href="" className="underline text-sm text-secondary">
                            Lihat Semua
                        </a>
                    </div>
                </div>
                {/* Mungkin Kamu Suka - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                {/* Mungkin Kamu Suka - Bagian Card */}
                <div className="grid w-full px-8 md:p-0 md:flex gap-4 justify-center">
                    <WhatsNextCard />
                    <WhatsNextCard />
                    <WhatsNextCard />
                    <WhatsNextCard />
                </div>
            </div>
            {/* Mungkin Kamu Suka - End */}
        </>
    );
}

export default WhatsNext;