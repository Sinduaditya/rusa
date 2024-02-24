import Quote from "../../assets/quote-down.svg";

function ReviewCard() {
    return (
        <>
            <div className="w-fit h-36 bg-gradient-to-r from-blue-400 via-blue-300 to-transparent p-0.5 rounded-2xl">
                <div className="grid bg-white w-fit h-full p-4 rounded-2xl justify-between">
                    <img src={Quote} alt="" />
                    <h1 className="text-xs font-semibold text-secondary">
                        Simpel dan efektif! DolanRek membuat perjalanan wisata
                        saya di Jawa Timur lebih menyenangkan. Terima kasih,
                        DolanRek!
                    </h1>
                    <p className="text-secondary text-xs font-bold">
                        Ryan Pratama
                    </p>
                </div>
            </div>
        </>
    );
}

export default ReviewCard;
