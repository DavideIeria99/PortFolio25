import { Database } from "@/database.types";
import React from "react";

interface titleProps {
    template: Database["public"]["Tables"]["templates"]["Row"] | null;
}

export default function TitleDetails({ template }: titleProps) {
    return (
        <section>
            <div className="flex gap-3">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    {template?.name}
                </h1>
                {template?.video && (
                    <a
                        className="rounded-sm bg-orange-500 p-4 transition duration-200 hover:bg-orange-200 md:px-3 md:py-1"
                        href="#video"
                    >
                        <button className="w-full text-center font-semibold uppercase">
                            Video
                        </button>
                    </a>
                )}
            </div>
            <div>
                <p>{template?.description}</p>
            </div>
        </section>
    );
}
