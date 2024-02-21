import HeroCarousel from "../components/HeroCarousel.jsx";
import HeroSection from "../components/HeroSection.jsx";
import PopularDestination from "../components/PopularDestination.jsx";
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
            </div>
        </>
    );
};
export default Home;
