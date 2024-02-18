import Hero from "../assets/hero.jpg";
import Loc from "../assets/location.png";
import Nature from "../assets/naturev2.svg";
import Landmark from "../assets/landmark.svg";
import Culinary from "../assets/culinary.svg";

const Home = () => {
    return (
        <>
            <div
                className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 overflow-hidden relative font-poppin">
                {/*header*/}
                <div className="pt-20  pb-4">
                    <img src={Hero} alt="Kawah Ijen" className="w-[1220px] h-[344px] object-cover rounded-2xl"
                         style={{backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,1) 0%, rgba(48,72,98,0.006999999999999999) 100%)'}}/>
                    <div className="absolute bottom-[160px] left-16 text-white flex items-center">
                        <img src={Loc} className="w-4 mr-2" alt=""/>
                        <div>
                            <p className="font-medium">Gunung Kawah Ijen, Jawa Timur</p>
                        </div>
                    </div>

                    <h1 className="absolute bottom-[110px]  left-16 text-white text-5xl font-bold">Kawah
                        Ijen</h1>
                </div>
                {/*End header*/}

                <div className="hidden md:block bg-white rounded-lg mx-4 sm:mx-10 lg:mx-28 p-4 relative -mt-14 justify-center shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <h3 className="font-bold text-xl pl-7">Feel the <br/> Local Experience</h3>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Nature} className="w-12" alt=""/>
                            <div className="pt-3 pl-2">
                                <h1 className="font-semibold">Nature</h1>
                                <p className="text-sm font-cabin">Destinasi Wisata</p>
                            </div>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Landmark} className="w-12" alt=""/>
                            <div className="pt-3 pl-2">
                                <h1 className="font-semibold">Landmark</h1>
                                <p className="text-sm font-cabin">Destinasi Kota</p>
                            </div>
                        </div>
                        <div className="flex col-span-1 sm:col-span-2 md:col-span-1">
                            <img src={Culinary} className="w-12" alt=""/>
                            <div className="pt-3 pl-2">
                                <h1 className="font-semibold">Culinary</h1>
                                <p className="text-sm font-cabin">Destinasi Kuliner</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
export default Home;