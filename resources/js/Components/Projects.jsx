import ProjectCard from "./ProjectCard";
import ContainerWrapper from "./ContainerWrapper";
import { BlurFade } from "./magicui/blur-fade";
import { Link, usePage } from "@inertiajs/react";

export default function Projects() {
    const { projects } = usePage().props;
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
                        <Link
                            href={route("projects")}
                            className="text-white hover:text-purple-400 transition-colors hover:underline underline-offset-8"
                        >
                            View all →
                        </Link>
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
