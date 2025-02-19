import { Head, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import ContainerWrapper from "@/Components/ContainerWrapper";
import Box from "@/Components/Box";
import { motion } from "framer-motion";
import { BlurFade } from "@/Components/magicui/blur-fade";
import ReviewForm from "@/Components/ReviewForm";
import ReviewCard from "@/Components/ReviewCard";

export default function Reviews() {
    const { reviews, auth, flash } = usePage().props;
    const user = auth.user;

    // Calculate average rating if there are reviews
    const averageRating = reviews.length
        ? (
              reviews.reduce((acc, review) => acc + review.rating, 0) /
              reviews.length
          ).toFixed(1)
        : "0.0";

    return (
        <MainLayout>
            <Head title="Reviews" />

            {/* About Section */}
            <ContainerWrapper className="pt-[123px] pb-20">
                <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
                    <div className="col-span-12 md:col-span-8">
                        <div className="flex items-center gap-2 mb-8">
                            <h2 className="text-2xl md:text-[32px] font-medium text-white">
                                <span className="text-primary">#</span>reviews
                            </h2>
                            <div className="w-32 h-[1px] bg-primary" />
                        </div>
                        <div className="space-y-4">
                            {reviews.length > 0 ? (
                                <>
                                    <p className="text-grey text-base md:text-lg">
                                        Hey {user?.name || "there"}! Thanks for
                                        checking out what others have to say
                                        about working with me. These reviews
                                        help me improve and show potential
                                        clients what to expect.
                                    </p>
                                    <p className="text-grey text-sm md:text-base">
                                        {user
                                            ? "If we've worked together before, I'd love to hear your thoughts too! Feel free to share your experience below."
                                            : "If we've worked together before, please sign in to leave a review. Your feedback means a lot to me!"}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-grey text-base md:text-lg">
                                        Hey {user?.name || "there"}! Looks like
                                        you're the first one here. I'm excited
                                        to collect feedback from clients about
                                        our work together.
                                    </p>
                                    <p className="text-grey text-sm md:text-base">
                                        {user
                                            ? "If we've worked together, why not be the first to share your experience? Your review will help others understand what it's like to work with me."
                                            : "If we've worked together before, please sign in to be the first to leave a review. Your feedback would mean a lot to me!"}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 relative">
                        <Box className="h-full flex items-center justify-center p-8">
                            <div className="text-center space-y-2">
                                <div className="text-4xl font-bold text-primary">
                                    {averageRating}
                                </div>
                                <div className="text-grey">
                                    {reviews.length === 0
                                        ? "No Reviews Yet"
                                        : `Average Rating (${
                                              reviews.length
                                          } review${
                                              reviews.length === 1 ? "" : "s"
                                          })`}
                                </div>
                                <div className="flex justify-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className={
                                                i < Math.round(averageRating)
                                                    ? "text-primary"
                                                    : "text-grey"
                                            }
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </ContainerWrapper>

            {/* Review Form Section */}
            {user && (
                <ContainerWrapper className="py-20 bg-dark/50">
                    {flash.success && (
                        <div className="px-4 md:px-0 w-full md:w-1/2 mx-auto mb-8">
                            <BlurFade>
                                <div className="bg-green-500/10 border border-green-500 text-green-300 p-4 rounded-md">
                                    {flash.success}
                                </div>
                            </BlurFade>
                        </div>
                    )}
                    <div className="px-4 md:px-0">
                        <BlurFade>
                            <ReviewForm />
                        </BlurFade>
                    </div>
                </ContainerWrapper>
            )}

            {/* Reviews List Section */}
            <ContainerWrapper className="py-20">
                <div className="px-4 md:px-0">
                    {reviews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, index) => (
                                <BlurFade key={index} delay={index * 0.2}>
                                    <ReviewCard {...review} />
                                </BlurFade>
                            ))}
                        </div>
                    ) : (
                        <BlurFade>
                            <Box className="text-center py-20">
                                <h3 className="text-2xl font-medium text-white mb-4">
                                    Be the First Reviewer!
                                </h3>
                                <p className="text-grey max-w-2xl mx-auto">
                                    {user
                                        ? "Share your experience and help others understand what it's like to work with me. Your review will appear here and help future clients make their decision."
                                        : "Sign in to share your experience and be the first to leave a review. Your feedback will help others understand what it's like to work with me."}
                                </p>
                            </Box>
                        </BlurFade>
                    )}
                </div>
            </ContainerWrapper>
        </MainLayout>
    );
}
