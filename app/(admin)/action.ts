"use server"


import createName from "@/utils/nameCreate";
import { createClient } from "@/utils/supabase/database/server";

import { redirect } from "next/navigation";

export type FormState = {
    message: string;
}


//?auth
export async function loginAction(prevState: FormState, formData: FormData) {
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

//? create template
export const formCreateTemplate = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const message = formData.get("message") as string;

    //*nome immagine
    const imageExt = image.name.split(".").pop();
    const imageName = `template.${imageExt}`;

    //*richiamiamo supabase
    const supabaseClient = createClient();
    const auth = await supabaseClient.auth.getUser();

    //*aggiungiamo il file
    if (auth.data.user?.role) {
        const { error } = await supabaseClient.storage.from("template").upload(`${name}/${imageName}`, image);
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

//?create describe
export const formCreateDescribe = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const message = formData.get("message") as string;
    const template_id = formData.get("id") as unknown as number;

    //*nome immagine
    const imageName = createName(image.name, name);


    //*controlliamo se siamo auth
    const supabaseClient = createClient();
    const auth = await supabaseClient.auth.getUser();
    const nameFile = await supabaseClient.from("templates").select("img").eq('id', template_id).single();
    const field = nameFile.data?.img?.split('/')[0]

    console.log(`${field} / ${imageName}`);


    //*aggiungiamo il file
    if (auth.data.user?.role) {
        const { error } = await supabaseClient.storage.from("template").upload(`${field}/${imageName}`, image);
        if (error) {
            console.error("immagine:\n", error);
            // alert("problema con l'immagine");
        }

        if (!error) {
            //*creiamo il describe
            const { error: dataError } = await supabaseClient.from("describe").insert({ title: name, text: message, template_id: template_id, image: `${field}/${imageName}` });
            if (!dataError) {
                redirect(`/admin`)
            } else {
                console.error("descrizione: \n", dataError);

            }
        }
    }

};

//?modificare describe
export const formUpsertDescribe = async (formData: FormData) => {
    // dati
    const id = formData.get("id") as unknown as number;
    const urlImage = formData.get("urlImage") as string;
    const template = formData.get("template") as unknown as number;
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const message = formData.get("message") as string;

    //*richiamiamo supabase
    const supabaseClient = createClient();
    const auth = await supabaseClient.auth.getUser();

    //*modifichiamo il nome
    const DataTime = Date().split(' ')[4];
    const numberTime = DataTime.split(':').join('');
    const imageExt = image.name.split(".").pop();
    const imageName = `${name}${numberTime}.${imageExt}`;

    const field = urlImage.split('/')[0];
    const urlNewImage = `${field}/${imageName}`;



    if (auth.data.user?.role) {
        //*se è presente un immagine
        if (image.size > 0) {
            //*modifica template
            const { data } = await supabaseClient.from("templates").select('*').eq("id", template).single();
            if (data?.img == urlImage) {
                const { error: dataError } = await supabaseClient.from('templates').update({ img: urlNewImage }).eq('id', template)
                if (dataError) {
                    console.log(dataError)
                    return;
                }
            }
            //*inseriamo immagine
            const { error: imageError } = await supabaseClient.storage.from("template").remove([urlImage]);
            if (imageError) {
                return console.error(imageError);
            }
            const { error: errorImage } = await supabaseClient.storage.from("template").upload(urlNewImage, image);
            if (errorImage) {
                console.error("immagine:\n", errorImage);
            }
        }
        //*modifichiamo il describe
        const { error: dataError } = await supabaseClient.from("describe").upsert({ id: id, title: name, text: message, image: urlNewImage, template_id: template }).select();

        if (!dataError) {
            redirect('/admin');
        } else {
            console.error(dataError);
        }
    }

};

//?cancellare template
export const deleteTemplate = async (id: number | null | undefined) => {
    //se ce l'id
    const supabaseClient = createClient();
    if (!id) {
        return
    }
    //vediamo se ci sono describe e prendiamo i template 
    const { data: template, error: errorTemplate } = await supabaseClient.from("templates").select('img').eq('id', id).single();
    const { data: describe, error: errorDescribe } = await supabaseClient.from("describe").select('image').eq('template_id', id);

    console.log(describe)
    if (errorDescribe) {
        console.log(errorDescribe);
        return
    }
    if (errorTemplate) {
        console.log(errorTemplate);
        return
    }

    if (describe.length > 0) {
        console.log("rimuoviamo le immagini in describe: ")
        describe.forEach(element => {
            try {
                const { } = supabaseClient.storage.from("template").remove([element.image]);
            } catch (error) {
                console.log(error);
                return
            }
        });
    }
    if (template.img) {
        console.log("rimuoviamo l'immagine in template:");
        const { error: imageError } = await supabaseClient.storage.from("template").remove([template.img]);
        if (imageError) {
            return console.error(imageError);
        }
    }
    console.log("rimuoviamo il template:");
    const { error } = await supabaseClient.from("templates").delete().eq("id", id);
    if (error) {
        return console.log(error);
    }
    redirect("/admin");



}



