import Hero from "../assets/gunung-bromo-explore.jpg";
import React, { useState } from 'react';
import Search from "../assets/explore/search-normal.svg";
import Nature from "../assets/naturev2.svg";
import Frame from "../assets/explore/Frame.svg";
import Culinary from "../assets/culinary.svg";
import Loc from "../assets/location2.svg";
import {Link} from 'react-router-dom';
import {exploreData} from "../components/data/exploreData.jsx";
import getCategoryImage from "../components/data/categoryImages.jsx";


function Explore() {
    // Untuk Search Data
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(exploreData);
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        const filtered = exploreData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("Filtered Data:", filtered);
        setFilteredData(filtered);
    };
    //  untuk filter data
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === "Semua") {
            setFilteredData(exploreData);
        } else {
            const filtered = exploreData.filter(item => item.categories.includes(category));
            setFilteredData(filtered);
        }
    };
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppins mt-12">
                <div
                    className="hero lg:h-[300px] h-screen relative bg-white bg-cover bg-center mt-8 mx-auto md:w-full rounded-2xl"
                    style={{backgroundImage: `url(${Hero})`}}>
                    <div className="hero-content text-center flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-6xl font-bold text-white">Temukan Destinasi <br/> Favoritmu</h1>
                        </div>
                    </div>
                </div>

                {/*  kategori  */}
                <div className="mt-12 m-20">
                    <div className="flex flex-col  sm:flex-row items-center justify-between">
                        <div className="pt-4 relative">
                            <input
                                type="text"
                                placeholder="Cari destinasi..."
                                className="border border-primary rounded-3xl py-2 px-4 pl-10 mb-4"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <img src={Search} alt=""
                                 className="absolute top-6 left-3 h-6 w-6"/>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="hidden sm:block">
                                <nav className="ml-4 sm:ml-0 flex gap-3" aria-label="Tabs">
                                    <a
                                        href="#"
                                        onClick={() => handleFilter("Semua")}
                                        className={`inline-flex shrink-0 items-center gap-2 ${selectedCategory === "Semua" ? "bg-primary text-white" : "border-secondary text-gray-500"} border-solid px-4 pt-2 pb-2 pb-0 text-sm font-medium rounded-2xl`}
                                    >
                                        Semua
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleFilter("Pilihan Terbaik")}
                                        className={`inline-flex shrink-0 items-center gap-2 ${selectedCategory === "Pilihan Terbaik" ? "bg-white text-black font-bold border-gray-700" : "border-secondary text-gray-500"} border-2 px-5 pb-0 text-sm font-medium rounded-2xl`}
                                    >
                                        <img src={Frame} className="h-5 w-5" alt=""/>
                                        Pilihan Terbaik
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleFilter("Wisata Alam")}
                                        className={`inline-flex shrink-0 items-center gap-2 ${selectedCategory === "Wisata Alam" ? "bg-white text-black font-bold border-gray-700" : "border-secondary text-gray-500"} border-2 px-5 pb-0 text-sm font-medium rounded-2xl`}
                                    >
                                        <img src={Nature} className="h-5 w-5" alt=""/>
                                        Wisata Alam
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleFilter("Kuliner")}
                                        className={`inline-flex shrink-0 items-center gap-2 ${selectedCategory === "Kuliner" ? "bg-white text-black font-bold border-gray-700" : "border-secondary text-gray-500"} border-2 px-5 pb-0 text-sm font-medium rounded-2xl`}
                                    >
                                        <img src={Culinary} className="h-5 w-5" alt=""/>
                                        Kuliner
                                    </a>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  end kategori  */}
                <section className="flex items-center py-10 bg-white lg:py-4 font-poppins">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 ">
                        {filteredData.map((item, index) => (
                            <Link key={index} to={`/detail-explore/${item.id}`}>
                                <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]  gap-x-6 gap-y-4 mb-16">
                                    <img
                                        className="object-cover w-full  rounded-[16px] lg:w-80 h-80"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div className="flex items-center">
                                        <div>
                                            <h1 className="text-4xl font-bold font-poppin">{item.name}</h1>
                                            <p className="mt-3 text-sm text-gray-400 flex gap-2 lg:text-lg ">
                                                <img src={Loc} alt=""/>
                                                {item.location}
                                            </p>
                                            <div className="rating rating-sm pt-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <input
                                                        key={i}
                                                        type="radio"
                                                        name={`rating-${index}`}
                                                        className={`mask mask-star-2 bg-orange ${i < Math.round(item.rating / 40) ? 'checked' : ''}`}
                                                    />
                                                ))}
                                                <p className="text-xs text-gray-400 pl-2">{item.rating}</p>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                {item.categories.map((category, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 inline-flex gap-4 py-2 mr-2 border-[1px] border-gray-400 text-xs rounded-full"
                                                    >
                                    <img src={getCategoryImage(category)} className="h-4 w-5" alt=""/>
                                    <div className="hidden sm:inline-block">{category}</div>
                                </span>
                                                ))}
                                            </div>
                                            <p className="hidden mt-4 leading-7 text-gray-700 md:block lg:text-lg ">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Explore;