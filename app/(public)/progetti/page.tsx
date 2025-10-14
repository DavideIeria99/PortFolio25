import Card from "@/components/ui/card";
import * as motion from "framer-motion/client";
import HeaderPage from "@/components/ui/header-page";
import { Metadata } from "next";
import { client } from "@/utils/sanity/client";
import { Template } from "@/utils/sanity/types";
import { optionsRevalidate, TEMPLATES_QUERY } from "@/utils/sanity/lib/queries";

export const metadata: Metadata = {
    title: "Progetti",
};

export default async function page() {
const templates = await client.fetch<Template[]>(TEMPLATES_QUERY, {}, optionsRevalidate);

    if (!templates) {
        return (
            <main>
                <h4 className="text-2xl font-bold text-white">
                    Errore ricaricare la pagina
                </h4>
            </main>
        );
    }
    return (
        <main className="px-20">
            <HeaderPage text={" progetti"} />
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                }}
                className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
                {templates &&
                    templates.map((el,idx) => {
                        return (
                            <Card slug={el.slug?.current} name={el.title} key={idx} image={el.cover?.asset?._ref} />
                        );
                    })}
            </motion.section>
        </main>
    );
}
