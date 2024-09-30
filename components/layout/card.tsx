import { createClient } from "@/supabase/database/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface cardProps {
    name: string;
    image: string;
}

export default function Card(card: cardProps) {
    const supabase = createClient();

    const { data: image } = supabase.storage
        .from("template")
        .getPublicUrl(card.image);

    return (
        <Link
            href={`progetti/${card.name}`}
            prefetch
            className="relative h-auto w-full shadow-none *:rounded hover:shadow-2xl hover:shadow-gray-500"
        >
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:bg-body/50 hover:opacity-100">
                <span className="rounded bg-body p-3 text-2xl font-bold uppercase">
                    {card.name ?? "progetto"}
                </span>
            </div>
            <Image
                src={image.publicUrl ?? "/media/prova.png"}
                alt={card.name ?? "progetto"}
                width={500}
                height={500}
                className="relative z-0 mx-auto size-full object-contain  "
            />
        </Link>
    );
}
