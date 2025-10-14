import { Database } from "@/database.types";
import React from "react";

interface videoProps {
    link?: string,
    name:string
}
export default function VideoDetail({ name,link }: videoProps) {
    return (
        <>
            {link && (
                <section className="rounded px-10">
                    <h2
                        className="text-xl font-bold uppercase md:text-2xl"
                        id="video"
                    >
                        Presentazione
                    </h2>
                    <iframe
                        className="mx-auto w-full rounded-sm"
                        allowFullScreen
                        src={link}
                        height="399"
                        width="800"
                        title={name}
                    ></iframe>
                </section>
            )}
        </>
    );
}
