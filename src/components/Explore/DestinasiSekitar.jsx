import {exploreData} from "../data/exploreData.jsx";
import React from "react";

import Love2 from "../../assets/heartko.svg";
function DestinasiSekitar(){
    const [nearestDestinations, setNearestDestinations] = React.useState([]);

    const getRandomIDs = () => {
        const allIDs = exploreData.map(dest => dest.id);
        const shuffledIDs = allIDs.sort(() => 0.5 - Math.random());
        return shuffledIDs.slice(0, 3);
    };


    const getDestinationByID = (id) => {
        return exploreData.find(dest => dest.id === id);
    };

    React.useEffect(() => {
        const randomIDs = getRandomIDs();
        const nearestDestinationsData = randomIDs.map(id => getDestinationByID(id));
        setNearestDestinations(nearestDestinationsData);
    }, []);
    return (
        <>
        {nearestDestinations.map(dest => (
                <div
                    className="card card-compact w-full relative"
                    key={dest.id}
                >
                    <a
                        href={`/detail-explore/${dest.id}`}
                        key={dest.id}
                    >
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
                            <h2 className="card-title">{dest.name}</h2>
                            <div className="flex gap-3">
                                <div className="rating rating-sm">
                                    {[...Array(5)].map(
                                        (_, i) => (
                                            <input
                                                key={i}
                                                type="radio"
                                                className={`mask mask-star-2 bg-orange ${
                                                    i <
                                                    Math.round(
                                                        dest.rating /
                                                        40
                                                    )
                                                        ? "checked"
                                                        : ""
                                                }`}
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-secondary">
                                    {dest.rating}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            )
        )}
        </>
    )
}

export default DestinasiSekitar;