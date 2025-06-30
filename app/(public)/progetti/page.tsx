import Card from "@/components/ui/card";
import HeaderPage from "@/components/ui/header-page";
import { createClient } from "@/utils/supabase/database/server";
import { Suspense } from "react";

export default async function page() {
    const supabase = await createClient();
    const { data: template } = await supabase
        .from("templates")
        .select("name,id,img");

    if (!template) {
        return (
            <main>
                <h1 className="text-2xl font-bold text-white">
                    Errore ricaricare la pagina
                </h1>
            </main>
        );
    }
    return (
        <main className="px-20">
            <HeaderPage text={" progetti"} />
            <section className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {template &&
                    template.map((el) => {
                        return (
                            <Card name={el.name} key={el.id} image={el.img} />
                        );
                    })}
            </section>
        </main>
    );
}
