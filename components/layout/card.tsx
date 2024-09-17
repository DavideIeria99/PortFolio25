import Image from "next/image";
import Link from "next/link";
import React from "react";

interface cardProps {
    name?: string;
    image?: string;
    href?: string;
}

export default function Card(card: cardProps) {
    return (
        <Link
            href={card.href ?? "/"}
            className="relative h-auto w-full shadow-none *:rounded hover:shadow-2xl hover:shadow-gray-500"
        >
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity hover:bg-body/50 hover:opacity-100">
                <span className="rounded bg-body p-3 text-2xl font-bold uppercase">
                    {card.name ?? "progetto"}
                </span>
            </div>
            <Image
                src={card.image ?? "/media/prova.png"}
                alt={card.name ?? "progetto"}
                width={500}
                height={500}
                className="relative z-0 mx-auto size-full object-contain md:object-cover "
            />
        </Link>
    );
}
