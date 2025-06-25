import Card from "@/components/ui/card";
import * as motion from "framer-motion/client";
import { createClient } from "@/utils/supabase/database/server";
import Link from "next/link";
import TitleSection from "@/components/ui/title-section";

export const Project = async () => {
    const supabase = await createClient();
    const { data } = await supabase
        .from("templates")
        .select("*")
        .limit(3)
        .order("id");

    return (
        <section className="my-4">
            <TitleSection title="progetti" />
            <div className="gird-cols-4 grid h-auto w-full gap-x-6 px-3 lg:grid-cols-3">
                {data &&
                    data.map((el) => {
                        return (
                            <motion.div
                                key={el.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    delay: parseFloat(`.${el.id}`),
                                }}
                                className="rounded p-2 shadow-xl"
                            >
                                <Card name={el.name} image={el.img} />
                            </motion.div>
                        );
                    })}
            </div>
            <div className="my-10 flex w-full justify-center">
                <Link href={"/progetti"}>
                    <motion.button
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                        }}
                        className="rounded-sm border border-transparent bg-[#FFE5CA] p-2 hover:bg-slate-200 active:border-amber-200"
                    >
                        alti progetti
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};
