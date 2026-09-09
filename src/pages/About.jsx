import Team from "../components/About/Team.jsx";
import ReviewUser from "../components/About/ReviewUser.jsx";
import WhatWedo from "../components/About/WhatWedo.jsx";
import AboutUs from "../components/About/AboutUs.jsx";

const About = () => {
    return (
        <section className="min-h-screen bg-surface">
            <AboutUs />
            <WhatWedo />
            <Team />
            <ReviewUser />
        </section>
    );
}

export default About;
