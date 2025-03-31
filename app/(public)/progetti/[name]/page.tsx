"use client";
import { fechSupabase, sectionProps } from "./action";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SectionDescribe } from "./_components/section-Describe";
import NameMode from "@/utils/namemode";

export default function Detail() {
    const [details, setDetails] = useState<sectionProps | null>(null);
    const { name }: { name: string } = useParams();
    useEffect(() => {
        const stringName = NameMode(name); // Gestione di valori vuoti
        console.log("StringName:", stringName); // Debug per verificare stringName
        fechSupabase(stringName).then((r) => {
            if (r) {
                setDetails(r);
            }
        });
    }, [name]);

    if (!details) {
        return (
            <main className="px-10">
                <p>Errore di caricamento</p>
            </main>
        );
    }

    return (
        <main className="px-10">
            <section className="flex gap-3">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    {details.template.name}
                </h1>
                {details.template.video && (
                    <a
                        className="rounded-sm bg-orange-500 p-4 transition duration-200 hover:bg-orange-200 md:px-3 md:py-1"
                        href="#video"
                    >
                        <button className="w-full text-center font-semibold uppercase">
                            Video
                        </button>
                    </a>
                )}
            </section>
            <section>
                <p>{details.template.description}</p>
            </section>

            {details.describe &&
                details.describe.map((el) => {
                    if (el.id % 2 === 0) {
                        return <SectionDescribe key={el.id} describe={el} />;
                    } else {
                        return (
                            <SectionDescribe
                                key={el.id}
                                describe={el}
                                reverse
                            />
                        );
                    }
                })}
            {details.template.video && (
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
                        src={`${details.template.video}`}
                        height="399"
                        width="800"
                        title={details.template.name}
                    ></iframe>
                </section>
            )}
            {details.describe && details.describe.length === 0 && (
                <h2 className="mt-10 font-semibold text-white">
                    Non sono presenti dati
                </h2>
            )}
        </main>
    );
}
