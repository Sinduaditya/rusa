import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import GetTips from "../components/Home/GetTips.jsx";
import HeroCarousel from "../components/Home/HeroCarousel.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import PopularDestination from "../components/Home/PopularDestination.jsx";
import Review from "../components/Home/Review.jsx";
import WhatsNext from "../components/Home/WhatsNext.jsx";
import Ai from "../assets/home/ai.svg";
import IntroAi from "../components/Home/IntroAi.jsx";

const Home = () => {
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
                    {/*Introduce AI*/}
                    <IntroAi />
                    {/*End Introduce*/}
                    {/* Get Tips from Travellers */}
                    <GetTips />
                    {/* END Get Tips from Travellers */}
                    {/* Review dan Testimonial */}
                    <Review />
                    {/* END Review dan Testimonial */}
                </div>
            </div>
        </>
    );
};
export default Home;
