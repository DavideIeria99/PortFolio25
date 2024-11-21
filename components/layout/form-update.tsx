"use client";
import { useState } from "react";
import { FormButton } from "../ui/form-button";

interface dataProps {
    title: string | undefined;
    id: number | undefined;
    text: string | undefined;
    urlImage: string | undefined;
    template_id: number | undefined;
    action: (formData: FormData) => Promise<void> | undefined;
}
export default function FormUpdate({ ...props }: dataProps) {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    return (
        <form
            className="grid w-full grid-cols-1 gap-3  md:grid-cols-2 "
            action={props.action}
        >
            <input type="text" hidden defaultValue={props.id} name="id" />
            <input
                type="text"
                hidden
                defaultValue={props.urlImage}
                name="urlImage"
            />
            <input
                type="text"
                hidden
                defaultValue={props.template_id}
                name="template"
            />
            {/* nome */}
            <div className="w-full p-2">
                <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                >
                    Nome Progetto
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Progetto"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>
            <div className="w-full p-2">
                <label
                    htmlFor="image"
                    className="text-sm leading-7 text-gray-600"
                >
                    image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="image"
                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>

            {/* testo */}
            <div className="w-full p-2 md:col-span-2">
                <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-600"
                >
                    descrizione
                </label>
                <textarea
                    placeholder="text..."
                    defaultValue={text}
                    onChange={(e) => setText(e.target.value)}
                    id="message"
                    name="message"
                    className="h-24 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                ></textarea>
            </div>
            {/* submit */}
            <div className=" w-full p-2 md:col-span-2 ">
                <FormButton text={"invia"} />
            </div>
        </form>
    );
}
