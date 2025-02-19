import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import Box from "@/Components/Box";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-background">
            <Head title="Sign In" />

            <div className="w-full sm:max-w-md px-6 py-4">
                <motion.div
                    className="flex flex-col items-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-2xl font-medium text-white">
                            Mphatso
                        </span>
                    </div>
                    <h2 className="text-xl text-grey text-center">
                        Sign in to share your experience
                    </h2>
                </motion.div>

                <Box className="p-6">
                    <div className="space-y-6">
                        <p className="text-grey text-center">
                            Your review helps others understand what it's like
                            to work with me. Sign in with Google to share your
                            experience.
                        </p>

                        <motion.a
                            href={route("auth.google")}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-dark hover:bg-gray-100 transition-colors rounded-md font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <img
                                src="/images/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </motion.a>

                        {/* <p className="text-sm text-grey text-center">
                            By signing in, you agree to share your Google
                            profile information (name and profile picture) which
                            will be displayed alongside your review.
                        </p> */}
                    </div>
                </Box>
            </div>
        </div>
    );
}
