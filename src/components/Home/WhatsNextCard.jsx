import JatimPark from "../../assets/jatim-park-2.jpg";
import Love2 from "../../assets/heartko.svg";
import React from "react";
// import ZeroLove from "../assets/heartko.svg";

function PopDestiCard() {
    return (
        <>
            {/* Card dari Destinasi Populer */}
            <a href="">
                <div className="card card-compact w-full relative">
                    <figure className="relative">
                        <img
                            src={JatimPark}
                            className="rounded-3xl  w-90"
                            alt="Shoes"
                        />
                        <div className="absolute rounded-3xl top-1 right-2 mt-2 mr-2 bg-white ">
                            <img src={Love2} className="h-5 w-5 m-1" alt="" />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Jatim Park</h2>
                        <div className="flex gap-3">
                            <div className="rating rating-sm">
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange"
                                />
                            </div>
                            <p className="text-secondary">224</p>
                        </div>
                    </div>
                </div>
            </a>
            {/* End Card dari Destinasi Populer */}
        </>
    );
}

export default PopDestiCard;
