import Save from "../../assets/stories/archive.svg";
import {storiesData} from "../data/storiesData.jsx";
import {useParams} from "react-router-dom";
import React from "react";


function DetailStories(){
    const {id} = useParams();
    const selectedItem = storiesData.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item tidak ditemukan</div>;
    }
    return (
        <>
            <div className="bg-bluelight relative z-10">
                <div
                    className="absolute -left-[450px] top-32 w-[900px] h-[900px]  z-[-1] bg-yellow rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 top-10 w-[500px] h-[500px]  z-[-1] bg-primary rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 top-[1000px] w-[500px] h-[400px]  z-[-1] bg-greenlight rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>

                <div className="mx-auto max-w-screen-xl px-4  pt-[40px] font-poppins">
                    <main className="mt-10">
                        <div className="mb-4 md:mb-0 w-full mx-auto relative">
                            <div className="px-4 lg:px-0">
                                <span className="text-secondary font-light text-md">{selectedItem.category}</span>
                                <h2 className="sm:text-xl md:text-6xl font-semibold text-gray-800 leading-tight">
                                    {selectedItem.title}
                                </h2>
                                <div className="flex justify-between mb-5">
                                    <div
                                        className="w-auto h-auto mt-5  justify-start items-center gap-4 inline-flex">
                                        <img className="w-12 h-12 rounded-full"
                                             src="https://via.placeholder.com/48x48"/>
                                        <div className="flex-col justify-start items-start inline-flex ">
                                            <div
                                                className="text-slate-700 text-sm font-bold font-poppins leading-snug tracking-tight">Luna
                                                Mira
                                            </div>
                                            <div
                                                className="text-secondary text-xs font-normal font-poppins">
                                                {selectedItem.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <a className="border border-midnight  rounded-full inline-flex gap-4 p-2.5">
                                            Save
                                            <img src={Save} className="h-auto w-auto" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img
                                src={selectedItem.image}
                                className="w-full object-cover rounded-2xl"
                                style={{height: "28em"}}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-12">
                            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                                <p className="pb-6">
                                    {selectedItem.description}
                                </p>
                                <p className="pb-6">
                                    Difficulty on insensible reasonable in. From as went he they.
                                    Preference themselves me as thoroughly partiality considered on in
                                    estimating. Middletons acceptance discovered projecting so is so or.
                                    In or attachment inquietude remarkably comparison at an. Is
                                    surrounded prosperous stimulated am me discretion expression. But
                                    truth being state can she china widow. Occasional preference fat
                                    remarkably now projecting uncommonly dissimilar. Sentiments
                                    projection particular companions interested do at my delightful.
                                    Listening newspaper in advantage frankness to concluded unwilling.
                                </p>
                                <p className="pb-6">
                                    Adieus except say barton put feebly favour him. Entreaties
                                    unpleasant sufficient few pianoforte discovered uncommonly ask.
                                    Morning cousins amongst in mr weather do neither. Warmth object
                                    matter course active law spring six. Pursuit showing tedious unknown
                                    winding see had man add. And park eyes too more him. Simple excuse
                                    active had son wholly coming number add. Though all excuse ladies
                                    rather regard assure yet. If feelings so prospect no as raptures
                                    quitting.
                                </p>
                                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    Sportsman do offending supported extremity breakfast by listening.
                                    Decisively advantages nor expression unpleasing she led met. Estate
                                    was tended ten boy nearer seemed. As so seeing latter he should
                                    thirty whence. Steepest speaking up attended it as. Made neat an on
                                    be gave show snug tore.
                                </div>
                                <p className="pb-6">
                                    Exquisite cordially mr happiness of neglected distrusts. Boisterous
                                    impossible unaffected he me everything. Is fine loud deal an rent
                                    open give. Find upon and sent spot song son eyes. Do endeavor he
                                    differed carriage is learning my graceful. Feel plan know is he like
                                    on pure. See burst found sir met think hopes are marry among.
                                    Delightful remarkably new assistance saw literature mrs favourable.
                                </p>
                                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                                    Uneasy barton seeing remark happen his has
                                </h2>
                                <p className="pb-6">
                                    Guest it he tears aware as. Make my no cold of need. He been past in
                                    by my hard. Warmly thrown oh he common future. Otherwise concealed
                                    favourite frankness on be at dashwoods defective at. Sympathize
                                    interested simplicity at do projecting increasing terminated. As
                                    edward settle limits at in.
                                </p>
                                <p className="pb-6">
                                    Dashwood contempt on mr unlocked resolved provided of of. Stanhill
                                    wondered it it welcomed oh. Hundred no prudent he however smiling at
                                    an offence. If earnestly extremity he he propriety something
                                    admitting convinced ye. Pleasant in to although as if differed
                                    horrible. Mirth his quick its set front enjoy hoped had there. Who
                                    connection imprudence middletons too but increasing celebrated
                                    principles joy. Herself too improve gay winding ask expense are
                                    compact. New all paid few hard pure she.
                                </p>
                                <p className="pb-6">
                                    Breakfast agreeable incommode departure it an. By ignorant at on
                                    wondered relation. Enough at tastes really so cousin am of.
                                    Extensive therefore supported by extremity of contented. Is pursuit
                                    compact demesne invited elderly be. View him she roof tell her case
                                    has sigh. Moreover is possible he admitted sociable concerns. By in
                                    cold no less been sent hard hill.
                                </p>
                                <p className="pb-6">
                                    Detract yet delight written farther his general. If in so bred at
                                    dare rose lose good. Feel and make two real miss use easy.
                                    Celebrated delightful an especially increasing instrument am.
                                    Indulgence contrasted sufficient to unpleasant in in insensible
                                    favourable. Latter remark hunted enough vulgar say man. Sitting
                                    hearted on it without me.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                                <div className="p-4 border-t border-b md:border md:rounded">
                                    <div className="flex py-2">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/97.jpg"
                                            className="h-10 w-10 rounded-full mr-2 object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-700 text-sm">
                                                {" "}
                                                Mike Sullivan{" "}
                                            </p>
                                            <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 py-3">
                                        Mike writes about technology Yourself required no at thoughts
                                        delicate landlord it be. Branched dashwood do is whatever it.
                                    </p>
                                    <button
                                        className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                        Follow
                                        <i className="bx bx-user-plus ml-2"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DetailStories;