import ContainerWrapper from "./ContainerWrapper";

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
                                I'm a self-taught full-stack developer based in
                                Malawi. I can develop responsive websites from
                                scratch and raise them into modern user-friendly
                                web experiences.
                            </p>
                            <p className="text-grey text-sm md:text-base">
                                Transforming my creativity and knowledge into
                                websites has been my passion for over 3 years. I
                                have been helping various clients to establish
                                their presence online. I always strive to learn
                                about the newest technologies and frameworks.
                            </p>
                            <button className="mt-4 px-4 py-2 border border-primary text-white hover:bg-primary transition-all duration-300 hover:scale-105">
                                Read more →
                            </button>
                        </div>
                    </div>
                    <div className="relative col-span-12 md:col-span-5 mt-8 md:mt-0">
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
                        <div className="relative h-[300px] md:h-[386px] overflow-hidden">
                            <img
                                src="/images/hero2.png"
                                alt="About Mphatso"
                                className="w-full h-full object-contain border-b border-primary transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
            <img
                src="/images/dots.png"
                className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-20 opacity-50"
                alt="Decorative dots"
            />
            <div className="hidden md:block absolute top-1/2 -left-1 -translate-y-1/2 h-1/4 w-10 border border-primary" />
        </div>
    );
}
