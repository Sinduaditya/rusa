import Bromo from "../assets/gunung-bromo.jpg";

function GetTipsCard() {
    return (
        <>
            <a href="">
                <div className="flex px-2 py-2 gap-2 max-w-sm">
                    <img
                        src={Bromo}
                        className="w-24 h-24 items-center rounded-2xl"
                    />
                    {/* Caption dan Keterangan */}
                    <div className="grid ">
                        <div className="">
                            <p className="text-secondary text-xs">Alam</p>
                            <h1 className="text-blue-950 text-base font-semibold">
                                Merasakan Ketenangan di Pantai Teluk Hijau
                            </h1>
                        </div>
                        <p className="text-secondary text-xs">Toni Wijaya</p>
                    </div>
                    {/* Caption dan Keterangan */}
                </div>
            </a>
        </>
    );
}

export default GetTipsCard;
