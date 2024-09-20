import Card from "@/components/layout/card";
import { createClient } from "@/supabase/utils/server";
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
                            <Card key={el.id} name={el.name} image={el.img} />
                        );
                    })}
            </div>
            <Link href={"/progetti"} className="py-4">
                <button className="rounded bg-[#FFE5CA] p-2 hover:bg-slate-200">
                    alti progetti
                </button>
            </Link>
        </section>
    );
};
