import  profilePicture from "../../assets/profile-icon.svg";
import Star from "../Star.jsx";
import {arekSayData} from "../data/arekSayData.jsx";

function ReviewUser(){

    return (
        <>
            <div className="bg-bluelight" id="review">
                <section className="bg-transparent mx-auto max-w-screen-xl px-4 font-poppins ">
                    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Ulasan <span className="text-primary">Pengguna</span>
                        </h2>

                        <div
                            className="mt-16 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                            {arekSayData.map((item, index) => (
                                <div key={index} className="mb-8 sm:break-inside-avoid">
                                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt="profilUser"
                                                src={profilePicture}
                                                className="size-14 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="mt-0.5 text-lg font-medium text-gray-900">{item.name}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center mt-2">
                                            <Star/>
                                            <p className="text-normal text-gray-400 pt-1 ">
                                                {item.rate}
                                            </p>
                                        </div>
                                        <p className="mt-4 text-gray-700">{item.description}</p>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ReviewUser;