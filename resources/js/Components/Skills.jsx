import SkillGroup from "./SkillGroup";
import ContainerWrapper from "./ContainerWrapper";
import { BlurFade } from "./magicui/blur-fade";
import Box from "./Box";

const skillGroups = [
    {
        title: "Languages",
        skills: ["PHP,", "TypeScript,", "JavaScript,", "HTML,", "CSS"],
    },
    {
        title: "Databases",
        skills: ["MySQL,", "SQLite,", "MongoDB,", "PostgreSQL"],
    },
    {
        title: "Frameworks",
        skills: ["React,", "Laravel,", "React Native,", "Node.js,", "Next.js"],
    },
    {
        title: "Other",
        skills: [
            "WordPress,",
            "Filament,",
            "Tailwind,",
            "Bootstrap,",
            "flutterflow",
        ],
    },
];

export default function Skills() {
    return (
        <ContainerWrapper id="skills" className="py-20">
            <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
                <div className="col-span-12 md:col-span-5 flex flex-col relative">
                    <div className="flex items-center mb-12 gap-1">
                        <h2 className="text-[32px] font-medium">
                            <span className="text-purple-400">#</span>skills
                        </h2>
                        <div className="w-full h-[1px] bg-primary" />
                    </div>
                    <Box className="size-[86px]"></Box>
                    <div className="absolute right-[50px] bottom-[37px]">
                        <Box className="size-[52px]"></Box>
                    </div>
                    <img
                        src="/images/dots.png"
                        alt="dots"
                        className="absolute top-20 right-10 z-0"
                    />
                    <img
                        src="/images/dots.png"
                        alt="dots"
                        className="absolute bottom-10 left-4 size-[80px]"
                    />
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
                <div className="col-span-12 md:col-span-7 pt-[86px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {skillGroups.map((group, index) => (
                            <BlurFade key={index} delay={index * 0.5} inView>
                                <SkillGroup {...group} />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    );
}
