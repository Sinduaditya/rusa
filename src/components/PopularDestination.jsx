import Hero from "../assets/hero.jpg";
import Star from "../assets/fullstar.svg";
import ZeroLove from "../assets/heartko.svg";
import PopDestiCard from "./PopDestiCard";

function PopularDestination() {
    return (
        <>
            {/* Destinasi Populer - Start */}
            <div className="grid gap-2 font-poppins max-w-screen-lg mx-auto my-6">
                {/* Destinasi Populer - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                <div className="flex w-full justify-between">
                    <div className="">
                        <h1 className="text-sky-950 font-semibold text-2xl">
                            Destinasi Populer
                        </h1>
                        <p className="text-xs text-secondary">
                            Kunjungi tempat populer pilihan travelllers
                        </p>
                    </div>
                    <div className="flex flex-wrap place-self-center">
                        <a href="" className="underline text-sm text-secondary">
                            Lihat Semua
                        </a>
                    </div>
                </div>
                {/* Destinasi Populer - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}
                {/* Destinasi Populer - Bagian Card */}
                <div className="flex gap-4">
                    <PopDestiCard />
                    <PopDestiCard />
                    <PopDestiCard />
                </div>
            </div>
            {/* Destinasi Populer - End */}
        </>
    );
}

export default PopularDestination;
