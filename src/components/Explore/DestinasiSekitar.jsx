import { exploreData } from "../data/exploreData.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Love2 from "../../assets/heartko.svg";
import Star from "../Star.jsx";

function DestinasiSekitar() {
    const [nearestDestinations, setNearestDestinations] = useState([]);

    const getRandomIDs = () => {
        const allIDs = exploreData.map((dest) => dest.id);
        const shuffledIDs = allIDs.sort(() => 0.5 - Math.random());
        return shuffledIDs.slice(0, 3);
    };

    const getDestinationByID = (id) => {
        return exploreData.find((dest) => dest.id === id);
    };

    useEffect(() => {
        const randomIDs = getRandomIDs();
        const nearestDestinationsData = randomIDs.map((id) =>
            getDestinationByID(id)
        );
        setNearestDestinations(nearestDestinationsData);
    }, []);

    return (
        <>
            {nearestDestinations.map((dest) => (
                <Link
                    key={dest.id}
                    to={`/detail-explore/${dest.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Favorite Button */}
                        <button className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                            <img src={Love2} alt="Favorite" className="h-4 w-4" />
                        </button>

                        {/* Rating Badge */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
                            <Star />
                            <span className="text-xs font-semibold text-gray-900">
                                {dest.rating}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-bold text-gray-900 font-display group-hover:text-primary transition-colors duration-300">
                            {dest.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {dest.location}
                        </p>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default DestinasiSekitar;
