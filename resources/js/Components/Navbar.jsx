import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const NavLinks = [
        {
            name: "Home",
            href: "/#home",
            section: "home",
        },
        {
            name: "Works",
            href: "/#works",
            section: "works",
        },
        {
            name: "About me",
            href: "/#about-me",
            section: "about-me",
        },
        {
            name: "Contacts",
            href: "/#contacts",
            section: "contacts",
        },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // Observe all sections
        NavLinks.forEach((link) => {
            const element = document.getElementById(link.section);
            if (element) observer.observe(element);
        });

        return () => {
            NavLinks.forEach((link) => {
                const element = document.getElementById(link.section);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.getElementById(href.split("#")[1]);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 px-4 md:px-0 w-full pt-8 pb-2 z-50 bg-[#282C33]/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <a
                    href="/"
                    className="flex items-center gap-2 text-base font-bold text-white"
                >
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        className="w-6 h-6 object-contain"
                    />
                    Mphatso
                </a>
                <div className="md:hidden">
                    <MobileMenu />
                </div>
                <div className="space-x-6 hidden md:flex">
                    {NavLinks.map((link) => (
                        <a
                            href={link.href}
                            className={`text-base hover:text-purple-400 transition-colors duration-200 ${
                                activeSection === link.section
                                    ? "text-white"
                                    : "text-gray-400"
                            }`}
                            key={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            <span className="text-purple-400">#</span>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
