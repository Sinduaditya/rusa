/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#00B5EF",
                    midnight: "#304862",
                    secondary: "#8C9FB5",
                    bluelight: "#E6F1FF",
                    white: "#F8F9FD",
                    darkgreen: "#14A7A0",
                    greenlight: "#57CBB9",
                    orange: "#FFCC73",
                    orangelight: "#FFEAC5",
                },
            },
        ],
    },
    theme: {
        colors: {
            primary: "#00B5EF",
            midnight: "#304862",
            secondary: "#8C9FB5",
            bluelight: "#E6F1FF",
            white: "#FFFFFF",
            darkgreen: "#14A7A0",
            greenlight: "#57CBB9",
            orange: "#FFCC73",
            orangelight: "#FFEAC5",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            cabin: ["Cabin", "sans-serif"],
        },
    },
};
