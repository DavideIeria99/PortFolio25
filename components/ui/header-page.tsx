"use client";
import React from "react";
import * as motion from "framer-motion/client";
export default function HeaderPage({ text }: { text: String }) {
    return (
        <header className="mt-2 flex h-30 items-center justify-center md:h-100">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2,
                }}
                className="h1-header w-2/3 rounded-lg py-10 text-center text-orange-600 md:w-4/5 md:p-20"
            >
                {text}
            </motion.h1>
        </header>
    );
}
