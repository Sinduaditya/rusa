import { useEffect, useState } from "react";
import { exploreData } from "../data/exploreData";
import Star from "../Star.jsx";
import { Link } from "react-router-dom";

function WhatsNextCard() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        setDestinations(exploreData);
    }, []);

    return (
        <div className="flex gap-4 sm:gap-5 w-max">
            {destinations.map((destination, index) => (
                <Link
                    key={destination.id}
                    to={`/detail-explore/${destination.id}`}
                    className="group focus-ring w-[260px] sm:w-[280px] shrink-0"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                >
                    <article className="bg-surface-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={destination.image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={destination.name}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-display font-bold text-sm sm:text-base text-midnight group-hover:text-primary transition-colors line-clamp-2">
                                {destination.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Star />
                                <span className="text-xs font-medium text-secondary">
                                    {destination.rating}
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

export default WhatsNextCard;
