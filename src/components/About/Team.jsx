import { useState } from "react";
import Calvin from "../../assets/about/calvin.jpeg";
import Arya from "../../assets/about/senarya.jpeg";
import Sindu from "../../assets/about/sindu.jpg";

const people = [
    {
        firstname: "Sindu",
        lastname: "Aditya",
        role: "Hustler And Frontend Dev",
        picture: Sindu,
        description:
            "Halo semuanya, Perkenalkan nama saya Sindu Aditya Janadi seorang mahasiswa semester 2 dari Universitas Dian Nuswantoro Semarang",
        facebookURL: "",
        twitterURL: "",
        linkedinURL: "#",
    },
    {
        firstname: "Calvin",
        lastname: "Simbolon",
        role: "Designer And Frontend Dev",
        picture: Calvin,
        description:
            "Bagai kucing yang kalem, tapi selalu mengikat hati. Halo semuanya aku Calvin",
        facebookURL: "",
        twitterURL: "",
        linkedinURL: "https://www.linkedin.com/in/aplicalvin",
        youtubeURL: "",
    },
    {
        firstname: "Sen",
        lastname: "Arya",
        role: "UI Design And Illustrator",
        picture: Arya,
        description: "Seperti Simphoni yang menenangkan hati, hai aku Sen!",
        facebookURL: "",
        twitterURL: "",
        linkedinURL: "#",
    },
];

function Team() {
    const [member, setMember] = useState(0);

    return (
        <section className="py-16 px-6 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                        TIM KAMI
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                        Meet <span className="text-primary">Our Team</span>
                    </h2>
                </div>

                <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
                        {/* Thumbnails */}
                        <div className="flex lg:flex-col gap-3">
                            {people.map((person, index) => (
                                <button
                                    key={person.lastname}
                                    onClick={() => setMember(index)}
                                    className={`w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 ${
                                        index === member
                                            ? "ring-2 ring-primary ring-offset-2 scale-110"
                                            : "opacity-50 hover:opacity-80 grayscale"
                                    }`}
                                >
                                    <img
                                        src={person.picture}
                                        alt={`${person.firstname} ${person.lastname}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={people[member].picture}
                                alt={`${people[member].firstname} ${people[member].lastname}`}
                                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center lg:text-left">
                            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                                {people[member].role}
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display mt-2">
                                {people[member].firstname}{" "}
                                {people[member].lastname}
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {people[member].description}
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center lg:justify-start gap-3 mt-6">
                                {people[member].facebookURL && (
                                    <a
                                        href={people[member].facebookURL}
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                                        </svg>
                                    </a>
                                )}
                                {people[member].linkedinURL && (
                                    <a
                                        href={people[member].linkedinURL}
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                )}
                                {people[member].twitterURL && (
                                    <a
                                        href={people[member].twitterURL}
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                                        aria-label="Twitter"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                )}
                                {people[member].youtubeURL && (
                                    <a
                                        href={people[member].youtubeURL}
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                                        aria-label="YouTube"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
