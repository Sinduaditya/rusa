import React, { useState } from "react";
import Calvin from "../../assets/about/calvin.jpeg";
import Arya from "../../assets/about/senarya.jpeg";
import Sindu from "../../assets/about/sindu.jpg";

const Team = () => {
    const people = [
        {
            firstname: "Sindu",
            lastname: "Aditya",
            role: "Hustler And Frontend Dev",
            picture: Sindu,
            description:
                "Halo semuanya 👋, Perkenalkan nama saya Sindu Aditya Janadi seorang mahasiswa semester 2 dari Universitas Dian Nuswantoro Semarang",
            facebookURL: "",
            twitterURL: "",
            linkedinURL: "",
            youtubeURL: "",
        },
        {
            firstname: "Calvin",
            lastname: "Simbolon",
            role: "Designer And Frontend Dev",
            picture: Calvin,
            description:
                "Halo semuanya 👋, Gadis koleris yang suka berimajinasi, terangi hari-Mu dengan senyum caramelku, halo semuanya aku Freya!",
            facebookURL: "",
            twitterURL: "",
            linkedinURL: "https://www.linkedin.com/in/aplicalvin",
            youtubeURL: "",
        },
        {
            firstname: "Senarya",
            lastname: "Samuel",
            role: "Product Designer / UI UX",
            picture: Arya,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores ea est explicabo mollitia quo saepe tenetur ullam unde voluptatem. Architecto aspernatur culpa dolor, doloremque error ipsam, labore necessitatibus nesciunt non nostrum repudiandae sit temporibus ut? Asperiores nisi nulla omnis!",
            facebookURL: "",
            twitterURL: "",
            linkedinURL: "",
            youtubeURL: "",
        },
    ];

    const [member, setMember] = useState(0);

    return (
        <>
            <div className="relative z-10 pb-20">
                <div
                    className="border-white border-opacity-50 backdrop-blur-3xl bg-glass bg-opacity-70 pb-20 shadow-lg rounded-[64px] relative z-20 mx-auto py-2 w-full
         font-poppins "
                >
                    {/* :TITLE CONTAINER */}
                    <div className="mb-8 flex justify-center items-center">
                        <h2 className="px-3 pt-10 text-4xl font-bold text-midnight">
                            Meet <span className="text-primary">Our Team</span>
                        </h2>
                    </div>

                    <div className="mx-auto px-4 w-full max-w-5xl grid grid-cols-2 gap-y-4 sm:gap-y-10">
                        {/* :PICTURES CONTAINER */}
                        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
                            {/* ::Team members */}
                            <ul className="mb-4  sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
                                {people.map((person, index) => (
                                    <li
                                        key={person.lastname}
                                        className={`w-12 h-12 rounded-full  overflow-hidden filter ${
                                            index !== member
                                                ? "saturate-0 hover:brightness-125"
                                                : "saturate-100"
                                        }`}
                                    >
                                        <button
                                            className="w-full h-full"
                                            onClick={() => setMember(index)}
                                        >
                                            <img
                                                src={person.picture}
                                                alt=""
                                                className="object-cover"
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {/* ::Picture selected team member */}
                            <div className="rounded overflow-hidden">
                                <img
                                    src={people[member].picture}
                                    alt=""
                                    className="w-full max-w-xs object-cover rounded-[48px]"
                                />
                            </div>
                        </div>

                        {/* :DETAILS CONTAINER */}
                        <div className="col-span-full p-5 lg:col-span-1 mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
                            {/* ::Role */}
                            <span className="font-bold uppercase text-midnight tracking-wider">
                                {people[member].role}
                            </span>
                            {/* ::Name */}
                            <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
                                <span className="text-primary">
                                    {people[member].firstname}{" "}
                                </span>
                                <span className="text-primary">
                                    {people[member].lastname}
                                </span>
                            </h3>
                            {/* ::Description */}
                            <p className="py-2  text-base text-midnight">
                                {people[member].description}
                            </p>
                            {/* ::Socials */}
                            <div className="mb-4 inline-flex space-x-4">
                                {/* Facebook */}
                                <a
                                    href={people[member].facebookURL}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="midnight"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                                    </svg>
                                </a>
                                {/* Twitter */}
                                <a
                                    href={people[member].twitterURL}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="midnight"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                {/* Linkedin */}
                                <a
                                    href={people[member].linkedinURL}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="midnight"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 30 30"
                                    >
                                        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                                    </svg>
                                </a>
                                {/* Youtube */}
                                <a
                                    href={people[member].youtubeURL}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="midnight"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-32 h-32 md:w-72 md:h-72 -left-[120px] md:-right-[90px] -top-[40px] bg-gradient-to-tl from-blob to-skyblue z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
                <div className="w-36 h-36 md:w-60 md:h-60 -right-[10px] md:-right-[80px] bottom-[10px] bg-gradient-to-tl from-orangeBlob to-yellowBlob z-10 rounded-full blur-lg absolute mix-blend-multiply  animate-blob animation-delay-100" />
            </div>
        </>
    );
};

export default Team;
