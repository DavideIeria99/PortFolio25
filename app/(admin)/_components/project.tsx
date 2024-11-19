"use server";
import { createClient } from "@/utils/supabase/database/server";
import Card from "@/components/ui/card";

export default async function Project() {
    const supabase = createClient();
    const { data: project } = await supabase
        .from("templates")
        .select("*")
        .order("id");
    return (
        <section className="w-2/3 overflow-auto bg-blue-500 px-2 py-4">
            <div className=" grid w-full grid-cols-3 gap-2 ">
                {project &&
                    project.map((el) => (
                        <Card key={el.id} name={el.name} image={el.img} />
                    ))}
            </div>
        </section>
    );
}
