import NameMode from "./namemode";
import { createClient } from "./supabase/database/client";

export function fechImage(imageUrl: string | null) {
    if (!imageUrl) {
        return;
    }
    const supabase = createClient();
    const { data: image } = supabase.storage
        .from("template")
        .getPublicUrl(imageUrl);

    return NameMode(image.publicUrl, 'img');
}