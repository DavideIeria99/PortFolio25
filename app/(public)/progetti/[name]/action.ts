'use server'
import { Database } from "@/database.types";
import { createClient } from "@/utils/supabase/database/server";
import NameMode from "@/utils/namemode";



export interface sectionProps {
    describe: Database["public"]["Tables"]["describe"]["Row"][];
    template: Database["public"]["Tables"]["templates"]["Row"];
}

export async function fechSupabase(name: string) {
    const stringName = NameMode(name);
    const supabase = await createClient();
    const { data: template } = await supabase
        .from("templates")
        .select("*")
        .eq("name", stringName)
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

    if (template && describe) {
        const result: sectionProps = { template, describe }

        return result
    }


}


export async function GetImage(image: string) {
    const supabase = await createClient();
    const { data: img } = supabase.storage.from("template").getPublicUrl(image);
    return NameMode(img.publicUrl);
}