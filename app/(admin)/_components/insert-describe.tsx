"use client";
import { FormButton } from "@/components/ui/form-button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formCreateDescribe } from "../action";

interface propsinsert {
    id: number;
}

export default function InsertDescribe({ id }: propsinsert) {
    const [name, setName] = useState<string | null>(null);
    const [text, setText] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [prewiew, setPrewiew] = useState<File | null>(null);
    // controlla se è stato preso un file
    useEffect(() => {
        if (!prewiew) {
            setPrewiew(null);
            return;
        }
        //prende url
        const objectUrl = URL.createObjectURL(prewiew);
        setImage(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [prewiew]);

    //controlla se ce un file nel form
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            setPrewiew(() => null);
        } else {
            setPrewiew(e.target.files[0]);
        }
    };

    return (
        <section
            className="
            flex w-full flex-col-reverse bg-blue-300 md:flex-row  md:px-12 md:*:w-1/2"
            id="insert"
        >
            <div>
                <h2>Prewiew</h2>
                <h3>{name}</h3>
                <p>{text}</p>
                {image && (
                    <Image alt="prewiew" src={image} width={500} height={500} />
                )}
            </div>
            <div>
                <h3>Form</h3>
                <form action={formCreateDescribe}>
                    {id && (
                        <input type="text" hidden defaultValue={id} name="id" />
                    )}
                    <div className="w-full p-2">
                        <label
                            htmlFor="name"
                            className="text-sm leading-7 text-gray-600"
                        >
                            titolo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="titolo.."
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => handleFile(e)}
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
                            onChange={(e) => setText(e.target.value)}
                            id="message"
                            name="message"
                            className="h-24 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div className=" w-full p-2 md:col-span-2 ">
                        <FormButton text={"invia"} />
                    </div>
                </form>
            </div>
        </section>
    );
}
