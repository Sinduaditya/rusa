import Save from "../../assets/stories/archive.svg";
import {storiesData} from "../data/storiesData.jsx";
import {useParams} from "react-router-dom";

function DetailStories(){
    const {id} = useParams();
    const selectedItem = storiesData.find((item) => item.id === parseInt(id));
    if (!selectedItem) {
        return <div>Item tidak ditemukan</div>;
    }
    return (
        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-xl px-4  pt-[40px] font-poppins">
                    <main className="mt-10">
                        <div className="mb-4 md:mb-0 w-full mx-auto relative">
                            <div className="px-4 lg:px-0">
                                <span className="text-secondary font-light ml-1 text-md">{selectedItem.category}</span>
                                <h2 className="sm:text-xl md:text-6xl mt-2 font-semibold text-gray-800 leading-tight">
                                    {selectedItem.title}
                                </h2>
                                <div className="flex justify-between mb-5">
                                    <div
                                        className="w-auto h-auto mt-5  justify-start items-center gap-4 inline-flex">
                                        <img className="w-12 h-12 rounded-full"
                                             src="https://via.placeholder.com/48x48"/>
                                        <div className="flex-col justify-start items-start inline-flex ">
                                            <div
                                                className="text-slate-700 text-sm font-bold font-poppins leading-snug tracking-tight">
                                                {selectedItem.author}
                                            </div>
                                            <div
                                                className="text-secondary text-xs font-normal font-poppins">
                                                {selectedItem.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <a className="border border-midnight rounded-full inline-flex gap-4 p-2 pl-3 pr-3">
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
                                    {selectedItem.paragraphOne}
                                </p>
                                <p className="pb-6">
                                    {selectedItem.paragraphTwo}
                                </p>
                                <p className="pb-6">
                                    {selectedItem.paragraphThree}
                                </p>
                                <p className="pb-6">
                                    {selectedItem.paragraphFour}
                                </p>
                                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    {selectedItem.paragraphFive}
                                </div>
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
                                                {selectedItem.author}
                                            </p>
                                            <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 py-3">
                                        {selectedItem.intro}
                                    </p>
                                    <button
                                        className="px-2 py-1 border hover:border-none hover:text-white hover:bg-midnight flex w-full items-center justify-center rounded">
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