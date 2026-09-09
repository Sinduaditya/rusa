import Hero from "../assets/stories/stories1.svg";
import Search from "../assets/explore/search-normal.svg";
import { storiesData } from "../components/data/storiesData.jsx";
import Save from "../assets/stories/archive.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Stories() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(storiesData);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = storiesData.filter((item) =>
            item.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === "Semua") {
            setFilteredData(storiesData);
        } else if (category === "Cerita Tersimpan") {
            setFilteredData([]);
        } else {
            const filtered = storiesData.filter((item) =>
                item.category.toLowerCase().includes(category.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const categories = [
        { name: "Semua", icon: null },
        { name: "Activities", icon: null },
        { name: "Knowledge", icon: null },
        { name: "Tips & Advice", icon: null },
        { name: "Cerita Tersimpan", icon: Save },
    ];

    return (
        <section className="min-h-screen bg-surface">
            {/* Hero */}
            <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
                <img
                    src={Hero}
                    alt="Travel stories"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
                    <div
                        className={`transition-all duration-700 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium tracking-wide mb-4">
                            STORIES
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
                            Travel Stories
                        </h1>
                        <p className="mt-4 text-white/80 max-w-lg text-lg">
                            Baca cerita perjalanan dan tips dari para pelancong
                        </p>
                    </div>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="max-w-screen-xl mx-auto px-6 -mt-8 relative z-20">
                <div
                    className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-200 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* Search */}
                    <div className="relative mb-5">
                        <img
                            src={Search}
                            alt=""
                            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Cari cerita..."
                            className="w-full bg-surface rounded-xl py-3.5 pl-12 pr-4 text-sm font-body text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-white transition-all"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => handleFilter(cat.name)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                                    selectedCategory === cat.name
                                        ? "bg-primary text-white shadow-md shadow-primary/25"
                                        : "bg-surface text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                {cat.icon && (
                                    <img
                                        src={cat.icon}
                                        alt=""
                                        className={`h-4 w-4 ${
                                            selectedCategory === cat.name
                                                ? "brightness-0 invert"
                                                : ""
                                        }`}
                                    />
                                )}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="max-w-screen-xl mx-auto px-6 mt-8">
                <p className="text-sm text-gray-500 font-body">
                    Menampilkan{" "}
                    <span className="font-semibold text-gray-900">
                        {filteredData.length}
                    </span>{" "}
                    cerita
                </p>
            </div>

            {/* Stories List */}
            <div className="max-w-screen-xl mx-auto px-6 py-8">
                {filteredData.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">
                            Tidak ada cerita yang ditemukan
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredData.map((item, index) => (
                            <Link
                                key={item.id}
                                to={`/detail-stories/${item.id}`}
                                className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }`}
                                style={{
                                    transitionDelay: `${300 + index * 100}ms`,
                                }}
                            >
                                <div className="flex flex-col sm:flex-row">
                                    {/* Image */}
                                    <div className="relative shrink-0 sm:w-64 h-48 sm:h-auto overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-5 sm:p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {item.date}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 font-display group-hover:text-primary transition-colors duration-300 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Baca selengkapnya
                                            <svg
                                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Stories;
