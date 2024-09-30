"use client";

import { FormButton } from "@/components/ui/form-button";
import { EmailAbout, FormState } from "./action";
import { useFormState } from "react-dom";

const initialState: FormState = {
    message: "",
};
export default function About() {
    const [state, formAction] = useFormState(EmailAbout, initialState);
    return (
        <main className="min-h-screen">
            <section className="mx-auto w-full rounded border-4 border-white bg-orange-300 py-10 shadow-md shadow-orange-200 md:w-1/2 ">
                <h1 className=" mb-4 text-center text-2xl font-medium uppercase text-white sm:text-3xl">
                    contatti
                </h1>

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
                            className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
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
                            className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
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
                            className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                        ></textarea>
                    </div>
                    {/* submit */}
                    <div className=" w-full p-2 md:col-span-2 ">
                        <FormButton text={"invia"} />
                        <div className="text-red-700">{state.error}</div>
                    </div>
                </form>
            </section>
        </main>
    );
}
