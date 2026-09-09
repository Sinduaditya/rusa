import { Link, useLocation } from "react-router-dom";
import BGImage from "../assets/footer/footerIllustration.png";
import Logo from "../assets/header/dolanrek.svg";

const footerLinks = {
    explore: [
        { to: "/explore", label: "Pilihan Terbaik" },
        { to: "/explore", label: "Wisata Alam" },
        { to: "/explore", label: "Kuliner" },
        { to: "/explore", label: "Religi" },
        { to: "/explore", label: "Argowisata" },
        { to: "/explore", label: "Landmark" },
    ],
    stories: [
        { to: "/stories", label: "Activity" },
        { to: "/stories", label: "Knowledge" },
        { to: "/stories", label: "Tips & Trick" },
        { to: "/stories", label: "Kuliner dan Masakan" },
        { to: "/stories", label: "Budaya dan Sejarah" },
        { to: "/stories", label: "Petualangan" },
    ],
    about: [
        { to: "/about", label: "Apa itu DolanRek?" },
        { to: "/about", label: "Tim Developer" },
    ],
};

function FooterIllustration() {
    return (
        <div className="bg-surface overflow-hidden">
            <div data-aos="fade-up">
                <img
                    src={BGImage}
                    className="w-full max-w-4xl mx-auto object-contain"
                    alt="DolanRek Illustration"
                />
            </div>
        </div>
    );
}

function FooterContent() {
    return (
        <footer className="bg-midnight text-white">
            <div className="container-app py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-2 focus-ring">
                            <img src={Logo} className="h-9 w-9" alt="DolanRek Logo" />
                            <span className="font-display font-bold text-xl">
                                Dolan<span className="text-primary">Rek.</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-secondary text-sm leading-relaxed max-w-xs">
                            Petualangan Tanpa Hambatan, Pesona Jatim dalam
                            Genggaman.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
                            Explore
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.explore.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-secondary text-sm hover:text-white transition-colors focus-ring"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stories */}
                    <div>
                        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
                            Stories
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.stories.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-secondary text-sm hover:text-white transition-colors focus-ring"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">
                            Tentang DolanRek
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.about.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-secondary text-sm hover:text-white transition-colors focus-ring"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-secondary text-sm">
                        Copyright 2024 &copy; Div48 Dev
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-secondary text-sm">
                            Made with care in Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Footer() {
    const location = useLocation();
    const showIllustration =
        location.pathname === "/" || location.pathname === "/about";

    return (
        <>
            {showIllustration && <FooterIllustration />}
            <FooterContent />
        </>
    );
}

export default Footer;
