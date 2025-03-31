"use client";
import Image from "next/image";
import { GetImage } from "../action";
import { Database } from "@/database.types";
import { useEffect, useState } from "react";

interface describeProps {
    describe: Database["public"]["Tables"]["describe"]["Row"];
    reverse?: boolean;
}
export const SectionDescribe = ({ describe, reverse }: describeProps) => {
    const [img, setImg] = useState("");

    useEffect(() => {
        GetImage(describe.image).then((r) => {
            if (r) {
                setImg(r);
            }
        });
    }, []);

    return (
        <section
            className={`my-10 flex flex-col-reverse md:justify-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"} `}
        >
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
                    {describe.title}
                </h3>
                <p className="mt-2 text-justify md:mt-20">{describe.text}</p>
            </div>
        </section>
    );
};
