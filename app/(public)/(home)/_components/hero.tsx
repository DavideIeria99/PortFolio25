"use client";
import * as motion from "framer-motion/client";

export const NewHero = () => {
    return (
        <>
            <header className="mt-2 flex h-50 flex-col justify-center gap-y-2 px-5 *:w-full md:h-120 md:flex-row md:items-center md:gap-y-0 md:px-20 md:*:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                    }}
                    className="h1-header text-orange-600"
                >
                    davide ieria
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                    }}
                    className="h1-header text-end text-orange-600"
                >
                    web dev
                </motion.h1>
            </header>
        </>
    );
};
