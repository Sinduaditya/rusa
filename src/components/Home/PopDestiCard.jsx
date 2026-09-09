import { useEffect, useState } from "react";
import Love2 from "../../assets/heartko.svg";
import { exploreData } from "../data/exploreData";
import Star from "../Star.jsx";
import { Link } from "react-router-dom";

function PopDestiCard() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const filteredDestinations = exploreData.filter((destination) =>
            destination.categories.includes("Pilihan Terbaik")
        );
        setDestinations(filteredDestinations.slice(0, 3));
    }, []);

    return (
        <>
            {destinations.map((destination, index) => (
                <Link
                    key={destination.id}
                    to={`/detail-explore/${destination.id}`}
                    className="group focus-ring"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <article className="bg-surface-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={destination.image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={destination.name}
                            />
                            <div className="absolute top-3 right-3">
                                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                                    <img
                                        src={Love2}
                                        className="w-4 h-4"
                                        alt="Favorite"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                            <h3 className="font-display font-bold text-base sm:text-lg text-midnight group-hover:text-primary transition-colors">
                                {destination.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Star />
                                <span className="text-sm font-medium text-secondary">
                                    {destination.rating}
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    );
}

export default PopDestiCard;
