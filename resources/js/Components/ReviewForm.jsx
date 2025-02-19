import { useState } from "react";
import Box from "./Box";
import { motion } from "framer-motion";
import InputError from "./InputError";
import { useForm, usePage } from "@inertiajs/react";
import { BlurFade } from "./magicui/blur-fade";

export default function ReviewForm() {
    const { flash } = usePage().props;
    const [rating, setRating] = useState(5);
    const [hoveredStar, setHoveredStar] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        company: "",
        rating: 5,
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.create"), {
            onSuccess: () => {
                reset();
            },
            preserveScroll: true,
        });
    };
    return (
        <Box className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium mb-6 text-white border-b border-primary p-4">
                Leave a Review
            </h3>
            <form className="p-6 space-y-6">
                {/* Name and Company Fields */}
                <div className="">
                    <div>
                        <label
                            htmlFor="company"
                            className="block text-grey mb-2"
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="w-full bg-dark border border-grey rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors"
                            value={data.company}
                            onChange={(e) => setData("company", e.target.value)}
                            required
                        />
                        <InputError message={errors.company} />
                    </div>
                </div>

                {/* Rating Field */}
                <div>
                    <label className="block text-grey mb-2">Rating</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`text-2xl transition-colors ${
                                    (hoveredStar || rating) >= star
                                        ? "text-primary"
                                        : "text-grey"
                                }`}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(null)}
                                onClick={() => {
                                    setData("rating", star);
                                    setRating(star);
                                }}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                {/* Review Field */}
                <div>
                    <label htmlFor="review" className="block text-grey mb-2">
                        Your Review
                    </label>
                    <textarea
                        id="review"
                        rows="4"
                        className="w-full bg-dark border border-grey rounded px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors"
                        required
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} />
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-dark border border-primary text-white hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={processing}
                    onClick={handleSubmit}
                >
                    {processing ? "Submitting..." : "Submit Review"}
                </motion.button>
                {flash.success && (
                    <div className="px-4 md:px-0 w-full mb-8">
                        <BlurFade>
                            <div className="bg-green-500/10 border border-green-500 text-green-300 p-4 rounded-md">
                                {flash.success}
                            </div>
                        </BlurFade>
                    </div>
                )}
            </form>
        </Box>
    );
}
