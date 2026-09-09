import Loc from "../../assets/location2.svg";
import Love from "../../assets/explore/heart.svg";
import { useParams, Link } from "react-router-dom";
import getCategoryImage from "../data/categoryImages.jsx";
import explore from "../../assets/explore/export.svg";
import DestinasiSekitar from "./DestinasiSekitar.jsx";
import Star from "../Star.jsx";
import { exploreData } from "../data/exploreData.jsx";
import profilePicture from "../../assets/profile-icon.svg";
import { useState, useEffect } from "react";

function DetailExplore() {
    const { id } = useParams();
    const selectedItem = exploreData.find((item) => item.id === parseInt(id));
    const [isVisible, setIsVisible] = useState(false);
    const [openAccordion, setOpenAccordion] = useState("price");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!selectedItem) {
        return (
            <div className="min-h-screen bg-surface flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 text-lg">Item tidak ditemukan</p>
                    <Link
                        to="/explore"
                        className="mt-4 inline-block text-primary hover:underline"
                    >
                        Kembali ke Explore
                    </Link>
                </div>
            </div>
        );
    }

    const commentsData = selectedItem.comments;

    const accordions = [
        {
            id: "price",
            title: `Harga ${selectedItem.price}`,
            content: (
                <div className="space-y-3">
                    {selectedItem.kategori && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{selectedItem.kategori}</span>
                            <span className="font-semibold text-gray-900">{selectedItem.priceAdult}</span>
                        </div>
                    )}
                    {selectedItem.kategori2 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{selectedItem.kategori2}</span>
                            <span className="font-semibold text-gray-900">{selectedItem.priceChild}</span>
                        </div>
                    )}
                    {selectedItem.kategori3 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">{selectedItem.kategori3}</span>
                            <span className="font-semibold text-gray-900">{selectedItem.hargaKategori3}</span>
                        </div>
                    )}
                    {selectedItem.kategori4 && (
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-600">{selectedItem.kategori4}</span>
                            <span className="font-semibold text-gray-900">{selectedItem.hargaKategori4}</span>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: "expect",
            title: "What to Expect",
            content: <p className="text-gray-600 leading-relaxed">{selectedItem.expect}</p>,
        },
        {
            id: "info",
            title: "Additional Information",
            content: <p className="text-gray-600 leading-relaxed">{selectedItem.addInfo}</p>,
        },
    ];

    return (
        <section className="min-h-screen bg-surface">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
                <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Back Button */}
                <div className="absolute top-6 left-6 z-10">
                    <Link
                        to="/explore"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-900 hover:bg-white transition-colors shadow-sm"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Kembali
                    </Link>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-screen-xl mx-auto">
                        <div
                            className={`transition-all duration-700 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                {selectedItem.name}
                            </h1>
                            <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-1.5 text-white/90">
                                    <img src={Loc} alt="" className="h-4 w-4" />
                                    <span className="text-sm">{selectedItem.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Star />
                                    <span className="text-sm text-white/90">{selectedItem.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Action Bar */}
                        <div
                            className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-200 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-colors shadow-md shadow-primary/25">
                                Liked
                                <img src={Love} alt="" className="h-5 w-5" />
                            </button>

                            <div className="flex flex-wrap gap-2">
                                {selectedItem.categories.map((category, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-600 shadow-sm"
                                    >
                                        <img
                                            src={getCategoryImage(category)}
                                            className="h-3.5 w-3.5"
                                            alt=""
                                        />
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* About */}
                        <div
                            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2 className="text-xl font-bold text-gray-900 font-display mb-4">
                                About
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-body">
                                {selectedItem.description}
                            </p>
                        </div>

                        {/* Accordions */}
                        <div
                            className={`space-y-4 transition-all duration-700 delay-400 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            {accordions.map((accordion) => (
                                <div
                                    key={accordion.id}
                                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenAccordion(
                                                openAccordion === accordion.id
                                                    ? null
                                                    : accordion.id
                                            )
                                        }
                                        className="w-full flex items-center justify-between p-5 text-left"
                                    >
                                        <h3 className="font-semibold text-gray-900 font-display">
                                            {accordion.title}
                                        </h3>
                                        <svg
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                                openAccordion === accordion.id
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`px-5 pb-5 transition-all duration-300 ${
                                            openAccordion === accordion.id
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        {accordion.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div
                            className={`sticky top-24 bg-white rounded-2xl p-6 shadow-sm transition-all duration-700 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.name}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <a
                                href={selectedItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-surface text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                            >
                                <img src={explore} alt="" className="h-4 w-4" />
                                Lihat di Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Other Destinations */}
                <div
                    className={`mt-16 transition-all duration-700 delay-500 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                            Destinasi lain sekitarnya
                        </h2>
                        <p className="mt-2 text-gray-500">
                            Temukan destinasi terbaik lainnya di sekitar{" "}
                            {selectedItem.name}!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <DestinasiSekitar />
                    </div>
                </div>

                {/* Reviews */}
                <div
                    className={`mt-16 transition-all duration-700 delay-600 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 font-display">
                            Apa yang Arek lain katakan?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commentsData.map((comment) => (
                            <div
                                key={comment.userRate}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        alt="user"
                                        src={profilePicture}
                                        className="w-12 h-12 rounded-full object-cover bg-surface"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {comment.userRate}
                                        </p>
                                        <div className="flex items-center gap-0.5">
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {comment.titleRate}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {comment.descRate}
                                </p>

                                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 space-y-1">
                                    <p>
                                        Dikunjungi{" "}
                                        <span className="font-medium text-gray-600">
                                            {comment.lastRead}
                                        </span>
                                    </p>
                                    <p>Ditulis {comment.writeRate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailExplore;
