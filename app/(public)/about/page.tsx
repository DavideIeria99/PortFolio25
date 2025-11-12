import HeaderPage from "@/components/ui/header-page";
import { Download } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";
import { About } from "@/utils/sanity/types";
import { ABOUT_QUERY } from "@/utils/sanity/lib/queries";
import { client } from "@/utils/sanity/client";
import { DetailsBox } from "./_components/details-box";

export const metadata: Metadata = {
    title: "about",
};



export default async function page() {
    const about = await client.fetch<About>(ABOUT_QUERY, {});

    return (
        <main className="px-30">
            <HeaderPage text={"chi sono"} />
            <section className="mt-10 flex items-center gap-x-2">
                <h3>scarica il mio Cv</h3>
                <a
                    href="/CV_FullStack.pdf"
                    download
                    className="frameSection cursor-pointer p-1 hover:border-orange-200 hover:bg-orange-400 active:border-orange-400"
                >
                    <Download />
                </a>
            </section>
            <article className="mx-auto mt-5 grid w-3/4 grid-cols-1 gap-y-3 rounded py-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ amount: 0.2 }}
                    className="flex flex-col items-center justify-around md:flex-row md:gap-x-2"
                >
                    <Image
                        src={"/media/fototessera.jpg"}
                        alt="foto"
                        width={120}
                        height={70}
                        className="rounded-lg border-2 border-orange-200 outline-2 outline-orange-400"
                    />
                    <p className="w-full text-justify text-wrap md:w-1/2">
                        {about.recap}
                    </p>
                </motion.div>

                {about.body &&
                    about.body.map((el, idx) =>
                        el.children && el.children.length > 0 ? (
                            <DetailsBox details={el.children[0]} style={el.style} key={idx} />
                        ) : null
                    )}
            </article>
        </main>
    );
}
