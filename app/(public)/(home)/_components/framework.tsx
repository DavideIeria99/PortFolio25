import Image from "next/image";
import * as motion from "framer-motion/client";

const arrLing = [
    {
        img: "media/icon/Html.svg",
        name: "Html",
    },
    {
        img: "media/icon/CSS.svg",
        name: "Css",
    },
    {
        img: "media/icon/Js.svg",
        name: "JS",
    },
    {
        img: "media/icon/php.svg",
        name: "PHP",
    },
];
const arrFrame = [
    {
        img: "media/icon/Laravel.svg",
        name: "Laravel",
    },
    {
        img: "media/icon/React.svg",
        name: "React",
    },
    {
        img: "media/icon/bootstrap.svg",
        name: "bootstrap",
    },
    {
        img: "media/icon/Vue.svg",
        name: "Vue",
    },
    {
        img: "media/icon/Tailwind.svg",
        name: "Tailwind",
    },
    {
        img: "media/icon/nextjs.svg",
        name: "Nextjs",
    },
];
export const Framework = () => {
    return (
        <section className="my-10  w-full ">
            <h2 className="mb-5 text-2xl font-bold uppercase">
                FrameWork e linguaggi
            </h2>
            {/* computer */}
            <div className="hidden  w-full justify-around font-semibold uppercase md:flex  ">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    className="w-1/3 "
                >
                    <h3 className="mb-4 text-xl">linguaggi</h3>
                    <div className="grid grid-cols-2">
                        {arrLing.map((el) => {
                            return (
                                <Image
                                    key={el.name}
                                    width={500}
                                    height={500}
                                    src={el.img}
                                    alt={el.name}
                                    className="size-12 md:size-24"
                                />
                            );
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 3,
                    }}
                    className="w-1/3 "
                >
                    <h3 className="mb-4 text-xl">Framework</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {arrFrame.map((el) => {
                            return (
                                <Image
                                    key={el.name}
                                    width={500}
                                    height={500}
                                    src={el.img}
                                    alt={el.name}
                                    className="size-12 md:size-24"
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
            {/* mobile */}
            <div className="flex w-full justify-around font-semibold uppercase md:hidden  ">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    className="w-1/3 "
                >
                    <h3 className="mb-4 text-xl">linguaggi</h3>
                    <div className="grid grid-cols-2">
                        {arrLing.map((el) => {
                            return (
                                <Image
                                    key={el.name}
                                    width={500}
                                    height={500}
                                    src={el.img}
                                    alt={el.name}
                                    className="size-12 md:size-24"
                                />
                            );
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    className="w-1/3 "
                >
                    <h3 className="mb-4 text-xl">Framework</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {arrFrame.map((el) => {
                            return (
                                <Image
                                    key={el.name}
                                    width={500}
                                    height={500}
                                    src={el.img}
                                    alt={el.name}
                                    className="size-12 md:size-24"
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
