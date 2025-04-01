import { createClient } from "@/utils/supabase/database/server";
import Card from "@/components/ui/card";

export default async function Project() {
    const supabase = await createClient();
    const { data: project } = await supabase
        .from("templates")
        .select("*")
        .order("id");
    return (
        <section className="w-full px-1 py-10 md:w-2/3 md:bg-blue-500 md:px-2 md:py-4">
            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3">
                {project &&
                    project.map((el) => (
                        <Card
                            key={el.id}
                            name={el.name}
                            image={el.img}
                            id={el.id}
                        />
                    ))}
            </div>
        </section>
    );
}
