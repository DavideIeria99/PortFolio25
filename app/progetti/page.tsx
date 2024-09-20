import Card from "@/components/layout/card";
import { createClient } from "@/supabase/utils/server";
import { redirect } from "next/navigation";

export default async function page() {
    const supabase = createClient();
    const { data: template } = await supabase.from("templates").select("*");

    if (!template) {
        return redirect("/progetti");
    }
    return (
        <main className="px-10">
            <h1 className="text-4xl font-bold uppercase">tutti i progetti</h1>
            <section className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {template &&
                    template.map((el) => {
                        return (
                            <Card key={el.id} name={el.name} image={el.img} />
                        );
                    })}
            </section>
        </main>
    );
}
