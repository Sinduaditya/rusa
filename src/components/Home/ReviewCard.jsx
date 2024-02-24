import React, { useEffect, useState } from "react";
import Quote from "../../assets/quote-down.svg";
import { reviewUser } from "../data/reviewUser";

function ReviewCard() {
    const [destination, setDestinations] = useState([]);

    useEffect(() => {
        const limitedReview = reviewUser.slice(0, 3);
        setDestinations(limitedReview);
    });
    return (
        <>
            {destination.map((review) => (
                <div className="w-fit h-36 bg-gradient-to-r from-blue-400 via-blue-300 to-transparent p-0.5 rounded-2xl">
                    <div className="grid bg-white w-fit h-full p-4 rounded-2xl justify-between">
                        <img src={Quote} alt="" />
                        <h1 className="text-xs font-semibold text-secondary">
                            {review.review}
                        </h1>
                        <p className="text-secondary text-xs font-bold">
                            {review.name}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ReviewCard;
