import Box from "./Box";

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    live_link,
    github_link,
}) {
    return (
        <Box className="overflow-hidden">
            <img
                src={`/storage/${image}`}
                alt={title}
                className="w-full h-[201px] object-cover"
            />
            <div className="">
                <Box className="border-r-0 border-l-0 flex  gap-2 mb-4 p-2 line-clamp-1">
                    {technologies}
                </Box>
                <h3 className="text-2xl font-medium mb-2 text-white line-clamp-1 px-4">
                    {title}
                </h3>
                <p className="text-grey mb-4 px-4 line-clamp-3">
                    {description}
                </p>
                <div className="flex gap-4 p-4">
                    {live_link && (
                        <a
                            href={live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-primary text-white hover:bg-primary transition-colors"
                        >
                            Live {">"}
                        </a>
                    )}
                    {github_link && (
                        <a
                            href={github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-primary text-white hover:bg-primary transition-colors"
                        >
                            Github {">"}
                        </a>
                    )}
                </div>
            </div>
        </Box>
    );
}
