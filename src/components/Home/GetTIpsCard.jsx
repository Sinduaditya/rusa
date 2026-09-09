import { useEffect, useState, useRef } from "react";
import { storiesData } from "../data/storiesData";
import { Link } from "react-router-dom";

function GetTipsCard() {
    const [stories, setStories] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        setStories(storiesData.slice(0, 4));
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative group/carousel">
            {/* Carousel Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:flex"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:flex"
                aria-label="Next"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Cards Container */}
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-2 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {stories.map((story, index) => (
                    <Link
                        to={`/detail-stories/${story.id}`}
                        key={story.id}
                        className="group focus-ring flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <article className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={story.image}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={story.title}
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                                        {story.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-display font-bold text-base sm:text-lg text-midnight group-hover:text-primary transition-colors line-clamp-2">
                                    {story.title}
                                </h3>
                                <p className="text-sm text-secondary mt-2">
                                    {story.date}
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default GetTipsCard;
