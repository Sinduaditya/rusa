import Save from "../../assets/stories/archive.svg";
import { storiesData } from "../data/storiesData.jsx";
import { useParams, Link } from "react-router-dom";
import profilePicture from "../../assets/profile-icon.svg";
import { useState, useEffect } from "react";

function DetailStories() {
    const { id } = useParams();
    const selectedItem = storiesData.find((item) => item.id === parseInt(id));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!selectedItem) {
        return (
            <div className="min-h-screen bg-surface flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 text-lg">Cerita tidak ditemukan</p>
                    <Link
                        to="/stories"
                        className="mt-4 inline-block text-primary hover:underline"
                    >
                        Kembali ke Stories
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-surface">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
                <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Back Button */}
                <div className="absolute top-6 left-6 z-10">
                    <Link
                        to="/stories"
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
                            <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium tracking-wide mb-4">
                                {selectedItem.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-3xl">
                                {selectedItem.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Author & Meta */}
                        <div
                            className={`flex flex-wrap items-center justify-between gap-4 mb-8 transition-all duration-700 delay-200 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={profilePicture}
                                    alt={selectedItem.author}
                                    className="w-12 h-12 rounded-full object-cover bg-surface"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {selectedItem.author}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {selectedItem.date}
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                <img src={Save} alt="" className="h-4 w-4" />
                                Save
                            </button>
                        </div>

                        {/* Article Content */}
                        <div
                            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <div className="prose prose-lg max-w-none font-body text-gray-700 leading-relaxed space-y-6">
                                <p>{selectedItem.description}</p>
                                <p>{selectedItem.paragraphOne}</p>
                                <p>{selectedItem.paragraphTwo}</p>
                                <p>{selectedItem.paragraphThree}</p>
                                <p>{selectedItem.paragraphFour}</p>

                                {selectedItem.paragraphFive && (
                                    <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-surface rounded-r-xl">
                                        <p className="text-gray-700 italic text-lg">
                                            {selectedItem.paragraphFive}
                                        </p>
                                    </blockquote>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div
                            className={`sticky top-24 bg-white rounded-2xl p-6 shadow-sm transition-all duration-700 delay-400 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            <div className="text-center">
                                <img
                                    src={profilePicture}
                                    alt={selectedItem.author}
                                    className="w-20 h-20 rounded-full object-cover mx-auto bg-surface"
                                />
                                <h3 className="mt-4 font-bold text-gray-900 font-display">
                                    {selectedItem.author}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Editor
                                </p>
                                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                    {selectedItem.intro}
                                </p>
                                <button className="mt-6 w-full py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-colors shadow-md shadow-primary/25">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailStories;
