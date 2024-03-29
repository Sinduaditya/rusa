import Loc from "../../assets/location2.svg";
import Love from "../../assets/explore/heart.svg";
import { useParams } from "react-router-dom";
import getCategoryImage from "../data/categoryImages.jsx";
import explore from "../../assets/explore/export.svg";
import DestinasiSekitar from "./DestinasiSekitar.jsx";
import Star from "../Star.jsx";
import { exploreData } from "../data/exploreData.jsx";
import profilePicture from "../../assets/profile-icon.svg";
import { Link } from "react-router-dom";

function DetailExplore() {
    const { id } = useParams();
    const selectedItem = exploreData.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item tidak ditemukan</div>;
    }

    const commentsData = selectedItem.comments;
    return (
        <>
            <div className="bg-bluelight ">
                <div className="mx-auto max-w-screen-xl px-4 font-poppins pt-[80px]">
                    <div className="container  mx-auto px-4 md:px-0">
                        <div className="mb-12">
                            <Link
                                to={`/explore/`}
                                className="pl-4 pt-2 pb-2 rounded-3xl hover:bg-midnight hover:text-white items-center border pr-4"
                            >
                                Kembali
                            </Link>
                            <h1 className="text-black sm:text-6xl text-4xl pb-3 mt-10 font-bold font-poppins">
                                {selectedItem.name}
                            </h1>
                            <div className="flex items-center pb-3 gap-2">
                                <img src={Loc} className="w-6 h-6" alt="" />
                                <div className="text-secondary text-base font-medium font-cabin">
                                    {selectedItem.location}
                                </div>
                            </div>
                            <div className="flex gap-3  items-center">
                                <Star />
                                <p className="text-sm pt-1 text-gray-400">
                                    {selectedItem.rating}
                                </p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="px-5 py-1.5 bg-primary mt-2 rounded-3xl flex items-center gap-2">
                                    <div className="text-white text-base font-semibold font-cabin">
                                        Liked
                                    </div>
                                    <img
                                        src={Love}
                                        className="h-6 w-6"
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center mt-2">
                                    {selectedItem.categories.map(
                                        (category, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 inline-flex gap-4 py-2 mr-2 border-[1px] border-gray-400 text-xs rounded-full"
                                            >
                                                <img
                                                    src={getCategoryImage(
                                                        category
                                                    )}
                                                    className="h-4 w-5"
                                                    alt=""
                                                />
                                                <div className="hidden sm:inline-block">
                                                    {category}
                                                </div>
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <img
                                className="w-full h-[600px] object-cover bg-center rounded-2xl"
                                src={selectedItem.image}
                                alt={selectedItem.name}
                            />
                        </div>
                        <div className="md:flex justify-between gap-12">
                            {/*Content*/}
                            <div className="md:w-2/3">
                                <div className="mb-12">
                                    <h2 className="text-slate-700 text-3xl mb-4 font-bold font-poppins">
                                        About
                                    </h2>
                                    <p className="text-black text-medium font-normal font-cabin ">
                                        {selectedItem.description}
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <details
                                        className="group [&_summary::-webkit-details-marker]:hidden"
                                        open
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg ">
                                            <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">
                                                Harga {selectedItem.price}
                                            </h2>

                                            <svg
                                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <div className="mt-4 px-4 leading-relaxed font-medium">
                                            <h3>{selectedItem.kategori}</h3>
                                            <ul>
                                                <li className="ml-10">
                                                    {selectedItem.priceAdult}
                                                </li>
                                            </ul>
                                            <h3 className="mt-3">
                                                {selectedItem.kategori2}
                                            </h3>
                                            <ul>
                                                <li className="ml-10">
                                                    {selectedItem.priceChild}
                                                </li>
                                            </ul>
                                            <h3 className="mt-3">
                                                {selectedItem.kategori3}
                                            </h3>
                                            <ul>
                                                <li className="ml-10">
                                                    {
                                                        selectedItem.hargaKategori3
                                                    }
                                                </li>
                                            </ul>
                                            <h3 className="mt-3">
                                                {selectedItem.kategori4}
                                            </h3>
                                            <ul>
                                                <li className="ml-10">
                                                    {
                                                        selectedItem.hargaKategori4
                                                    }
                                                </li>
                                            </ul>
                                            {/*<p className="mt-5 font-bold border p-2 rounded-3xl text-center">{selectedItem.diskon}</p>*/}
                                        </div>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg ">
                                            <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">
                                                What to expect
                                            </h2>

                                            <svg
                                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <div className="mt-4 px-4 leading-relaxed font-normal">
                                            <p>{selectedItem.expect}</p>
                                        </div>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg ">
                                            <h2 className="text-slate-700 text-2xl mb-4 font-semibold font-poppins">
                                                Additiona information
                                            </h2>

                                            <svg
                                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <div className="mt-4 px-4 leading-relaxed font-normal">
                                            <p>{selectedItem.addInfo}</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <img
                                    src={selectedItem.image}
                                    className="rounded-xl"
                                    alt=""
                                />
                                <Link
                                    to={selectedItem.link}
                                    className="flex justify-center items-center gap-4"
                                    target="_blank"
                                >
                                    <p className="text-center mt-2">
                                        Lihat di Google Maps
                                    </p>
                                    <img
                                        src={explore}
                                        className="h-4 w-4 mt-1"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*    Destinasi lain*/}
                    <section className="bg-bluelight mt-12">
                        <div className=" grid gap-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
                            {/* Destinasi Populer - Bagian Atas (Tulisan dan link "Lihat Semua") */}
                            <div className=" flex w-full ml-2 justify-between">
                                <div className="">
                                    <h1 className="text-sky-950 font-semibold text-2xl">
                                        Destinasi lain sekitarnya
                                    </h1>
                                    <p className="text-md mt-2 text-secondary">
                                        Temukan destinasi terbaik lainnya di
                                        sekitar {selectedItem.name} !
                                    </p>
                                </div>
                            </div>
                            {/* Destinasi Populer - End of Bagian Atas (Tulisan dan link "Lihat Semua") */}

                            <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 justify-center">
                                {/* sudah difilter di PopDestiCard. hanya tampil yang "Pilihan Terbaik" saja dilimit ke 3 teratas. */}
                                <DestinasiSekitar />
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
                                {commentsData.map((comment) => (
                                    <blockquote className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 border-[1px] border-bluelight">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt="user"
                                                src={profilePicture}
                                                className="size-14 rounded-full object-cover"
                                            />

                                            <div>
                                                <p className="mt-0.5 text-lg font-medium text-gray-900">
                                                    {comment.userRate}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex mt-3 justify-start gap-0.5 text-green-500">
                                            <Star />
                                        </div>
                                        <h3 className="font-poppins font-semibold mt-2">
                                            {comment.titleRate}
                                        </h3>
                                        <div>
                                            <p className="mt-2 text-gray-700 font-cabin">
                                                {comment.descRate}
                                            </p>
                                        </div>
                                        <div className="text-sm font-poppins mt-2 font-light">
                                            <p>
                                                Dikunjungi{" "}
                                                <span className="font-semibold">
                                                    {comment.lastRead}
                                                </span>
                                            </p>
                                            <p>Ditulis {comment.writeRate}</p>
                                        </div>
                                    </blockquote>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/*    arek says end*/}
                </div>
            </div>
        </>
    );
}

export default DetailExplore;
