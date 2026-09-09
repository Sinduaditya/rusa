import profilePicture from "../../assets/profile-icon.svg";
import Star from "../Star.jsx";
import { arekSayData } from "../data/arekSayData.jsx";

function ReviewUser() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                        ULASAN
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                        Ulasan <span className="text-primary">Pengguna</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {arekSayData.map((item, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    alt="profilUser"
                                    src={profilePicture}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {item.name}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Star />
                                        <p className="text-sm text-gray-400">
                                            {item.rate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewUser;
