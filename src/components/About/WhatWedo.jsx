import Inspire from "../../assets/about/search-normal.svg";
import Recomend from "../../assets/about/location-tick.svg";
import Educate from "../../assets/about/lamp-on.svg";

const services = [
    {
        icon: Inspire,
        title: "Inspire",
        description: "Membangkitkan minat wisata domestik",
    },
    {
        icon: Recomend,
        title: "Recommend",
        description: "Menyajikan pilihan tempat wisata terbaik",
    },
    {
        icon: Educate,
        title: "Educate",
        description: "Mengupas budaya & sejarah secara menarik",
    },
];

function WhatWedo() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                        LAYANAN KAMI
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                        What We <span className="text-primary">Do?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <img
                                    src={service.icon}
                                    alt=""
                                    className="w-10 h-10"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 font-display mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatWedo;
