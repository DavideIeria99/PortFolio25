import Card from "@/components/layout/card";
import NextIntersectionObserver from "@/components/NextIntersectionObserver";
import { createClient } from "@/supabase/database/server";
import Link from "next/link";

export const Project = async () => {
    const supabase = createClient();

    const { data } = await supabase.from("templates").select("*").limit(3);

    return (
        <section className="justify my-4 flex flex-col items-center ">
            <h2 className="mb-5 w-full  text-2xl font-bold uppercase ">
                progetti
            </h2>
            <div className="gird-cols-1 grid h-auto w-full gap-6 px-3 md:grid-cols-2 lg:grid-cols-3">
                {data &&
                    data.map((el) => {
                        return (
                            <NextIntersectionObserver
                                key={el.id}
                                rootmargin={"1px"}
                                thresholdValue={0}
                                classes={`transition-all   `}
                                topIn={`animate-fadeInBottom`}
                                topOut="opacity-0"
                                bottomIn={`animate-fadeInBottom`}
                                bottomOut="opacity-0"
                            >
                                <Card name={el.name} image={el.img} />
                            </NextIntersectionObserver>
                        );
                    })}
            </div>
            <Link href={"/progetti"} prefetch={false} className="py-4">
                <button className="rounded bg-[#FFE5CA] p-2 hover:bg-slate-200">
                    alti progetti
                </button>
            </Link>
        </section>
    );
};
