import Card from "@/components/layout/card";
import NextIntersectionObserver from "@/components/NextIntersectionObserver";
import { createClient } from "@/supabase/database/server";

export default async function page() {
    const supabase = createClient();
    const { data: template } = await supabase.from("templates").select("*");

    if (!template) {
        return (
            <main className="min-h-screen">
                <h1 className="text-2xl font-bold text-white">
                    Errore ricaricare la pagina
                </h1>
            </main>
        );
    }
    return (
        <main className="px-10">
            <h1 className="text-4xl font-bold uppercase">tutti i progetti</h1>
            <section className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {template &&
                    template.map((el) => {
                        return (
                            <NextIntersectionObserver
                                key={el.id}
                                rootmargin={"2px"}
                                thresholdValue={0}
                                classes={`duration-300 transition-all delay-[${el.id * 1000}ms]`}
                                topIn={`animate-fadeInBottom`}
                                topOut="opacity-0"
                                bottomIn={`animate-fadeInBottom   delay-[${el.id * 1000}ms] `}
                                bottomOut="opacity-0"
                            >
                                <Card name={el.name} image={el.img} />
                            </NextIntersectionObserver>
                        );
                    })}
            </section>
        </main>
    );
}
