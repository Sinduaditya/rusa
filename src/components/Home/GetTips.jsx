import GetTipsCard from "./GetTIpsCard.jsx";

function GetTips() {
    return (
        <>
            {/* Bagian Tips */}
            <div className="justify-center grid gap-6 md:gap-0 md:flex font-poppins max-w-screen-lg mx-auto my-12 px-12 py-6  shadow-2xl md:justify-between">
                {/* bagian Text dan CTA */}
                <div className="text-blue-950 grid gap-4  w-72 h-fit my-auto">
                    <div className="grid gap-2">
                        <h1 className="text-3xl">
                            Dapatkan Tips Wisata dari{" "}
                            <span className="font-bold">Para Travelers</span>
                        </h1>
                        <div className=" px-6">
                            <ul className="list-disc">
                                <li>
                                    <p className="text-sm">Tips berwisata</p>
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
                        href=""
                        className="btn btn-square btn-info text-white w-fit px-4 rounded-full"
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
        </>
    );
}

export default GetTips;
