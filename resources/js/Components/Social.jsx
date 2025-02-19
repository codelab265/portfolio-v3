import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faWhatsapp,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { BlurFade } from "./magicui/blur-fade";

function Social() {
    const socialLinks = [
        {
            icon: faGithub,
            href: "https://github.com/codelab265",
        },
        {
            icon: faFacebook,
            href: "https://web.facebook.com/mphatso.mlenga.908",
        },
        {
            icon: faWhatsapp,
            href: "https://wa.me/265992374819",
        },
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/mphatso-mlenga-9b969b235/",
        },
    ];
    return (
        <div className="hidden md:flex flex-col items-center gap-4 absolute top-0 left-[17px] z-50">
            <div className="h-[191px] w-[1px] bg-grey" />
            {socialLinks.map((link, index) => (
                <BlurFade key={link.href} delay={0.1 * index}>
                    <a href={link.href}>
                        <FontAwesomeIcon icon={link.icon} size="xl" />
                    </a>
                </BlurFade>
            ))}
        </div>
    );
}

export default Social;
