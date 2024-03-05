import Team from "../components/About/Team.jsx";
import ReviewUser from "../components/About/ReviewUser.jsx";
import WhatWedo from "../components/About/WhatWedo.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import Modal from "../components/Modal.jsx";
import {useState} from "react";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (

        <>
            <div className="bg-bluelight">
                <div className="mx-auto max-w-screen-lg px-4 font-poppins pt-[20px] ">
                    {/*  About Start*/}
                    <AboutUs/>
                    {/*    About End*/}
                    {/*Our service*/}
                    <WhatWedo/>
                    {/*Our Service End*/}
                    {/*Our Team*/}
                    <Team/>
                    {/*Our Team End*/}
                    {/*    ulasan Pengguna*/}
                    <ReviewUser/>
                    {/*    Ulasan End*/}
                    {/*    Comment*/}
                    <div>
                        <div className="flex justify-center -mt-10">
                            <button className="px-10 py-2 rounded-3xl border" onClick={handleOpenModal}>
                                Tulis Komentar
                            </button>
                        </div>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
                    </div>
                    {/*    End Comment*/}
                </div>
            </div>
        </>
    );
}

export default About;
