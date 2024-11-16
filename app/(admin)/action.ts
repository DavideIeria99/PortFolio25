"use server"

import { supabaseAdmin } from "@/utils/supabase/database/admin";
import { createClient } from "@/utils/supabase/database/server";
import { redirect } from "next/navigation";

export type FormState = {
    message: string;
}
export const loginAction = async (prevState: FormState, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabaseClient = createClient();

    const { error } = await supabaseClient.auth.signInWithPassword({
        email, password,
    })

    if (error) {
        return { message: "email o password errata" }
    }

    redirect("/admin")
}

export const formCreate = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const message = formData.get("message") as string;

    //*nome immagine
    const imageExt = image.name.split(".").pop();
    const imageName = `Home.${imageExt}`;

    //*richiamiamo supabase
    const supabaseClient = createClient();
    const auth = await supabaseClient.auth.getUser();

    //*aggiungiamo il file
    if (auth.data.user?.role) {
        const { error } = await supabaseAdmin.storage.from("template").upload(`${name}/${imageName}`, image);
        if (error) {
            console.error("immagine:\n", error);
            // alert("problema con l'immagine");
        }

        if (!error) {
            //*creiamo il template
            const { error: dataError } = await supabaseClient.from("templates").insert({ name, description: message, img: `${name}/${imageName}` })
            if (!dataError) {
                redirect(`/progetti`)
            } else {
                console.error(dataError);

            }
        }
    }

};