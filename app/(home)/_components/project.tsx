import Card from "@/components/layout/card";
import * as motion from "framer-motion/client";
import { createClient } from "@/supabase/database/server";
import Link from "next/link";

export const Project = async () => {
    const supabase = createClient();
    const { data } = await supabase
        .from("templates")
        .select("*")
        .limit(3)
        .order("id");

    return (
        <section className="justify my-4 flex flex-col items-center ">
            <h2 className="mb-5 w-full  text-2xl font-bold uppercase ">
                progetti
            </h2>
            <div className="gird-cols-1 grid h-auto w-full gap-6 px-3 md:grid-cols-2 lg:grid-cols-3">
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
                            >
                                <Card name={el.name} image={el.img} />
                            </motion.div>
                        );
                    })}
            </div>
            <Link href={"/progetti"} className="py-4">
                <motion.button
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                    }}
                    className="rounded bg-[#FFE5CA] p-2 hover:bg-slate-200"
                >
                    alti progetti
                </motion.button>
            </Link>
        </section>
    );
};
