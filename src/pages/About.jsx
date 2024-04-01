import Team from "../components/About/Team.jsx";
import ReviewUser from "../components/About/ReviewUser.jsx";
import WhatWedo from "../components/About/WhatWedo.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import { useEffect } from "react";
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);
    return (
        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-lg px-4 font-poppins pt-[20px] ">
                    {/*  About Start*/}
                    <AboutUs />
                    {/*    About End*/}
                    {/*Our service*/}
                    <div data-aos="fade-up">
                    <WhatWedo />
                    </div>
                    {/*Our Service End*/}
                    {/*Our Team*/}
                    <Team />
                    {/*Our Team End*/}
                    {/*    ulasan Pengguna*/}
                    <ReviewUser />
                </div>
            </div>
        </>
    );
}

export default About;
