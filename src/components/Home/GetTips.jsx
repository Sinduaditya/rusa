import GetTipsCard from "./GetTIpsCard.jsx";

function GetTips() {
    return (
        <>
            <div className="relative z-10">
                {/* Bagian Tips */}
                <div className="justify-center grid gap-6 md:gap-0 md:flex font-poppins max-w-screen-lg mx-auto my-12 px-12 py-6 bg-white bg-opacity-40 rounded-3xl border-2 border-white border-opacity-50 backdrop-blur-4xl md:justify-between">
                    {/* bagian Text dan CTA */}
                    <div className="text-blue-950 grid gap-16  mt-10 w-72 h-full my-auto">
                        <div className="grid gap-2">
                            <h1 className="text-3xl font-medium">
                                Dapatkan Tips Wisata dari{" "}
                                <span className="font-bold  italic">
                                    Para Travelers
                                </span>
                            </h1>
                            <div className=" px-6">
                                <ul className="list-disc grid gap-2">
                                    <li>
                                        <p className="text-sm">
                                            Tips berwisata
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-sm">
                                            Spot foto terbaik di Jawa Timur
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href={"/explore/"}
                            className="btn btn-square btn-info text-white w-fit px-8 rounded-full"
                        >
                            Explore Stories
                        </a>
                    </div>
                    {/* bagian Text dan CTA */}
                    {/* Bagian Item  of Tips*/}
                    <div>
                        <GetTipsCard />
                    </div>
                    {/* END Bagian Item  of Tips*/}
                </div>
                {/* END OF Bagian Tips */}

                {/* blobs */}
                <div className="w-56 h-56 sm:w-80 sm:h-80 -right-[10px] -top-[50px] bg-gradient-to-tl from-blob to-skyblue z-[-1] rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
                <div className="w-36 h-36 sm:w-72 sm:h-72 -left-[20px] sm:-right-[100px] -bottom-[90px] lg:-bottom-[170px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-[-1] rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
                {/* blobs */}
            </div>
        </>
    );
}

export default GetTips;
