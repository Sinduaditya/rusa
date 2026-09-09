import AboutSection from "../../assets/about/image_about.png";

function AboutUs() {
    return (
        <section className="relative px-6 pt-24 pb-16 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                                TENTANG KAMI
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight">
                                Portal Digital Wisata{" "}
                                <span className="text-primary">Jawa Timur</span>
                            </h2>
                            <p className="mt-6 text-gray-600 leading-relaxed font-body">
                                DolanRek membawa anda menemukan pesona Jawa Timur
                                secara digital dengan inovasi terkini, memberikan
                                akses yang lebih mudah dan informatif kepada
                                masyarakat untuk lebih mengenal Jawa Timur, serta
                                mendukung pertumbuhan pariwisata di wilayah ini.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex-1 flex justify-center">
                            <img
                                src={AboutSection}
                                alt="About DolanRek"
                                className="w-full max-w-md h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
