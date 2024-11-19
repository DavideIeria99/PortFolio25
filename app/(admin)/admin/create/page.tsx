"use client";
import Card from "@/components/ui/card";
import FormCreate from "@/components/layout/form-create";
import { useEffect, useState } from "react";

export default function Create() {
    const [name, setName] = useState<string | null>(null);
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
        <main>
            <h1 className="uppercase">crea il progetto</h1>
            <section className="flex h-full  *:w-1/2">
                {/* left prewiew */}
                <div className="h-auto  bg-yellow-500">
                    <h2 className="ms-3 uppercase text-white">prewiew</h2>
                    <div className="px-52 py-10">
                        <Card name={name} image={image} prewiew />
                    </div>
                </div>
                {/* form dati */}
                <div className="h-full bg-green-500">
                    <h2 className="ms-3 uppercase text-white">dati</h2>
                    <FormCreate setPrewiew={handleFile} setName={setName} />
                </div>
            </section>
        </main>
    );
}
