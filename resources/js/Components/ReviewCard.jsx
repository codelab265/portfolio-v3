import Box from "./Box";

export default function ReviewCard({
    user,
    company,
    position,
    message,
    rating,
}) {
    return (
        <Box className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-primary">
                <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full overflow-hidden">
                        {user.profile_picture ? (
                            <img
                                src={user.profile_picture}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src="/images/google.svg"
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div>
                        <h4 className="text-white font-medium">{user.name}</h4>
                        <p className="text-grey text-sm">
                            {position} at {company}
                        </p>
                    </div>
                </div>
            </div>

            {/* Review Content */}
            <div className="p-4 flex-grow">
                <p className="text-grey text-sm leading-relaxed line-clamp-4">
                    {message}
                </p>
            </div>

            {/* Rating */}
            <div className="p-4 border-t border-grey">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        {Array.from({ length: rating }).map((_, i) => (
                            <span key={i} className="text-primary">
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-grey text-sm">{rating}.0 / 5.0</span>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-1 -left-1 size-2 bg-primary" />
            <div className="absolute -bottom-1 -right-1 size-2 bg-primary" />
        </Box>
    );
}
