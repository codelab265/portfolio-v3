import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import ContainerWrapper from "@/Components/ContainerWrapper";
import ProjectCard from "@/Components/ProjectCard";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "@inertiajs/react";
import { BlurFade } from "@/Components/magicui/blur-fade";

function Projects() {
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
    return (
        <MainLayout>
            <ContainerWrapper className="py-20 px-4 md:px-0">
                <div className="flex w-full items-center justify-between mb-10 mt-10">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Projects
                        </h1>
                        <Link
                            href={route("home")}
                            className="text-white hover:text-purple-400 transition-colors hover:underline underline-offset-8 flex items-center gap-2"
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                            Back to home
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <BlurFade
                            key={project.title}
                            delay={index * 0.25}
                            inView
                        >
                            <ProjectCard {...project} />
                        </BlurFade>
                    ))}
                </div>
            </ContainerWrapper>
        </MainLayout>
    );
}

export default Projects;
