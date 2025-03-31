import NameMode from "./namemode";
import { createClient } from "./supabase/database/client";

export function fechImage(imageUrl: string) {
    const supabase = createClient();
    const { data: image } = supabase.storage
        .from("template")
        .getPublicUrl(imageUrl);
    console.log(image.publicUrl);

    return NameMode(image.publicUrl);
}