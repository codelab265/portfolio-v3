import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContainerWrapper from "./ContainerWrapper";
import { motion } from "framer-motion";
import Box from "./Box";

const contactInfo = [
    {
        icon: faWhatsapp,
        text: "+265 992 374 819",
        href: "https://wa.me/265992374819",
        label: "WhatsApp",
    },
    {
        icon: faEnvelope,
        text: "mphatsomlenga1@gmail.com",
        href: "mailto:mphatsomlenga1@gmail.com",
        label: "Email",
    },
];

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <ContainerWrapper id="contacts" className="py-20 relative">
            <div className="px-4 md:px-0">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-[32px] font-medium text-white whitespace-nowrap">
                        <span className="text-primary">#</span>contacts
                    </h2>
                    <div className="w-32 h-[1px] bg-primary" />
                </motion.div>

                {/* Content Grid */}
                <motion.div
                    className="grid grid-cols-12 gap-4 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Description */}
                    <motion.div
                        className="col-span-12 md:col-span-6"
                        variants={itemVariants}
                    >
                        <p className="text-grey text-base md:text-lg leading-relaxed">
                            I'm interested in freelance opportunities. However,
                            if you have other request or question, don't
                            hesitate to contact me
                        </p>
                    </motion.div>

                    {/* Spacer */}
                    <div className="hidden md:block col-span-2" />

                    {/* Contact Box */}
                    <motion.div
                        className="col-span-12 md:col-span-4"
                        variants={itemVariants}
                    >
                        <Box className="relative">
                            <h3 className="text-lg font-medium mb-6 text-white border-b border-primary p-2">
                                Message me here
                            </h3>
                            <div className="space-y-4 p-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.href}
                                        href={info.href}
                                        className="flex items-center gap-3 text-grey hover:text-primary transition-colors group"
                                        whileHover={{ x: 5 }}
                                        aria-label={info.label}
                                    >
                                        <FontAwesomeIcon
                                            icon={info.icon}
                                            className="text-grey group-hover:text-primary transition-colors"
                                            size="lg"
                                        />
                                        <span className="text-sm md:text-base">
                                            {info.text}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                            <div className="absolute -top-1 -left-1 size-2 bg-primary" />
                            <div className="absolute -bottom-1 -right-1 size-2 bg-primary" />
                        </Box>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden md:block absolute top-1/2 -right-1 -translate-y-1/2 h-1/4 w-10 border border-primary" />
            <img
                src="/images/dots.png"
                className="hidden md:block absolute bottom-20 left-0 w-20 opacity-50"
                alt="Decorative dots"
            />
        </ContainerWrapper>
    );
}
