import { Database } from "@/database.types";
import { createClient } from "@/utils/supabase/database/server";
import NameMode from "@/utils/namemode";



export interface sectionProps {
    Sect: Database["public"]["Tables"]["describe"]["Row"];
}


export async function fechSupabase(name: string) {
    const supabase = createClient();

    const { data: template } = await supabase
        .from("templates")
        .select("*")
        .eq("name", name)
        .single();
    if (!template) {
        //console.log("errore ");
        return;
    }
    const { data: describe } = await supabase
        .from("describe")
        .select("*")
        .eq("template_id", template.id)
        .order("id");

    const result = { describe, template }

    return result

}




export function GetImage(image: string) {
    const supabase = createClient();

    const { data: img } = supabase.storage.from("template").getPublicUrl(image);

    return NameMode(img.publicUrl);
}