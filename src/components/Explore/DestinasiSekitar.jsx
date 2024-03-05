import { exploreData } from "../data/exploreData.jsx";
import React from "react";
import { Link } from "react-router-dom";

import Love2 from "../../assets/heartko.svg";
import Star from "../Star.jsx";
function DestinasiSekitar() {
    const [nearestDestinations, setNearestDestinations] = React.useState([]);

    const getRandomIDs = () => {
        const allIDs = exploreData.map((dest) => dest.id);
        const shuffledIDs = allIDs.sort(() => 0.5 - Math.random());
        return shuffledIDs.slice(0, 3);
    };

    const getDestinationByID = (id) => {
        return exploreData.find((dest) => dest.id === id);
    };

    React.useEffect(() => {
        const randomIDs = getRandomIDs();
        const nearestDestinationsData = randomIDs.map((id) =>
            getDestinationByID(id)
        );
        setNearestDestinations(nearestDestinationsData);
    }, []);
    return (
        <>
            {nearestDestinations.map((dest) => (
                <div
                    className="card card-compact w-full relative"
                    key={dest.id}
                >
                    <Link to={`/detail-explore/${dest.id}`} key={dest.id}>
                        <figure className="relative">
                            <img
                                src={dest.image}
                                className="rounded-3xl w-90 aspect-video"
                                alt={dest.name}
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
                            <h2 className="card-title py-2 px-2">
                                {dest.name}
                            </h2>
                            <div className="flex gap-3 px-1">
                                <Star />
                                <p className="text-secondary">{dest.rating}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default DestinasiSekitar;
