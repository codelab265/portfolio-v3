import Box from "./Box";
import ContainerWrapper from "./ContainerWrapper";

export default function Hero() {
    return (
        <ContainerWrapper
            id="home"
            className="min-h-screen pt-[123px] px-4 md:px-0"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0">
                <div className="pt-10 md:pt-[74px]">
                    <h1 className="text-[32px] font-medium text-white">
                        Am Mphatso, a <span className="text-primary">Web</span>{" "}
                        and <span className="text-primary">Mobile</span> App
                        Developer
                    </h1>
                    <p className="text-grey mt-8">
                        I design and develop web and mobile applications for
                        businesses and individuals.
                    </p>
                    <button className="hidden md:block mt-6 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        Contact me!!
                    </button>
                </div>
                <div className="relative flex flex-col items-center">
                    <div className="w-full relative h-[386px] overflow-hidden border-b border-primary bg-[url('/images/hero2.png')] bg-cover bg-top z-10" />
                    <Box
                        className={"border-t-0 p-2 flex items-center gap-2 z-0"}
                    >
                        <div className="size-4 bg-primary" />
                        <div className="text-base text-gray-100">
                            Open for new opportunities
                        </div>
                    </Box>
                    <img
                        src="/images/logo.png"
                        className="absolute left-0 top-20 size-[155px]"
                    />
                </div>
            </div>
        </ContainerWrapper>
    );
}
