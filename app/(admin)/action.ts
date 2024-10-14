"use server"
import { createClient } from "@/supabase/database/server";
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