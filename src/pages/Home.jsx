import GetTips from "../components/GetTips.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import HeroSection from "../components/HeroSection.jsx";
import PopularDestination from "../components/PopularDestination.jsx";
import Review from "../components/Review.jsx";
import WhatsNext from "../components/WhatsNext.jsx";

const Home = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 font-poppin">
                {/*header*/}
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
                {/* Get Tips from Travellers */}
                <GetTips />
                {/* END Get Tips from Travellers */}
                {/* Review dan Testimonial */}
                <Review />
                {/* END Review dan Testimonial */}
            </div>
        </>
    );
};
export default Home;
