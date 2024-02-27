import Team from "../components/About/Team.jsx";
import ReviewUser from "../components/About/ReviewUser.jsx";
import WhatWedo from "../components/About/WhatWedo.jsx";
import AboutUs from "../components/About/AboutUs.jsx";

function About() {
    return (
        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-lg px-4 font-poppins pt-[20px] ">
                    {/*  About Start*/}
                    <AboutUs />
                    {/*    About End*/}
                    {/*Our service*/}
                    <WhatWedo />
                    {/*Our Service End*/}
                    {/*Our Team*/}
                    <Team />
                    {/*Our Team End*/}
                    {/*    ulasan Pengguna*/}
                    <ReviewUser />
                    {/*    Ulasan End*/}
                </div>
            </div>
        </>
    );
}

export default About;
