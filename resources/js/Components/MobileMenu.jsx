import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Link } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faWhatsapp,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function MobileMenu() {
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

    const socialLinks = [
        {
            icon: faGithub,
            href: "https://github.com/codelab265",
        },
        {
            icon: faFacebook,
            href: "https://www.facebook.com/mphatso.mlenga",
        },
        {
            icon: faWhatsapp,
            href: "https://wa.me/265992374819",
        },
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/mphatso-mlenga-0101010101/",
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
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <img src="/images/menu.svg" alt="menu" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="w-6 h-6 object-contain"
                        />
                        Mphatso
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-10 justify-between">
                    <div className="flex flex-col gap-4">
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
                    <div className="flex gap-4 mt-10">
                        {socialLinks.map((link) => (
                            <a href={link.href} key={link.href}>
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;
