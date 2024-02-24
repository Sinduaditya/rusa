import GetTips from "../components/Home/GetTips.jsx";
import HeroCarousel from "../components/Home/HeroCarousel.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import PopularDestination from "../components/Home/PopularDestination.jsx";
import Review from "../components/Home/Review.jsx";
import WhatsNext from "../components/Home/WhatsNext.jsx";

const Home = () => {
    return (
        <>
            <div className="bg-bluelight relative z-10">
                <div
                    className="absolute -left-[450px] top-32 w-[900px] h-[900px]  z-[-1] bg-yellow rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 -top-15 w-[500px] h-[500px]  z-[-1] bg-primary rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>
                <div
                    className="absolute right-0 top-[1000px] w-[500px] h-[400px]  z-[-1] bg-greenlight rounded-[100%] mix-blend-multiply  filter blur-2xl opacity-15 animate-blob animation-delay-100"></div>

                <div className="mx-auto max-w-screen-xl px-4 pt-[40px]  font-poppins">
                    <HeroSection/>
                    {/*End header*/}
                    {/* Explore*/}
                    <HeroCarousel/>
                    {/*Explore.jsx */}
                    {/*Destination Popular*/}
                    <PopularDestination/>
                    {/*End Destination Popular*/}
                    {/* WhatsNExt */}
                    <WhatsNext/>
                    {/* End Ehats */}
                    {/* Get Tips from Travellers */}
                    <GetTips/>
                    {/* END Get Tips from Travellers */}
                    {/* Review dan Testimonial */}
                    <Review/>
                    {/* END Review dan Testimonial */}
                </div>
            </div>

        </>
    );
};
export default Home;
