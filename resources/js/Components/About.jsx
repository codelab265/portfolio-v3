import ContainerWrapper from "./ContainerWrapper";
import { motion } from "framer-motion";
import Box from "./Box";

export default function About() {
    return (
        <div id="about-me" className="py-12 md:py-20 relative">
            <ContainerWrapper>
                <div className="grid grid-cols-12 gap-4 md:gap-10 px-4 md:px-0">
                    <div className="col-span-12 md:col-span-7">
                        <div className="flex items-center gap-2 mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-[32px] font-medium text-nowrap">
                                <span className="text-primary">#</span>
                                about-me
                            </h2>
                            <div className="w-full max-w-[200px] h-[1px] bg-primary" />
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-grey text-base md:text-lg">
                                Hello, I'm Mphatso!
                            </p>
                            <p className="text-grey text-sm md:text-base">
                                I'm a full-stack developer from Malawi who
                                builds web and mobile applications. I work on
                                both the front-end (what users see) and back-end
                                (how it works). I turn ideas into easy-to-use
                                applications that help businesses grow.
                            </p>
                            <p className="text-grey text-sm md:text-base">
                                I've been coding for over 10 years and have
                                built many different types of projects - from
                                online stores to business management systems. I
                                use modern tools like React for websites, React
                                Native for mobile apps, and Laravel and Node.js
                                for the backend. I keep learning new things to
                                give my clients the best solutions.
                            </p>
                            <p className="text-grey text-sm md:text-base">
                                I care about writing good code that's easy to
                                maintain and update. I make sure everything is
                                well-organized and properly documented, so
                                projects run smoothly now and in the future. I
                                enjoy solving complex problems and making things
                                work better.
                            </p>
                            <motion.a
                                href="#contacts"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block mt-4 px-4 py-2 border border-primary text-white hover:bg-primary transition-all duration-300"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center col-span-12 md:col-span-5 mt-8 md:mt-0">
                        <img
                            src="/images/hero2.png"
                            alt="About Mphatso"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute -top-1 -left-1 size-2 bg-primary" />
                        <div className="absolute -bottom-1 -right-1 size-2 bg-primary" />

                        {/* Decorative elements */}
                        <img
                            src="/images/dots.png"
                            className="absolute top-10 left-10 w-16 md:w-20 opacity-50 z-0"
                            alt="Decorative dots"
                        />
                        <img
                            src="/images/dots.png"
                            className="absolute bottom-10 right-10 w-16 md:w-20 opacity-50 z-0"
                            alt="Decorative dots"
                        />
                    </div>
                </div>
            </ContainerWrapper>

            {/* Background decorative elements */}
            <img
                src="/images/dots.png"
                className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-20 opacity-50"
                alt="Decorative dots"
            />
            <div className="hidden md:block absolute top-1/2 -left-1 -translate-y-1/2 h-1/4 w-10 border border-primary" />
        </div>
    );
}
