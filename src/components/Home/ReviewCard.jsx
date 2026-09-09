import { useEffect, useState } from "react";
import Quote from "../../assets/quote-down.svg";
import { reviewUser } from "../data/reviewUser";

function ReviewCard() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewUser.slice(0, 3));
    }, []);

    return (
        <>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div>
                        <img
                            src={Quote}
                            alt=""
                            className="w-8 h-8 opacity-20 mb-3"
                        />
                        <p className="text-sm sm:text-[15px] text-midnight/80 leading-relaxed">
                            {review.review}
                        </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-surface">
                        <p className="font-display font-bold text-sm text-midnight">
                            {review.name}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ReviewCard;
