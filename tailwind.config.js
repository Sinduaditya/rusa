/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#00B5EF",
            skyblue: "#89E2FF",
            orangeBlob: "#FF8925",
            yellowBlob: "#FFD75E",
            midnight: "#304862",
            secondary: "#8C9FB5",
            bluelight: "#F4F9FF",
            glass: "#F3F6FD",
            white: "#FFFFFF",
            blob: "#0078FF",
            darkgreen: "#14A7A0",
            greenlight: "#57CBB9",
            orange: "#FFCC73",
            orangelight: "#FFEAC5",
            purple: "#d8b4fe",
            yellow: "#fde047",
            pink: "#f9a8d4",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            cabin: ["Poppins", "sans-serif"],
        },
    },
};
