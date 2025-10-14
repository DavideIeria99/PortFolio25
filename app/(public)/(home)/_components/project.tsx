import Card from "@/components/ui/card";
import Link from "next/link";
import TitleSection from "@/components/ui/title-section";
import * as motion from "framer-motion/client";
import { client } from "@/utils/sanity/client";
import { optionsRevalidate, TEMPLATES_QUERY_LIMIT } from "@/utils/sanity/lib/queries";
import { Template } from "@/utils/sanity/types";


export const Project = async () => {
const templates = await client.fetch<Template[]>(
    TEMPLATES_QUERY_LIMIT,
    {},
    optionsRevalidate,
);

    return (
        <section className="my-4">
            <TitleSection title="progetti" />
            <div className="grid h-auto w-full grid-cols-2 gap-x-6 px-3 lg:grid-cols-3">
                {templates &&
                    templates.map((el,idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    delay: parseFloat(`.${idx}0`),
                                }}
                                className="rounded p-2 shadow-xl"
                            >
                                {el.slug?.current && el.title ? (
                                    <Card
                                        slug={el.slug.current}
                                        name={el.title}
                                        image={ el.cover?.asset?._ref}
                                    />
                                ) : null}
                            </motion.div>
                        );
                    })}
                <div className="my-10 flex w-full justify-center md:col-span-3">
                    <Link href={"/progetti"}>
                        <motion.button
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }}
                            className="frameSection"
                        >
                            altri progetti
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
