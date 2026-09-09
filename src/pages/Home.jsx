import AOS from "aos";
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
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <div className="bg-surface min-h-screen">
            {/* Hero */}
            <section className="pt-4 pb-0 sm:pt-6">
                <HeroSection />
            </section>

            {/* Lifestyle / Explore */}
            <HeroCarousel />

            {/* Popular Destinations */}
            <PopularDestination />

            {/* What's Next / Recommendations */}
            <WhatsNext />

            {/* AI Feature */}
            <IntroAi />

            {/* Travel Tips */}
            <GetTips />

            {/* Reviews */}
            <Review />
        </div>
    );
};

export default Home;
