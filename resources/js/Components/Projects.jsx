import ProjectCard from "./ProjectCard";
import ContainerWrapper from "./ContainerWrapper";
import { BlurFade } from "./magicui/blur-fade";
import { QuoteIcon } from "lucide-react";

const projects = [
    {
        title: "ChertNodes",
        description: "Minecraft servers hosting",
        image: "/images/projects/protectx.webp",
        technologies: ["HTML", "SCSS", "Python", "Flask"],
        liveLink: "#",
        cacheLink: "#",
    },
    {
        title: "ProtectX",
        description: "Discord anti-crash bot",
        image: "/images/projects/protectx.webp",
        technologies: ["React", "Express", "Discord.js", "Node.js"],
        liveLink: "#",
    },
    {
        title: "Kahoot Answers Viewer",
        description: "Get answers to your kahoot quiz",
        image: "/images/projects/protectx.webp",
        technologies: ["CSS", "Express", "Node.js"],
        liveLink: "#",
    },
];

export default function Projects() {
    return (
        <section id="works" className="py-20 w-full relative">
            <ContainerWrapper>
                <div className="grid grid-cols-12 gap-4 mb-12 px-4 md:px-0">
                    <div className="col-span-8 flex items-center gap-2">
                        <h2 className="text-[32px] font-medium">
                            <span className="text-purple-400">#</span>projects
                        </h2>
                        <div className="w-full h-[1px] bg-primary" />
                    </div>
                    <div className="col-span-4 flex items-center justify-end">
                        <a
                            href="#"
                            className="text-white hover:text-purple-400 transition-colors hover:underline underline-offset-8"
                        >
                            View all →
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
                    {projects.map((project, index) => (
                        <BlurFade key={index} delay={index * 0.25} inView>
                            <ProjectCard {...project} />
                        </BlurFade>
                    ))}
                </div>
            </ContainerWrapper>
            <div className="hidden md:block absolute top-1/2 -left-1 -translate-y-1/2 w-10 h-1/4 border" />
        </section>
    );
}
