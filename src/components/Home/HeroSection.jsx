import Hero from "../../assets/hero.jpg";
import Loc from "../../assets/location.svg";
import Nature from "../../assets/naturev2.svg";
import Landmark from "../../assets/landmark.svg";
import Culinary from "../../assets/culinary.svg";

const categories = [
    { icon: Nature, label: "Nature", desc: "Destinasi Wisata" },
    { icon: Landmark, label: "Landmark", desc: "Destinasi Kota" },
    { icon: Culinary, label: "Culinary", desc: "Destinasi Kuliner" },
];

function HeroSection() {
    return (
        <section className="relative">
            {/* Hero Image */}
            <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden">
                <img
                    src={Hero}
                    alt="Kawah Ijen, Jawa Timur"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
                    <div className="max-w-2xl">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md mb-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img src={Loc} className="w-3.5 h-3.5" alt="" />
                            <span className="text-white/90 text-xs font-medium tracking-wide">
                                Gunung Kawah Ijen, Jawa Timur
                            </span>
                        </div>
                        <h1
                            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Jelajahi Pesona
                            <br />
                            <span className="text-primary-400">Jawa Timur</span>
                        </h1>
                        <p
                            className="mt-4 text-white/80 text-sm sm:text-base max-w-md leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Temukan destinasi wisata terbaik, kuliner khas, dan
                            pengalaman tak terlupakan di Jawa Timur.
                        </p>
                    </div>
                </div>
            </div>

            {/* Category Bar */}
            <div
                className="relative -mt-8 mx-4 sm:mx-6 lg:mx-8 z-10"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <div className="glass-strong rounded-2xl shadow-elevated p-4 sm:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {/* Title */}
                        <div className="flex items-center">
                            <h3 className="font-display font-bold text-base sm:text-lg text-midnight leading-snug">
                                Feel the
                                <br />
                                Local Experience
                            </h3>
                        </div>

                        {/* Categories */}
                        {categories.map((cat) => (
                            <div
                                key={cat.label}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors cursor-pointer group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                                    <img
                                        src={cat.icon}
                                        className="w-6 h-6"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-midnight">
                                        {cat.label}
                                    </p>
                                    <p className="text-xs text-secondary">
                                        {cat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
