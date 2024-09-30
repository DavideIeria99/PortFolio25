"use server";

import { MailerClient } from "@/utils/nodeMail";
import EmailCustom from "./_components/email-custom";

export type FormState = {
    message: string,
    error?: string
}
export const EmailAbout = async (prevState: FormState, formData: FormData) => {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    try {

        await MailerClient.sendMail({
            from: email,
            to: "davideieria99@gmail.com",
            subject: `about ${name}`,
            text: `about ${name}`,
            html: EmailCustom(message),
        });
        return { message: "", error: "" }
    } catch (error) {
        return { message: "", error: "errore" }
    }
};