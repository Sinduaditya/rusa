import Hero from "../../assets/hero.jpg";
import Star from "../../assets/fullstar.svg";
import ZeroLove from "../../assets/heartko.svg";
import PopDestiCard from "./PopDestiCard.jsx";
import KawahWurung from "../../assets/kawah-wurung.jpg";
import Love2 from "../../assets/heartko.svg";
import React from "react";

function PopularDestination() {
    return (
        <>
            <section className="bg-transparent">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="flex justify-between">
                        <h2 className="text-left text-4xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                            Destinasi Populer
                        </h2>
                        <a href="#" className="text-secondary pt-4 text-sm underline">Lihat Semua</a>
                    </div>

                    <p className="text-left font-light text-secondary mt-2">Kunjungi tempat populer pilihan travellers</p>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 justify-center">
                        <PopDestiCard/>
                        <PopDestiCard/>
                        <PopDestiCard/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularDestination;
