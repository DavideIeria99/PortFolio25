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

export const formCreateTemplate = async (formData: FormData) => {
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
                redirect(`/admin`)
            } else {
                console.error("descrizione: \n", dataError);

            }
        }
    }

};

export const formUpsertDescribe = async (formData: FormData) => {
    const id = formData.get("id") as unknown as number;
    const urlImage = formData.get("urlImage") as string;
    const template = formData.get("template") as unknown as number;
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const message = formData.get("message") as string;





    //*richiamiamo supabase
    const supabaseClient = createClient();
    const auth = await supabaseClient.auth.getUser();


    if (auth.data.user?.role) {
        //*se è presente un immagine
        if (image.size > 0) {
            //*nome immagine
            const { error: errorImage } = await supabaseAdmin.storage.from("template").update(urlImage, image);
            if (errorImage) {
                console.error("immagine:\n", errorImage);
                // alert("problema con l'immagine");
            }
        }
        //*creiamo il template
        const { error: dataError } = await supabaseClient.from("describe").upsert({ id: id, title: name, text: message, image: urlImage, template_id: template }).select();

        if (!dataError) {
            redirect(`/admin`)
        } else {
            console.error(dataError);
        }
    }

};
