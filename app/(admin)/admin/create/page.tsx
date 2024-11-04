"use client";
import Card from "@/components/layout/card";
import FormCreate from "@/components/layout/form-create";
import { useEffect, useState } from "react";

export default function Create() {
    const [name, setName] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [prewiew, setPrewiew] = useState<string | null>(null);

    // controlla se ce il file
    useEffect(() => {
        if (!image) {
            setPrewiew(null);
            return;
        }

        const objectUrl = URL.createObjectURL(image);
        setPrewiew(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [image]);

    console.log(image);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);

        if (!e.target.files) {
            setImage(() => null);
            return;
        }
        setImage(e.target.files[0]);
    };
    return (
        <main>
            <h1 className="uppercase">crea il progetto</h1>
            <section className="flex h-full  *:w-1/2">
                {/* left prewiew */}
                <div className="h-auto  bg-yellow-500">
                    <h2>prewiew</h2>
                    <div className="px-52 py-10">
                        <Card name={name} image={prewiew} prewiew />
                    </div>
                </div>
                {/* form dati */}
                <div className="h-full bg-green-500">
                    <h2>dati</h2>
                    <FormCreate setImage={handleFile} setName={setName} />
                </div>
            </section>
        </main>
    );
}
