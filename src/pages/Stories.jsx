import Hero from "../assets/stories/stories1.svg";
import Search from "../assets/explore/search-normal.svg";
import {storiesData} from "../components/data/storiesData.jsx";
import  Save from "../assets/stories/archive.svg";

import {useState} from "react";
import {Link} from "react-router-dom";

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
            <div className="bg-bluelight ">
                <div className="mx-auto max-w-screen-xl px-4 font-poppins pt-[20px]">
                    <div
                        className="hero lg:h-[300px] h-screen relative bg-white bg-cover bg-center mx-auto md:w-full rounded-2xl flex justify-center items-center"
                        style={{backgroundImage: `url(${Hero})`}}>
                        <div className="text-center">
                            <h1 className="text-6xl font-bold text-white">
                                Travel Stories
                            </h1>
                        </div>
                    </div>


                    {/*  kategori  */}
                    <div className="mt-12 m-10">
                        <div className="flex flex-col  sm:flex-row items-center justify-between">
                            <div className="pt-4 relative">
                                <input
                                    type="text"
                                    placeholder="Cari destinasi..."
                                    className="border border-primary bg-bluelight rounded-3xl py-2 px-4 pl-10 mb-4"
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
                                            className="inline-flex shrink-0 items-center gap-2 bg-bluelight text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                        >
                                            Activities
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex shrink-0 items-center gap-2 bg-bluelight text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                        >
                                            Knowledge
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex shrink-0 items-center gap-2 bg-bluelight text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-3xl"
                                        >
                                            Tips & Advice
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex shrink-0 items-center gap-2 bg-bluelight text-secondary   border-secondary  border-2 px-5 pb-2 pt-2 text-sm font-medium rounded-2xl"
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
                    <section className="flex items-center py-10 bg-transparent lg:py-4 font-poppins">
                        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-2">
                            {filteredData.map((item, index) => (
                                <Link key={index} to={`/detail-stories/${item.id}`}>
                                    <article
                                        className="mx-auto my-2 flex max-w-md flex-col  px-4  md:max-w-5xl md:flex-row  p-3 rounded-3xl  md:items-center">
                                        <div className="shrink-0 md:mr-8 md:max-w-xs">
                                            <img className="rounded-2xl w-[200px] h-[190px]  object-cover"
                                                 src={item.image}
                                                 alt={item.title}/>
                                        </div>
                                        <div className="py-4 sm:py-8">
                                            <span className="text-secondary uppercase ">{item.category}</span>
                                            <p className="mb-2 block text-2xl font-semibold text-gray-700">{item.title}</p>
                                            <span className="text-sm text-secondary">{item.date}</span>
                                            <p className="mb-6 text-gray-500">
                                                {item.description.length > 280 ? `${item.description.substring(0, 280)}...` : item.description}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Stories;