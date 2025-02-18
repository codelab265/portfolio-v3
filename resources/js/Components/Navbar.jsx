import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

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

        // Handle scroll for navbar background
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            NavLinks.forEach((link) => {
                const element = document.getElementById(link.section);
                if (element) observer.unobserve(element);
            });
            window.removeEventListener("scroll", handleScroll);
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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full pt-8 pb-4 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/95 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="/"
                    className="flex items-center gap-2 text-base font-medium text-white group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        className="w-6 h-6 object-contain transition-transform group-hover:rotate-90 duration-300"
                    />
                    <span className="group-hover:text-primary transition-colors">
                        Mphatso
                    </span>
                </motion.a>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <MobileMenu />
                </div>

                {/* Desktop Navigation */}
                <div className="space-x-6 hidden md:flex items-center">
                    {NavLinks.map((link) => (
                        <motion.a
                            href={link.href}
                            className={`text-base hover:text-primary transition-colors duration-200 relative ${
                                activeSection === link.section
                                    ? "text-white"
                                    : "text-grey"
                            }`}
                            key={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-primary">#</span>
                            {link.name}
                            {activeSection === link.section && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                    layoutId="underline"
                                />
                            )}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
