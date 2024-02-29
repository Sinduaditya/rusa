import Ai from "../../assets/home/ai.svg";

function IntroAi() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Ai}
                         className="max-w-sm rounded-lg shadow-2xl"/>
                    <div className="mx-auto flex max-w-3xl flex-col gap-8">
                        <h2 className="text-4xl font-bold leading-tight tracking-wide text-black  xl:text-5xl">
                            Dolan<span className="text-primary relative">Rek.<small
                            className="absolute text-xl -top-1">Assistant</small> </span>
                        </h2>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            Mari jelajahi Jawa Timur dengan lebih dalam. Tanyakan apapun tentang destinasi,
                            budaya, atau hal lain yang ingin Anda ketahui,
                            dan biarkan AI kami memberikan jawaban yang informatif dan bermanfaat
                        </p>

                        <div className="space-x-8">
                            <a
                                href="#"
                                className="rounded-md bg-midnight px-10 py-3 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-400"
                            >
                                Mulai Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntroAi;