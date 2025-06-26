import Image from "next/image";
import * as motion from "framer-motion/client";
import TitleSection from "@/components/ui/title-section";
import clsx from "clsx";

const arrLing = [
    {
        id: 1,
        img: "/media/icon/python.svg",
        name: "python",
    },
    {
        id: 2,
        img: "media/icon/Js.svg",
        name: "JS",
    },
    {
        id: 3,
        img: "media/icon/php.svg",
        name: "PHP",
    },
    {
        id: 4,
        img: "media/icon/Laravel.svg",
        name: "Laravel",
    },
    {
        id: 5,
        img: "media/icon/React.svg",
        name: "React",
    },
    {
        id: 6,
        img: "media/icon/bootstrap.svg",
        name: "bootstrap",
    },
    {
        id: 7,
        img: "media/icon/Vue.svg",
        name: "Vue",
    },
    {
        id: 8,
        img: "media/icon/Tailwind.svg",
        name: "Tailwind",
    },
    {
        id: 9,
        img: "media/icon/nextjs.svg",
        name: "Nextjs",
    },
];

export const Framework = () => {
    return (
        <article className="my-20 w-full">
            <TitleSection title="FrameWork e linguaggi" />
            {/* computer */}
            <section className="grid w-full grid-cols-3 md:grid-cols-9 md:grid-rows-4">
                {arrLing.map((el) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: parseFloat(`.${el.id}`),
                            }}
                            key={el.id}
                            className="flex items-end justify-center p-5 md:row-span-2 md:p-0 md:odd:row-end-3 md:even:row-span-3 md:even:row-start-2"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={el.img}
                                alt={el.name}
                                className="size-12 md:size-20"
                            />
                        </motion.div>
                    );
                })}
            </section>
        </article>
    );
};
