import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Box from "./Box";
import ContainerWrapper from "./ContainerWrapper";
import { usePage } from "@inertiajs/react";
const ReviewCard = ({ user, company, rating, message }) => {
    return (
        <Box
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {user.profile_picture ? (
                    <img
                        className="rounded-full"
                        width="32"
                        height="32"
                        alt=""
                        src={user.profile_picture}
                    />
                ) : (
                    <img
                        className="rounded-full"
                        width="32"
                        height="32"
                        alt=""
                        src="/images/google.svg"
                    />
                )}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {user.name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {company}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm line-clamp-3">
                {message}
            </blockquote>
        </Box>
    );
};

export function Testimonial() {
    const { reviews } = usePage().props;

    return (
        <ContainerWrapper>
            <div className="flex items-center gap-4 mb-12 px-4 md:px-0">
                <h2 className="text-2xl font-bold">
                    <span className="text-primary">#</span>Testimonials
                </h2>
                <div className="w-20 h-[1px] bg-primary" />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </ContainerWrapper>
    );
}
