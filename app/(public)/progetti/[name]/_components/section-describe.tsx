import Image from "next/image";
import { GetImage } from "../action";
import { Database } from "@/database.types";
import NameMode from "@/utils/namemode";
import * as motion from "framer-motion/client";
import clsx from "clsx";

interface describeProps {
    describe: Database["public"]["Tables"]["describe"]["Row"];
    reverse?: boolean;
}

export default async function SectionDescribe({
    describe,
    reverse,
}: describeProps) {
    const img = await GetImage(describe.image);
    const titleName = NameMode(describe.title, "title");

    return (
        <motion.section
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
                    alt={titleName}
                    width={500}
                    height={500}
                    priority
                    className="w-full rounded object-contain md:w-1/2 md:object-cover"
                />
            )}

            <div className="mb-3 w-full px-10 md:mb-0 md:w-1/2">
                <h3 className="font-semibold uppercase">{titleName}</h3>
                <p className="mt-2 text-justify md:mt-20">{describe.text}</p>
            </div>
        </motion.section>
    );
}
