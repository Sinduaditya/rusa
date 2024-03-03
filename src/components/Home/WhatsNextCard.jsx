import React, { useEffect, useState } from "react";
import Love2 from "../../assets/heartko.svg";
import { exploreData } from "../data/exploreData";

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
                            <div className="absolute rounded-3xl top-1 right-2 mt-2 mr-2 bg-white">
                                <img
                                    src={Love2}
                                    className="h-5 w-5 m-1"
                                    alt=""
                                />
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{destination.name}</h2>
                            <div className="flex gap-3">
                                <div className="rating rating-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="radio"
                                            className={`mask mask-star-2 bg-orange ${
                                                i <
                                                Math.round(
                                                    destination.rating / 40
                                                )
                                                    ? "checked"
                                                    : ""
                                            }`}
                                        />
                                    ))}
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
