import Bromo from "../assets/gunung-bromo.jpg";
import Star from "../assets/star-1.svg";
// import ZeroLove from "../assets/heartko.svg";

function PopDestiCard() {
    return (
        <>
            {/* Card dari Destinasi Populer */}
            <a href="">
                <div className="inline-grid gap-1">
                    {/* Start Gambar */}
                    <div>
                        <img
                            className="w-[304px] h-[175px] rounded-3xl"
                            src={Bromo}
                            alt=""
                        />
                    </div>
                    {/* end Gambar */}
                    {/* Start Keterangan */}
                    <div className="font-poppins">
                        <h1 className="text-xl font-poppins font-semibold text-sky-950">
                            Kawah Ijen
                        </h1>
                        <div className="flex gap-2">
                            <div className="flex">
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                            </div>
                            <p>224</p>
                        </div>
                    </div>
                </div>
            </a>
            {/* End Card dari Destinasi Populer */}
        </>
    );
}

export default PopDestiCard;
