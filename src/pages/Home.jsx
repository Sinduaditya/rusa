import AOS from 'aos';
import GetTips from "../components/Home/GetTips.jsx";
import HeroCarousel from "../components/Home/HeroCarousel.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import PopularDestination from "../components/Home/PopularDestination.jsx";
import Review from "../components/Home/Review.jsx";
import WhatsNext from "../components/Home/WhatsNext.jsx";
import IntroAi from "../components/Home/IntroAi.jsx";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-xl px-4 pt-[40px]  font-poppins">
                    <HeroSection />
                    {/*End header*/}
                    {/* Explore*/}
                    <div data-aos="fade-up">
                        <HeroCarousel />
                    </div>
                    {/*Explore.jsx */}
                    {/*Destination Popular*/}
                    <div data-aos="fade-right">
                    <PopularDestination />
                    </div>
                    {/*End Destination Popular*/}
                    {/* WhatsNExt */}
                    <WhatsNext />
                    {/* End Whats */}
                    {/*Introduce AI*/}
                    <IntroAi />
                    {/*End Introduce*/}
                    {/* Corrected scale value */}
                    {/* Get Tips from Travellers */}
                    <GetTips />
                    {/* END Get Tips from Travellers */}
                    {/* Corrected scale value */}
                    {/* Review dan Testimonial */}
                    <Review />
                    {/* END Review dan Testimonial */}
                </div>
            </div>
        </>
    );
};

export default Home;
