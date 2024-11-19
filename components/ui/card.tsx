"use client";
import { createClient } from "@/utils/supabase/database/client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface cardProps {
    name?: string | null;
    image?: string | null;
    prewiew?: boolean;
}

export default function Card(card: cardProps) {
    const upsert = useSearchParams().get("upsert");
    const [href, setHreft] = useState(`progetti/${card.name}`);
    const [image, setImage] = useState("/media/prova.png");
    useEffect(() => {
        if (card.image && !card.prewiew) {
            const supabase = createClient();
            const { data: image } = supabase.storage
                .from("template")
                .getPublicUrl(card.image);
            setImage(image.publicUrl);
        } else if (card.image && card.prewiew) {
            setImage(card.image);
        }
        if (upsert) {
            setHreft(`admin/upsert/${card.name}`);
        } else {
            setHreft(`progetti/${card.name}`);
        }
    }, [card.image, card.name, card.prewiew, upsert]);

    if (card.prewiew) {
        return (
            <section className="relative  h-auto w-full shadow-none *:rounded hover:shadow-2xl hover:shadow-gray-500">
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:bg-body/50  hover:opacity-100">
                    <span className="rounded bg-body p-3 text-2xl font-bold uppercase">
                        {card.name ?? "progetto"}
                    </span>
                </div>
                <Image
                    src={image}
                    alt={card.name ?? "progetto"}
                    width={500}
                    height={500}
                    className="relative z-0 mx-auto size-full object-contain  "
                />
            </section>
        );
    }

    return (
        <Link
            href={href}
            className="relative  h-auto w-full shadow-none *:rounded hover:shadow-2xl hover:shadow-gray-500"
        >
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:bg-body/50  hover:opacity-100">
                <span className="rounded bg-body p-3 text-2xl font-bold uppercase">
                    {card.name ?? "progetto"}
                </span>
            </div>
            <Image
                src={image}
                alt={card.name ?? "progetto"}
                width={500}
                height={500}
                className="relative z-0 mx-auto size-full object-contain  "
            />
        </Link>
    );
}
