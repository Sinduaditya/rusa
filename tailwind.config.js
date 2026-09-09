/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#00B5EF",
                    50: "#E6F9FD",
                    100: "#B3EEFA",
                    200: "#80E3F6",
                    300: "#4DD8F3",
                    400: "#1ACEEF",
                    500: "#00B5EF",
                    600: "#0091BF",
                    700: "#006D8F",
                    800: "#004A60",
                    900: "#002630",
                },
                midnight: {
                    DEFAULT: "#1B2A4A",
                    50: "#E8EBF0",
                    100: "#C5CCD9",
                    200: "#9EA9C2",
                    300: "#7786AB",
                    400: "#596B99",
                    500: "#3B5087",
                    600: "#2D3F6A",
                    700: "#1B2A4A",
                    800: "#111C33",
                    900: "#080E1B",
                },
                surface: {
                    DEFAULT: "#F0F5FC",
                    warm: "#FAFAF7",
                    card: "#FFFFFF",
                },
                accent: {
                    coral: "#FF6B6B",
                    amber: "#F5A623",
                    emerald: "#2ECC71",
                },
                bluelight: "#EBF5FF",
            },
            fontFamily: {
                display: ['"Plus Jakarta Sans"', "Poppins", "sans-serif"],
                body: ['"Plus Jakarta Sans"', "Poppins", "sans-serif"],
                poppins: ['"Plus Jakarta Sans"', "Poppins", "sans-serif"],
                cabin: ['"Cabin"', "sans-serif"],
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
                "4xl": "2rem",
            },
            boxShadow: {
                soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
                card: "0 4px 20px -2px rgba(27, 42, 74, 0.08)",
                glow: "0 0 40px rgba(0, 181, 239, 0.15)",
                elevated: "0 10px 40px -10px rgba(27, 42, 74, 0.12)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.5s ease-out forwards",
                "scale-in": "scaleIn 0.4s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                "pulse-soft": "pulseSoft 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulseSoft: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" },
                },
            },
        },
    },
    plugins: [],
};
