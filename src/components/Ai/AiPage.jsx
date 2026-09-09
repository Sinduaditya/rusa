import { useState, useCallback } from "react";
import Sidebar from "./sidebar.jsx";
import AiMain from "./AiMain.jsx";
import { sendMessage } from "../../services/gemini.js";

function AiPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const activeChat = chats.find((chat) => chat.id === activeChatId);

    const handleNewChat = useCallback(() => {
        const newChat = {
            id: Date.now().toString(),
            title: "Chat Baru",
            updatedAt: new Date().toISOString(),
        };
        setChats((prev) => [newChat, ...prev]);
        setActiveChatId(newChat.id);
        setMessages([]);
        setIsSidebarOpen(false);
    }, []);

    const handleSelectChat = useCallback((chatId) => {
        setActiveChatId(chatId);
        setIsSidebarOpen(false);
    }, []);

    const handleSendMessage = useCallback(async (content) => {
        if (!content.trim() || isLoading) return;

        // Create new chat if none active
        let currentChatId = activeChatId;
        if (!currentChatId) {
            const newChat = {
                id: Date.now().toString(),
                title: content.slice(0, 30) + (content.length > 30 ? "..." : ""),
                updatedAt: new Date().toISOString(),
            };
            setChats((prev) => [newChat, ...prev]);
            currentChatId = newChat.id;
            setActiveChatId(currentChatId);
        } else {
            // Update chat title with first message
            if (messages.length === 0) {
                setChats((prev) =>
                    prev.map((chat) =>
                        chat.id === currentChatId
                            ? { ...chat, title: content.slice(0, 30) + (content.length > 30 ? "..." : "") }
                            : chat
                    )
                );
            }
        }

        // Add user message
        const userMessage = { role: "user", content };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Send to Gemini API
            const response = await sendMessage(content, messages);
            const aiMessage = { role: "assistant", content: response };
            setMessages((prev) => [...prev, aiMessage]);

            // Update chat timestamp
            setChats((prev) =>
                prev.map((chat) =>
                    chat.id === currentChatId
                        ? { ...chat, updatedAt: new Date().toISOString() }
                        : chat
                )
            );
        } catch (error) {
            const errorMessage = {
                role: "assistant",
                content: `Maaf, terjadi kesalahan: ${error.message}. Silakan coba lagi.`,
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [activeChatId, messages, isLoading]);

    return (
        <div className="flex h-screen bg-surface font-body">
            {/* Mobile sidebar overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar
                    onClose={() => setIsSidebarOpen(false)}
                    chats={chats}
                    onNewChat={handleNewChat}
                    onSelectChat={handleSelectChat}
                    activeChatId={activeChatId}
                />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Mobile header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white md:hidden">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus-ring"
                        aria-label="Open sidebar"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <span className="font-bold text-midnight">{activeChat?.title || "HaloRek AI"}</span>
                    <div className="w-9" />
                </div>

                <AiMain
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    isLoading={isLoading}
                    onNewChat={handleNewChat}
                />
            </div>
        </div>
    );
}

export default AiPage;
