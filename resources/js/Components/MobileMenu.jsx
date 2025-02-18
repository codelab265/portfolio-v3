import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faWhatsapp,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function MobileMenu() {
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

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

    const socialLinks = [
        {
            icon: faGithub,
            href: "https://github.com/codelab265",
            label: "GitHub",
        },
        {
            icon: faFacebook,
            href: "https://www.facebook.com/mphatso.mlenga",
            label: "Facebook",
        },
        {
            icon: faWhatsapp,
            href: "https://wa.me/265992374819",
            label: "WhatsApp",
        },
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/mphatso-mlenga-0101010101/",
            label: "LinkedIn",
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
            setIsOpen(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent focus-visible:ring-0"
                    aria-label="Open menu"
                >
                    <motion.img
                        src="/images/menu.svg"
                        alt="menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-background/95 backdrop-blur-sm border-l border-primary">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 text-white">
                        <motion.img
                            src="/images/logo.svg"
                            alt="logo"
                            className="w-6 h-6 object-contain"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <span className="text-primary">Mphatso</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col justify-between h-[calc(100vh-100px)] mt-10">
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {NavLinks.map((link, index) => (
                            <motion.a
                                href={link.href}
                                className={`text-lg hover:text-primary transition-colors duration-200 ${
                                    activeSection === link.section
                                        ? "text-white"
                                        : "text-grey"
                                }`}
                                key={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ x: 10 }}
                            >
                                <span className="text-primary">#</span>
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex gap-6 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                href={link.href}
                                key={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-grey hover:text-primary transition-colors duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                <FontAwesomeIcon icon={link.icon} size="lg" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;
