import AboutSection from "../../assets/about/aboutSection.svg";

function AboutUs(){
    return(
        <>
            <div className="relative z-10">
                <section
                    className="overflow-hidden rounded-[48px] bg-white bg-opacity-40 border-2 border-white border-opacity-50 backdrop-blur-3xl mt-[20px] relative z-20  font-poppins">
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap items-center justify-evenly">
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <h2 className="mb-1 text-5xl font-bold">
                                        Portal Digital Wisata <span className="text-primary">Jawa Timur</span>
                                    </h2>
                                    <p className="mt-10 text-midnight font-medium">
                                        DolanRek membawa anda menemukan pesona Jawa Timur secara digital dengan
                                        inovasi terkini,
                                        memberikan akses yang lebih mudah dan informatif kepada masyarakat untuk
                                        lebih mengenal Jawa Timur,
                                        serta mendukung pertumbuhan pariwisata di wilayah ini.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="py-20 pl-4">
                                    <img src={AboutSection} alt=""
                                         className="w-full  h-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="w-32 h-32 md:w-72 md:h-72 -right-[10px] md:-right-[80px] -top-[40px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>
                <div
                    className="w-36 h-36 md:w-40 md:h-40 -left-[100px] md:-right-[90px] -bottom-[70px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100"/>

            </div>
        </>
    );
}
export default AboutUs;