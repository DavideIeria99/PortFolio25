import Image from "next/image";
import * as motion from "framer-motion/client";
import clsx from "clsx";
import { ProjectItem } from "@/utils/sanity/types";
import { fechImage } from "@/utils/fechtImage";

interface describeProps {
    describe: ProjectItem;
    reverse?: boolean;
}

export default  function SectionDescribe({
    describe,
    reverse,
}: describeProps) {
    const img =  fechImage(describe.image?.asset?._ref);


    return (
        <motion.div
            initial={reverse ? { opacity: 0, x: 10 } : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            //per vedere quando apparire
            viewport={{ amount: 0.5 }}
            className={clsx(
                "frameSection my-10 flex flex-col-reverse gap-y-3 overflow-hidden rounded-lg p-2 md:justify-center md:gap-y-0",
                reverse ? "md:flex-row-reverse" : "md:flex-row",
            )}
        >
            {img && (
                <Image
                    src={img}
                    alt={describe.title ?? "image"}
                    width={500}
                    height={500}
                    priority
                    className="w-full rounded object-contain md:w-1/2 md:object-cover"
                />
            )}

            <div className="mb-3 w-full px-10 md:mb-0 md:w-1/2">
                <h3 className="font-semibold uppercase">{describe.title}</h3>
                <p className="mt-2 text-justify md:mt-20">{describe.description}</p>
            </div>
        </motion.div>
    );
}
