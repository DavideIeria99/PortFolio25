import { Database } from "@/database.types";
import { createClient } from "@/supabase/utils/server";
import { nameMode } from "@/utils";


export interface sectionProps {
    Sect: Database["public"]["Tables"]["describe"]["Row"];
}
const supabase = createClient();
export async function fechSupabase(name: string) {

    const { data: template } = await supabase
        .from("templates")
        .select("*")
        .eq("name", name)
        .single();
    if (!template) {
        console.log("errore ");
        return;
    }
    const { data: describe } = await supabase
        .from("describe")
        .select("*")
        .eq("template_id", template.id);

    return describe;
}




export function GetImage(image: string) {
    const { data: img } = supabase.storage.from("template").getPublicUrl(image);

    return nameMode(img.publicUrl);
}