import { motion, useTransform, useViewportScroll } from "framer-motion";
import GetTips from "../components/Home/GetTips.jsx";
import HeroCarousel from "../components/Home/HeroCarousel.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import PopularDestination from "../components/Home/PopularDestination.jsx";
import Review from "../components/Home/Review.jsx";
import WhatsNext from "../components/Home/WhatsNext.jsx";
import FloatingButtonIcon from "../assets/home/floating-button.svg"; // Renamed import
import IntroAi from "../components/Home/IntroAi.jsx";

const FloatingButton = () => {
    return (
        <motion.button
            className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={"/dolanrek-ai"}>
                <img src={FloatingButtonIcon} alt="Floating Button" />{" "}
                {/* Use the imported SVG icon */}
            </Link>
        </motion.button>
    );
};

const Home = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);
    const scale2 = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);
    const scale3 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-xl px-4 pt-[40px]  font-poppins">
                    <HeroSection />
                    {/*End header*/}
                    {/* Explore*/}
                    <HeroCarousel />
                    {/*Explore.jsx */}
                    {/*Destination Popular*/}
                    <PopularDestination />
                    {/*End Destination Popular*/}
                    {/* WhatsNExt */}
                    <WhatsNext />
                    {/* End Ehats */}
                    <motion.div style={{ scale }}>
                        {/*Introduce AI*/}
                        <IntroAi />
                        {/*End Introduce*/}
                    </motion.div>
                    <motion.div style={{ scale: scale2 }}>
                        {" "}
                        {/* Corrected scale value */}
                        {/* Get Tips from Travellers */}
                        <GetTips />
                        {/* END Get Tips from Travellers */}
                    </motion.div>
                    <motion.div style={{ scale: scale3 }}>
                        {" "}
                        {/* Corrected scale value */}
                        {/* Review dan Testimonial */}
                        <Review />
                        {/* END Review dan Testimonial */}
                    </motion.div>
                </div>
            </div>
            <FloatingButton />
        </>
    );
};
export default Home;
