"use client";

import { FormButton } from "@/components/ui/form-button";
import { useFormState } from "react-dom";
import { EmailAbout, FormState } from "../action";

const initialState: FormState = {
    message: "",
};
export default function FormContact() {
    const [state, formAction] = useFormState(EmailAbout, initialState);
    return (
        <form
            className="grid w-full grid-cols-1 gap-3  md:grid-cols-2 "
            action={formAction}
        >
            {/* nome */}
            <div className="w-full p-2">
                <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Mario Rossi"
                    className="w-full rounded-sm border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-hidden transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>
            {/* email */}
            <div className="w-full p-2">
                <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="mariorossi@gmail.com"
                    className="w-full rounded-sm border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-hidden transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>
            {/* testo */}
            <div className="w-full p-2 md:col-span-2">
                <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-600"
                >
                    Message
                </label>
                <textarea
                    placeholder="text..."
                    id="message"
                    name="message"
                    className="h-32 w-full resize-none rounded-sm border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-hidden transition-colors duration-200 ease-in-out focus:border-indigo-500"
                ></textarea>
            </div>
            {/* submit */}
            <div className=" w-full p-2 md:col-span-2 ">
                <FormButton text={"invia"} />
                <div className="text-red-700">{state.error}</div>
            </div>
        </form>
    );
}
