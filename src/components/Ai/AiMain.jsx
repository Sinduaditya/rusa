/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import compas from "../../assets/ai/compas.svg";
import bed from "../../assets/ai/sleep.svg";
import kereta from "../../assets/ai/kereta.svg";
import food from "../../assets/ai/coffe.svg";

function parseInlineMarkdown(text) {
    if (!text) return text;
    const parts = [];
    const regex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
            <strong key={`b-${match.index}`} className="font-semibold">{match[1]}</strong>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
}

function parseMarkdown(text) {
    if (!text) return null;

    const lines = text.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Horizontal rule (---)
        if (/^---+$/.test(line.trim())) {
            elements.push(<hr key={`hr-${i}`} className="my-4 border-gray-200" />);
            i++;
            continue;
        }

        // Table detection
        if (line.includes("|") && i + 1 < lines.length && /^\|[\s-:|]+\|$/.test(lines[i + 1]?.trim())) {
            const tableLines = [];
            while (i < lines.length && lines[i].includes("|")) {
                tableLines.push(lines[i]);
                i++;
            }

            // Parse table
            const headerCells = tableLines[0]?.split("|").filter(c => c.trim()).map(c => c.trim());
            const bodyRows = tableLines.slice(2).map(row =>
                row.split("|").filter(c => c.trim()).map(c => c.trim())
            );

            elements.push(
                <div key={`table-${i}`} className="overflow-x-auto my-3">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-primary/10">
                                {headerCells?.map((cell, ci) => (
                                    <th key={ci} className="px-3 py-2 text-left font-semibold text-midnight border border-gray-200">
                                        {parseInlineMarkdown(cell)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row, ri) => (
                                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    {row.map((cell, ci) => (
                                        <td key={ci} className="px-3 py-2 border border-gray-200">
                                            {parseInlineMarkdown(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }

        // Heading ##, ### or ####
        const headingMatch = line.match(/^(#{2,4})\s+(.+)/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const content = headingMatch[2];
            if (level === 2) {
                elements.push(
                    <h3 key={`h2-${i}`} className="text-lg font-bold text-midnight mt-4 mb-2">
                        {parseInlineMarkdown(content)}
                    </h3>
                );
            } else if (level === 3) {
                elements.push(
                    <h4 key={`h3-${i}`} className="text-base font-semibold text-midnight mt-3 mb-1">
                        {parseInlineMarkdown(content)}
                    </h4>
                );
            } else {
                elements.push(
                    <h5 key={`h4-${i}`} className="text-sm font-semibold text-midnight mt-2 mb-1">
                        {parseInlineMarkdown(content)}
                    </h5>
                );
            }
            i++;
            continue;
        }

        // Bullet point (• or -)
        if (/^[•-]\s/.test(line.trim())) {
            const content = line.trim().replace(/^[•-]\s/, "");
            elements.push(
                <li key={`li-${i}`} className="ml-4 text-sm leading-relaxed list-disc">
                    {parseInlineMarkdown(content)}
                </li>
            );
            i++;
            continue;
        }

        // Numbered list
        const numMatch = line.trim().match(/^(\d+)\.\s+(.+)/);
        if (numMatch) {
            elements.push(
                <li key={`ol-${i}`} className="ml-4 text-sm leading-relaxed list-decimal">
                    {parseInlineMarkdown(numMatch[2])}
                </li>
            );
            i++;
            continue;
        }

        // Empty line
        if (line.trim() === "") {
            elements.push(<div key={`br-${i}`} className="h-2" />);
            i++;
            continue;
        }

        // Regular text
        elements.push(
            <p key={`p-${i}`} className="text-sm leading-relaxed">
                {parseInlineMarkdown(line)}
            </p>
        );
        i++;
    }

    return elements;
}

const quickActions = [
    {
        icon: compas,
        title: "Buat Itinerary",
        prompt: "Aku dari Semarang, sampai Malang besok jam 7 pagi. 3 hari 2 malam, budget 2 juta total. Sewa motor 100rb/hari. Mau ada kuliner dan wisata. Tolong buatkan itinerary detail!",
    },
    {
        icon: bed,
        title: "Cari Penginapan",
        prompt: "Cari penginapan murah di Malang untuk 2 malam, budget maksimal 300 ribu. Yang dekat dengan tempat wisata.",
    },
    {
        icon: kereta,
        title: "Estimasi Budget",
        prompt: "Rencana liburan ke Bromo dari Surabaya, 2 hari 1 malam. Budget 1.5 juta. Berapa estimasi biaya totalnya? Tolong rincikan.",
    },
    {
        icon: food,
        title: "Kuliner Hemat",
        prompt: "Rekomendasi kuliner khas Malang yang murah meriah, di bawah 30 ribu per porsi. Yang wajib dicoba!",
    },
];

function AiMain({ messages, onSendMessage, isLoading, onNewChat }) {
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input.trim());
            setInput("");
        }
    };

    const handleQuickAction = (prompt) => {
        if (!isLoading) {
            onSendMessage(prompt);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-white">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto">
                {messages.length === 0 ? (
                    // Welcome Screen
                    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 py-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                                </svg>
                            </div>
                            <h1 className="font-display text-3xl sm:text-4xl font-bold text-midnight mb-2">
                                Halo, <span className="text-primary">Rek!</span>
                            </h1>
                            <p className="text-gray-500 text-sm sm:text-base max-w-lg">
                                Aku <span className="font-semibold text-primary">HaloRek AI</span>, travel planner pintar untuk Jawa Timur.
                                Ceritakan rencana liburanmu, nanti aku buatkan itinerary detail + budget breakdown!
                            </p>
                        </div>

                        {/* Quick Action Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickAction(action.prompt)}
                                    disabled={isLoading}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-surface hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <img src={action.icon} className="w-5 h-5" alt="" />
                                    </div>
                                    <span className="text-sm font-medium text-midnight group-hover:text-primary transition-colors">
                                        {action.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Chat Messages
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] sm:max-w-[75%] ${
                                        message.role === "user"
                                            ? "bg-primary text-white rounded-2xl rounded-br-md"
                                            : "bg-surface text-midnight rounded-2xl rounded-bl-md"
                                    } px-4 py-3`}
                                >
                                    {message.role === "assistant" && (
                                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs font-semibold text-primary">HaloRek AI</span>
                                        </div>
                                    )}
                                    <div className="text-sm sm:text-base leading-relaxed">
                                        {parseMarkdown(message.content)}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-surface rounded-2xl rounded-bl-md px-4 py-3">
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-semibold text-primary">HaloRek AI</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                        <span className="text-sm text-gray-500">Mengetik...</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-4">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="flex items-end gap-3">
                        <button
                            type="button"
                            onClick={onNewChat}
                            className="p-3 rounded-xl bg-surface text-gray-500 hover:bg-gray-200 hover:text-midnight transition-colors shrink-0 focus-ring"
                            title="Chat Baru"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <div className="flex-1 relative">
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Tulis pesanmu di sini..."
                                rows={1}
                                disabled={isLoading}
                                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none text-sm sm:text-base text-midnight placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ minHeight: "48px", maxHeight: "120px" }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="p-3 rounded-xl bg-primary text-white hover:bg-primary-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed shrink-0 focus-ring"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-2">
                        HaloRek AI dapat membuat kesalahan. Verifikasi informasi penting.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default AiMain;
