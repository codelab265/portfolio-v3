import Box from "./Box";

export default function SkillGroup({ title, skills }) {
    return (
        <Box className="relative">
            <div className="text-base font-medium mb-2 text-white border-b p-2">
                {title}
            </div>
            <div className="flex flex-wrap gap-2 p-2">
                {skills.map((skill, index) => (
                    <span key={index} className="text-gray-300">
                        {skill}
                    </span>
                ))}
            </div>
            <div className="size-2 bg-white -top-1 -left-1 absolute"></div>
            <div className="size-2 bg-white -bottom-1 -right-1 absolute"></div>
        </Box>
    );
}
