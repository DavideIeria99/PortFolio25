"use client";
import * as motion from "framer-motion/client";

interface box {
    details:
        | {
              text?: string;
          }
        | undefined;
    style:
        | "normal"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "blockquote"
        | undefined;
}
export const DetailsBox = (el: box) => {
    return (
        <>
            {el.details &&
                (el.style === "h2" ? (
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0.5 }}
                    >
                        {el.details?.text}
                    </motion.h2>
                ) : (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0.5 }}
                        className="text-justify"
                    >
                        {el.details?.text ?? ""}
                    </motion.p>
                ))}
        </>
    );
};
