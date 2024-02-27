import React, { useEffect, useState } from "react";
import Bromo from "../../assets/gunung-bromo.jpg";
import { storiesData } from "../data/storiesData";

function GetTipsCard() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        // Mengatur data destinasi dari storiesData.jsx ke state
        const limitedStories = storiesData.slice(0, 3);
        setDestinations(limitedStories);
    }, []);

    return (
        <>
            {destinations.map((story) => (
                <a href="" key={story.id}>
                    <div className="flex px-2 py-5 gap-4 max-w-sm">
                        <img
                            src={story.image}
                            className="w-24 h-24 object-cover items-center rounded-2xl"
                            alt={story.title}
                        />
                        {/* Caption dan Keterangan */}
                        <div className="grid ">
                            <div className="">
                                <p className="text-secondary text-xs">
                                    {story.category}
                                </p>
                                <h1 className="text-blue-950 text-base font-semibold">
                                    {story.title}
                                </h1>
                                <p className="text-secondary text-xs">
                                    {story.date}
                                </p>
                            </div>
                            {/* Tampilkan nama penulis jika ada */}
                            {story.author && (
                                <p className="text-secondary text-xs">
                                    {story.author}
                                </p>
                            )}
                        </div>
                        {/* Caption dan Keterangan */}
                    </div>
                </a>
            ))}
        </>
    );
}

export default GetTipsCard;
