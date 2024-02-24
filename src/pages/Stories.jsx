import Hero from "../assets/stories/stories1.svg";
import Search from "../assets/explore/search-normal.svg";
import {storiesData} from "../components/data/storiesData.jsx";
import  Save from "../assets/stories/archive.svg";

import React, {useState} from "react";

function Stories(){
    // Untuk Search Data
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(storiesData);
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        const filtered = storiesData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("Filtered Data:", filtered);
        setFilteredData(filtered);
    };
    return(
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppins mt-12">
                <div
                    className="hero lg:h-[300px] h-screen relative bg-white bg-cover bg-center mt-8 mx-auto md:w-full rounded-2xl"
                    style={{backgroundImage: `url(${Hero})`}}>
                    <div className="hero-content text-center flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-6xl font-bold text-white">Travel Stories</h1>
                        </div>
                    </div>
                </div>

                {/*  kategori  */}
                <div className="mt-12 m-10">
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
                                        className="inline-flex shrink-0 items-center gap-2 bg-primary text-white   px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                    >
                                        Semua
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex shrink-0 items-center gap-2 bg-white text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                    >
                                        Activities
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex shrink-0 items-center gap-2 bg-white text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                    >
                                        Knowledge
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex shrink-0 items-center gap-2 bg-white text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                    >
                                        Tips & Advice
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex shrink-0 items-center gap-2 bg-white text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-2xl"
                                    >
                                        Cerita Tersimpan
                                        <img src={Save} className="h-5 w-5" alt=""/>
                                    </a>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  end kategori  */}
                <section className="flex items-center py-10 bg-white lg:py-4 font-poppins">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-2">
                        {filteredData.map((item, index) =>  (
                            <article key={index}
                                className="mx-auto my-2 flex max-w-md flex-col rounded-2xl  px-4  md:max-w-5xl md:flex-row md:items-center">
                                <div className="shrink-0 md:mr-8 md:max-w-xs">
                                    <img className="rounded-2xl w-[200px] h-[190px]  object-cover"
                                         src={item.image}
                                         alt={item.title}/>
                                </div>
                                <div className="py-4 sm:py-8">
                                    <span className="text-secondary uppercase ">{item.category}</span>
                                    <p className="mb-2 block text-2xl font-semibold text-gray-700">{item.title}</p>
                                    <span className="text-sm text-secondary">{item.date}</span>
                                    <p className="mb-6 text-gray-500">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Stories;