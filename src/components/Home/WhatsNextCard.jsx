import { useEffect, useState } from "react";
import { exploreData } from "../data/exploreData";
import Star from "../Star.jsx";

function WhatsNextCard() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        // Mengambil seluruh data destinasi dari exploreData.jsx
        setDestinations(exploreData);
    }, []);

    return (
        <div className="flex pl-8 lg:pl-0 overflow-auto scroll-m-0 gap-4">
            {destinations.map((destination) => (
                <div
                    className="card card-compact w-[250px]"
                    key={destination.id}
                >
                    <a
                        href={`/detail-explore/${destination.id}`}
                        key={destination.id}
                    >
                        <figure className="w-[250px] h-[175px] aspect-video">
                            <img
                                src={destination.image}
                                className="rounded-3xl w-[250px] h-[175px] object-cover"
                                alt={destination.name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title py-2 px-2">{destination.name}</h2>
                            <div className="flex gap-3 px-1">
                                <div className="rating rating-sm">
                                    <Star/>
                                </div>
                                <p className="text-secondary">
                                    {destination.rating}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default WhatsNextCard;
