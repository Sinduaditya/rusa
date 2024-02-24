import Loc from "../../assets/location2.svg";
import Love from "../../assets/explore/heart.svg";
import Love2 from "../../assets/heartko.svg";
import {useParams} from "react-router-dom";
import {exploreData} from "../data/exploreData.jsx";
import React, {useState} from 'react';
import getCategoryImage from "../data/categoryImages.jsx";
import Maps from "../../assets/explore/map.svg";
import KawahWurung from "../../assets/kawah-wurung.jpg";

function DetailExplore(){
    const {id} = useParams();
    const selectedItem = exploreData.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item tidak ditemukan</div>;
    }
    const [expanded, setExpanded] = useState(false);
    const originalText = "Meskipun cuaca buruk dan cuaca dingin, pengalaman di Kawah Ijen adalah hal yang tak terlupakan. Pendakian menuju api biru memang menantang, tetapi melihat keindahan alam yang luar biasa di puncaknya sangatlah memuaskan. Meskipun perjalanan turunnya agak sulit, tetapi melihat keajaiban alam seperti ini membuat segala usaha terbayar lunas.";

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return(
        <>
            <div className="bg-bluelight relative z-10">
                <div
                    className="absolute -left-[450px] top-32 w-[900px] h-[900px]  z-[-1] bg-yellow rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 -top-44 w-[500px] h-[500px]  z-[-1] bg-primary rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 top-[1000px] w-[500px] h-[400px]  z-[-1] bg-greenlight rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>

                <div className="mx-auto max-w-screen-xl px-4 font-poppins pt-[80px]">
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
                            <img className="w-full h-[600px] object-cover bg-center rounded-2xl"
                                 src={selectedItem.image}
                                 alt={selectedItem.name}/>
                        </div>
                        <div className="md:flex justify-between items-center gap-12">
                            {/*Content*/}
                            <div className="md:w-1/2">
                                <div className="mb-12">
                                    <h2 className="text-slate-700 text-3xl mb-4 font-bold font-poppins">About</h2>
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
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg "
                                        >
                                            <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">What
                                                to
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
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg "
                                        >
                                            <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">Additiona
                                                information</h2>

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
                    {/*    Destinasi lain*/}
                    <section className="bg-transparent">
                        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                            <h2 className="text-left text-4xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                Destinasi lain sekitarnya
                            </h2>
                            <p className="text-left font-light text-secondary">Temukan destinasi terbaik lainnya di
                                sekitar</p>

                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 justify-center">
                                <div className="card card-compact w-96 relative">
                                    <figure className="relative">
                                        <img src={KawahWurung} className="rounded-3xl  w-90" alt="Shoes"/>
                                        <div className="absolute rounded-3xl top-1 right-2 mt-2 mr-2 bg-white ">
                                            <img src={Love2} className="h-5 w-5 m-1" alt=""/>
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Kawah Wurung</h2>
                                        <div className="flex gap-3">
                                            <div className="rating rating-sm">
                                                <input type="radio" name="rating-6"
                                                       className="mask mask-star-2 bg-orange"/>
                                                <input type="radio" name="rating-6"
                                                       className="mask mask-star-2 bg-orange"
                                                       checked/>
                                                <input type="radio" name="rating-6"
                                                       className="mask mask-star-2 bg-orange"/>
                                                <input type="radio" name="rating-6"
                                                       className="mask mask-star-2 bg-orange"/>
                                                <input type="radio" name="rating-6"
                                                       className="mask mask-star-2 bg-orange"/>
                                            </div>
                                            <p className="text-secondary">224</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/*    destinasi lain end*/}
                    {/*    arek says*/}
                    <section className="bg-transparent">
                        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                Apa yang Arek lain katakan ?
                            </h2>

                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                                <blockquote
                                    className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 border-[1px] border-bluelight">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                            className="size-14 rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                                        </div>
                                    </div>

                                    <div className="flex mt-3 justify-start gap-0.5 text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="orange"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="orange"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="orange"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="orange"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="font-poppins font-semibold mt-2">Unforgettable hiking</h3>
                                    <div>
                                        <p className="mt-2 text-gray-700 font-cabin">
                                            {expanded ? originalText : `${originalText.slice(0, 100)}...`}
                                        </p>
                                        <button className="text-secondary mt-1 font-cabin" onClick={handleClick}>
                                            {expanded ? 'Lebih sedikit..' : 'Baca Semua..'}
                                        </button>
                                    </div>
                                    <div className="text-sm font-poppins font-light">
                                        <p>Dikunjungi <span
                                            className="font-semibold">December 2023</span>
                                        </p>
                                        <p>Ditulis 6 Januari 2024</p>
                                    </div>
                                </blockquote>

                            </div>
                        </div>
                    </section>
                    {/*    arek says end*/
                    }
                </div>
            </div>

        </>
    )
}

export default DetailExplore;