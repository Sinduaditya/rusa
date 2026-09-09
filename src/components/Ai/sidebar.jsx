/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Sidebar({ onClose, chats, onNewChat, onSelectChat, activeChatId }) {
    const todayChats = chats.filter((chat) => {
        const chatDate = new Date(chat.updatedAt);
        const today = new Date();
        return chatDate.toDateString() === today.toDateString();
    });

    const olderChats = chats.filter((chat) => {
        const chatDate = new Date(chat.updatedAt);
        const today = new Date();
        return chatDate.toDateString() !== today.toDateString();
    });

    return (
        <div className="flex flex-col w-72 h-full bg-white border-r border-gray-200 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <Link
                            to="/"
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Kembali
                        </Link>
                        {/* Mobile close button */}
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 md:hidden focus-ring"
                            aria-label="Close sidebar"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* New Chat Button */}
                    <button
                        onClick={onNewChat}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-600 transition-all shadow-sm hover:shadow-md focus-ring"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Chat Baru
                    </button>
                </div>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-3">
                    {todayChats.length > 0 && (
                        <div className="mb-4">
                            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Hari Ini
                            </p>
                            <ul className="space-y-1">
                                {todayChats.map((chat) => (
                                    <li key={chat.id}>
                                        <button
                                            onClick={() => onSelectChat(chat.id)}
                                            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
                                                activeChatId === chat.id
                                                    ? "bg-primary/10 text-primary font-medium"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                        >
                                            <span className="line-clamp-1">{chat.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {olderChats.length > 0 && (
                        <div>
                            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Sebelumnya
                            </p>
                            <ul className="space-y-1">
                                {olderChats.map((chat) => (
                                    <li key={chat.id}>
                                        <button
                                            onClick={() => onSelectChat(chat.id)}
                                            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
                                                activeChatId === chat.id
                                                    ? "bg-primary/10 text-primary font-medium"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                        >
                                            <span className="line-clamp-1">{chat.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {chats.length === 0 && (
                        <div className="px-3 py-8 text-center">
                            <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                            <p className="text-sm text-gray-400">Belum ada chat</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-surface">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-midnight">HaloRek AI</p>
                            <p className="text-xs text-gray-500">Asisten Wisata Jatim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
