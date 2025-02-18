import ContainerWrapper from "./ContainerWrapper";

export default function About() {
    return (
        <div id="about-me" className="py-20 relative">
            <ContainerWrapper>
                <div className="grid grid-cols-12 gap-10 px-4 md:px-0">
                    <div className="flex flex-col col-span-12 md:col-span-7">
                        <div className="flex items-center mb-12 gap-2">
                            <h2 className="text-[32px] font-medium  text-nowrap">
                                <span className="text-purple-400">#</span>
                                about-me
                            </h2>
                            <div className="w-1/3 h-[1px] bg-primary" />
                        </div>
                        <div className="w-full">
                            <div className="space-y-4">
                                <p className="text-[#ABB2BF]">
                                    Hello, I'm Mphatso!
                                </p>
                                <p className="text-[#ABB2BF]">
                                    I'm a self-taught full-stack developer based
                                    in Malawi. I can develop responsive websites
                                    from scratch and raise them into modern
                                    user-friendly web experiences.
                                </p>
                                <p className="text-[#ABB2BF]">
                                    Transforming my creativity and knowledge
                                    into websites has been my passion for over 3
                                    years. I have been helping various clients
                                    to establish their presence online. I always
                                    strive to learn about the newest
                                    technologies and frameworks.
                                </p>
                                <button className="px-4 py-2 border border-purple-400 text-white hover:bg-purple-400 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-12 md:col-span-5">
                        <img
                            src="/images/dots.png"
                            className="absolute top-10 left-10"
                        />
                        <img
                            src="/images/dots.png"
                            className="absolute bottom-10 right-10"
                        />
                        <div className="relative h-[386px] overflow-hidden">
                            <img
                                src="/images/hero2.png"
                                alt="About"
                                className="w-full h-full object-contain border-b"
                            />
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
            <img
                src="/images/dots.png"
                className="absolute top-1/2 right-0 -translate-y-1/2"
            />
            <div className="hidden md:block absolute top-1/2 -left-1 -translate-y-1/2 h-1/4 w-10 border" />
        </div>
    );
}
