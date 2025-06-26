import { Database } from "@/database.types";
import React from "react";

interface videoProps {
    template: Database["public"]["Tables"]["templates"]["Row"] | null;
}
export default function VideoDetail({ template }: videoProps) {
    return (
        <>
            {template?.video && (
                <section>
                    <h2
                        className="text-xl font-bold uppercase md:text-2xl"
                        id="video"
                    >
                        Presentazione
                    </h2>
                    <iframe
                        className="mx-auto w-full rounded-sm"
                        allowFullScreen
                        src={`${template.video}`}
                        height="399"
                        width="800"
                        title={template.name}
                    ></iframe>
                </section>
            )}
        </>
    );
}
