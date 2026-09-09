import Hero from "../assets/gunung-bromo-explore.jpg";
import { useState, useEffect } from "react";
import Search from "../assets/explore/search-normal.svg";
import Nature from "../assets/naturev2.svg";
import Frame from "../assets/explore/Frame.svg";
import Culinary from "../assets/culinary.svg";
import Loc from "../assets/location2.svg";
import { Link } from "react-router-dom";
import { exploreData } from "../components/data/exploreData.jsx";
import getCategoryImage from "../components/data/categoryImages.jsx";
import Star from "../components/Star.jsx";

function Explore() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(exploreData);
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = exploreData.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === "Semua") {
            setFilteredData(exploreData);
        } else {
            const filtered = exploreData.filter((item) =>
                item.categories.includes(category)
            );
            setFilteredData(filtered);
        }
    };

    const categories = [
        { name: "Semua", icon: null },
        { name: "Pilihan Terbaik", icon: Frame },
        { name: "Wisata Alam", icon: Nature },
        { name: "Kuliner", icon: Culinary },
    ];

    return (
        <section className="min-h-screen bg-surface">
            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src={Hero}
                    alt="Explore destinations"
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
                            EXPLORATION
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
                            Temukan Destinasi
                            <br />
                            <span className="text-primary">Favoritmu</span>
                        </h1>
                        <p className="mt-4 text-white/80 max-w-lg text-lg">
                            Jelajahi keindahan Jawa Timur dari gunung hingga pantai
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
                            placeholder="Cari destinasi..."
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
                    destinasi
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-screen-xl mx-auto px-6 py-8">
                {filteredData.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">
                            Tidak ada destinasi yang ditemukan
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredData.map((item, index) => (
                            <Link
                                key={item.id}
                                to={`/detail-explore/${item.id}`}
                                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }`}
                                style={{
                                    transitionDelay: `${300 + index * 100}ms`,
                                }}
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                                        <Star />
                                        <span className="text-xs font-semibold text-gray-900">
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-primary transition-colors duration-300">
                                        {item.name}
                                    </h3>

                                    <div className="flex items-center gap-1.5 mt-2 text-gray-500">
                                        <img
                                            src={Loc}
                                            alt=""
                                            className="h-4 w-4 opacity-60"
                                        />
                                        <span className="text-sm truncate">
                                            {item.location}
                                        </span>
                                    </div>

                                    {/* Categories */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.categories
                                            .slice(0, 2)
                                            .map((category, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface rounded-lg text-xs font-medium text-gray-600"
                                                >
                                                    <img
                                                        src={getCategoryImage(
                                                            category
                                                        )}
                                                        className="h-3 w-3"
                                                        alt=""
                                                    />
                                                    {category}
                                                </span>
                                            ))}
                                    </div>

                                    {/* Description Preview */}
                                    <p className="mt-4 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Explore;
