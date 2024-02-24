import PopDestiCard from "./PopDestiCard.jsx";
import React from "react";

function PopularDestination() {
    return (
        <>
            <section className="bg-transparent">
                <div className=" grid gap-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
                    {/* Destinasi Populer - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                    <div className=" flex w-full justify-between">
                        <div className="">
                            <h1 className="text-sky-950 font-semibold text-2xl">
                                Destinasi Populer
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
                    {/* Destinasi Populer - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}

                    <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 justify-center">
                        {/* sudah difilter di PopDestiCard. hanya tampil yang "Pilihan Terbaik" saja dilimit ke 3 teratas. */}
                        <PopDestiCard />
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
        </>
    );
}

export default PopularDestination;
