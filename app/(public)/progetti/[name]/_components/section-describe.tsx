"use client";
import Image from "next/image";
import { GetImage } from "../action";
import { Database } from "@/database.types";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import NameMode from "@/utils/namemode";

interface describeProps {
    describe: Database["public"]["Tables"]["describe"]["Row"];
    reverse?: boolean;
}

export const SectionDescribe = ({ describe, reverse }: describeProps) => {
    const [img, setImg] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            setLoading(true);
            setError(null); // Reset error on new image load
            try {
                const imageSrc = await GetImage(describe.image);
                if (imageSrc) {
                    setImg(imageSrc);
                } else {
                    setError("Image not found");
                }
            } catch (e: any) {
                console.error("Could not load image", e);
                setError("Could not load image");
            } finally {
                setLoading(false);
            }
        };

        loadImage();
    }, [describe.image]);

    return (
        <section
            className={`my-10 flex flex-col-reverse md:justify-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"} `}
        >
            {loading && (
                <div className="w-full border-2 border-black object-contain md:w-1/2 md:object-cover">
                    <Loader />
                </div>
            )}
            {error && <p>Errore nel caricamento dell'immagine</p>}
            {img && (
                <Image
                    src={img}
                    alt={describe.title}
                    width={500}
                    height={500}
                    className="w-full object-contain md:w-1/2 md:object-cover"
                />
            )}

            <div className="details">
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                    {NameMode(describe.title)}
                </h3>
                <p className="mt-2 text-justify md:mt-20">{describe.text}</p>
            </div>
        </section>
    );
};
