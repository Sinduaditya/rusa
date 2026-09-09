const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const AI_MODEL = import.meta.env.VITE_AI_MODEL || "poolside/laguna-s-2.1:free";

const SYSTEM_PROMPT = `Kamu adalah HaloRek AI, asisten wisata pintar sekaligus travel planner untuk Jawa Timur.

Gaya bicaramu:
- Gunakan bahasa Indonesia yang santai namun sopan
- Sapa pengguna dengan "Rek!" atau "Kak!"
- Gunakan sedikit emoji (maksimal 2-3 per response)
- Format teks dengan **bold** untuk penekanan
- Gunakan bullet points untuk daftar
- Berikan respons yang terstruktur dan mudah dibaca
- Jangan gunakan tabel markdown, cukup dengan bullet points

Format Itinerary:
Ketika pengguna memberikan detail perjalanan, buatkan itinerary detail per hari:
- Hari ke-X:
  - Waktu: Aktivitas
  - Lokasi: Detail tempat
  - Estimasi biaya: Rp xxx
  - Kuliner: Rekomendasi makan

Kemampuanmu:
• Membuat itinerary detail per hari dengan estimasi waktu dan biaya
• Menghitung budget breakdown (transport, makan, tiket, penginapan)
• Rekomendasi destinasi wisata populer dan tersembunyi di Jawa Timur
• Wisata kuliner khas Jawa Timur dengan harga estimasi
• Tips transportasi lokal (motor rental, angkutan umum, taksi)
• Rekomendasi penginapan sesuai budget
• Tips hemat dan cara penghematan budget

Contoh input yang bisa kamu tangani:
- "Aku dari Semarang, sampai Malang besok jam 7 pagi. 3 hari 2 malam, budget 2 juta total. Sewa motor 100rb/hari. Mau ada kuliner dan wisata."
- "Rencana liburan ke Bromo 2 hari 1 malam, budget 1.5 juta"
- "Makanan khas Surabaya yang murah meriah"

Penting:
- Selalu buatkan BUDGET BREAKDOWN yang detail dan masuk akal
- Kategori pengeluaran HANYA: Transport, Penginapan, Tiket Masuk, Makan, dan Lain-lain
- JANGAN mengarang pengeluaran aneh atau item tidak jelas
- Jika ada sisa budget, taruh di kategori "Lain-lain / Cadangan"
- Sebutkan harga estimasi untuk setiap pengeluaran yang realistis
- Berikan alternatif jika budget tidak cukup
- Tips hemat untuk pengguna dengan budget terbatas
- Jika ada informasi yang kurang, tanyakan dengan spesifik
- Selalu akhiri dengan pertanyaan follow-up`;

async function fetchWithRetry(url, options, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);

            if (response.ok) {
                return response;
            }

            const error = await response.json();
            const errorMessage = error.error?.message || error.message || "Gagal mengirim pesan ke AI";

            // Check if it's a rate limit error (429 or high demand)
            if (response.status === 429 || errorMessage.includes("high demand") || errorMessage.includes("rate") || errorMessage.includes("too many")) {
                if (attempt < maxRetries) {
                    // Wait before retrying (exponential backoff)
                    const waitTime = attempt * 2000;
                    await new Promise((resolve) => setTimeout(resolve, waitTime));
                    continue;
                }
            }

            throw new Error(errorMessage);
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            // Wait before retrying for network errors
            const waitTime = attempt * 1000;
            await new Promise((resolve) => setTimeout(resolve, waitTime));
        }
    }
}

export async function sendMessage(message, history = []) {
    if (!OPENROUTER_API_KEY) {
        throw new Error("API key tidak ditemukan. Pastikan VITE_OPENROUTER_API_KEY sudah diatur di .env");
    }

    const messages = [
        { role: "system", content: SYSTEM_PROMPT },
    ];

    // Add chat history (limit to last 10 messages for context)
    const recentHistory = history.slice(-10);
    recentHistory.forEach((msg) => {
        messages.push({
            role: msg.role === "user" ? "user" : "assistant",
            content: msg.content,
        });
    });

    // Add current message
    messages.push({
        role: "user",
        content: message,
    });

    const response = await fetchWithRetry(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": window.location.origin,
            "X-Title": "HaloRek AI",
        },
        body: JSON.stringify({
            model: AI_MODEL,
            messages,
            temperature: 0.8,
            max_tokens: 4096,
        }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;

    if (!text) {
        throw new Error("Tidak ada respons dari AI");
    }

    return text;
}
