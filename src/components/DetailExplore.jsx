import Loc from "../assets/location2.svg";
import Love from "../assets/explore/heart.svg";
import {useParams} from "react-router-dom";
import {exploreData} from "./data/exploreData.jsx";
import React from 'react';
import getCategoryImage from "./data/categoryImages.jsx";
import Maps from "../assets/explore/map.svg";

function DetailExplore(){
    const {id} = useParams();
    const selectedItem = exploreData.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item tidak ditemukan</div>;
    }

    return(
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppins mt-12">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="mb-12">
                        <h1 className="text-black text-5xl font-bold font-poppins">{selectedItem.name}</h1>
                        <div className="flex items-center pt-5 gap-4">
                            <img src={Loc} className="w-6 h-6" alt=""/>
                            <div className="text-secondary text-base font-medium font-cabin">{selectedItem.location}
                            </div>
                        </div>
                        <div className="rating rating-sm pt-2">
                            {[...Array(5)].map((_, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    name=""
                                    className={`mask mask-star-2 bg-orange ${i < Math.round(selectedItem.rating / 40) ? 'checked' : ''}`}
                                />
                            ))}
                            <p className="text-xs text-gray-400 pl-2">{selectedItem.rating}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="px-5 py-1.5 bg-primary mt-2 rounded-3xl flex items-center gap-2">
                                <div className="text-white text-base font-semibold font-cabin">Liked</div>
                                <img src={Love} className="h-6 w-6" alt=""/>
                            </div>
                            <div className="flex items-center mt-2">
                                {selectedItem.categories.map((category, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 inline-flex gap-4 py-2 mr-2 border-[1px] border-gray-400 text-xs rounded-full"
                                    >
                                <img src={getCategoryImage(category)} className="h-4 w-5" alt=""/>
                                <div className="hidden sm:inline-block">{category}</div>
                            </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <img className="w-full h-[600px] object-cover bg-center rounded-2xl" src={selectedItem.image}
                             alt={selectedItem.name}/>
                    </div>
                    <div className="md:flex justify-between items-center gap-12">
                        {/*Content*/}
                        <div className="md:w-1/2">
                            <div className="mb-12">
                                <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">About</h2>
                                <p className="text-black text-medium font-normal font-cabin ">{selectedItem.description}</p>
                            </div>
                            <div className="space-y-6">
                                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg "
                                    >
                                        <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">Harga</h2>

                                        <svg
                                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </summary>
                                    <div className="mt-4 px-4 leading-relaxed font-medium">
                                        <h3>Wisatawan</h3>
                                        <ul>
                                            <li>IDR 5.000 (Hari Biasa)</li>
                                            <li>IDR 7.000 (Hari Libur)</li>
                                        </ul>
                                        <h3 className="mt-3">Wisatawan</h3>
                                        <ul>
                                            <li>IDR 5.000 (Hari Biasa)</li>
                                            <li>IDR 7.000 (Hari Libur)</li>
                                        </ul>
                                    </div>

                                </details>
                                <details className="group [&_summary::-webkit-details-marker]:hidden" >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg "
                                    >
                                        <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">What to
                                            expect</h2>

                                        <svg
                                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </summary>
                                    <div className="mt-4 px-4 leading-relaxed font-medium">
                                        <h3>Content</h3>
                                    </div>

                                </details>
                                <details className="group [&_summary::-webkit-details-marker]:hidden" >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg "
                                    >
                                        <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">Additiona information</h2>

                                        <svg
                                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </summary>
                                    <div className="mt-4 px-4 leading-relaxed font-medium">
                                        <h3>Content</h3>
                                    </div>

                                </details>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img className="rounded-2xl h-[600px] w-[500px]" src={Maps}
                                 alt="About Kawah Ijen"/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DetailExplore;