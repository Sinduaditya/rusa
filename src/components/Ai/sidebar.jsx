import message from "../../assets/ai/message-add.svg";
import add from "../../assets/ai/addmessage.svg";
import up from "../../assets/ai/up.svg";
import compas from "../../assets/ai/compas.svg";
import bed from "../../assets/ai/sleep.svg";
import kereta from "../../assets/ai/kereta.svg";
import food from "../../assets/ai/coffe.svg";

function ListItem({ text }) {
    return (
        <li className="inline-flex mb-8 items-center gap-2">
            <img src={add} className="h-4 w-4" alt="" />
            <p>{text}</p>
        </li>
    );
}

function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-bluelight relative">
                {/* Blob */}
                <div className="absolute top-1/2 -left-[20px] transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-10 rounded-full bg-gradient-to-tl from-blob to-skyblue mix-blend-multiply blur-[500px]" />

                <div className="flex items-center justify-center h-16">
                    <button className="text-white flex gap-2 rounded-lg pl-[20px] pr-16 items-center py-3 px-12 bg-gradient-to-r from-[#1B8DFF] to-[#00B5EF]">
                        <img src={message} className="h-5 w-5" alt="" />
                        <span className="pt-1">Chat Baru</span>
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 pl-8 border border-white">
                        <div>
                            <a
                                href="#"
                                className="flex items-center px-4 py-2 text-lg"
                            >
                                Hari Ini
                            </a>
                            <ul className="text-md ml-8 mt-5">
                                <ListItem text="Bagaimana Cara.." />
                                <ListItem text="Bagaimana Cara.." />
                                <ListItem text="Bagaimana Cara.." />
                            </ul>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="flex items-center px-4 py-2 text-lg"
                            >
                                Bulan Ini
                            </a>
                            <ul className="text-md ml-8 mt-5">
                                <ListItem text="Bagaimana Cara.." />
                                <ListItem text="Bagaimana Cara.." />
                                <ListItem text="Bagaimana Cara.." />
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
