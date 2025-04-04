"use client";
import { fechImage } from "@/utils/fechtImage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type cardProps = {
    name?: string | null;
    image?: string | null;
    id?: number | null;
};

export default function Card(card: cardProps) {
    const [image, setImage] = useState("/media/cover.png");
    useEffect(() => {
        if (typeof card.image == "string") {
            setImage(fechImage(card.image));
        }
    }, [card.image, card.name]);

    return (
        <Link
            href={`/progetti/${card.name}`}
            className="relative h-auto w-full shadow-none *:rounded hover:shadow-2xl hover:shadow-gray-500"
        >
            <div className="hover:bg-body/50 absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                <span className="bg-body rounded p-3 text-2xl font-bold uppercase">
                    {card.name ?? "progetto"}
                </span>
            </div>
            <Image
                src={image}
                alt={card.name ?? "progetto"}
                width={500}
                height={500}
                priority
                className="relative z-0 mx-auto size-full object-contain"
            />
        </Link>
    );
}
