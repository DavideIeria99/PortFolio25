import Card from "@/components/ui/card";
import * as motion from "framer-motion/client";
import HeaderPage from "@/components/ui/header-page";
import { createClient } from "@/utils/supabase/database/server";

export default async function page() {
    const supabase = await createClient();
    const { data: template } = await supabase
        .from("templates")
        .select("name,id,img");

    if (!template) {
        return (
            <main>
                <h4 className="text-2xl font-bold text-white">
                    Errore ricaricare la pagina
                </h4>
            </main>
        );
    }
    return (
        <main className="px-20">
            <HeaderPage text={" progetti"} />
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                }}
                className="my-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
                {template &&
                    template.map((el) => {
                        return (
                            <Card name={el.name} key={el.id} image={el.img} />
                        );
                    })}
            </motion.section>
        </main>
    );
}
