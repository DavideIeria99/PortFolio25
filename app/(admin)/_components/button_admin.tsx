"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ButtonAdmin() {
    const [question, setQuestion] = useState("benvenuto Admin");
    const upsert = useSearchParams().get("upsert");
    const deleteTemplate = useSearchParams().get("delete");
    useEffect(() => {
        if (upsert) {
            setQuestion("cosa vuoi modificare?");
        } else if (deleteTemplate) {
            setQuestion("cosa vuoi cancellare?");
        } else {
            setQuestion("Benvenuto Admin");
        }
    }, [upsert, deleteTemplate]);
    return (
        <>
            {/*@todo pulsanti */}
            <div className="w-full rounded-sm bg-red-500 py-2 *:text-white md:w-1/3 md:py-10">
                <h1 className="text-center text-xl font-bold uppercase md:text-2xl">
                    {question}
                </h1>
                <section className="mx-auto mt-2 flex h-full flex-col items-center justify-center gap-y-4 *:w-1/2 *:rounded-sm *:p-1 *:text-center *:font-bold *:uppercase md:mx-0 md:*:w-1/3">
                    <Link
                        href={"admin/create"}
                        className="border-2 border-transparent bg-blue-500 hover:bg-blue-400 active:border-black"
                    >
                        crea
                    </Link>
                    <Link
                        href={"?upsert=true"}
                        className="border-2 border-transparent bg-yellow-600 hover:bg-yellow-500 active:border-black"
                    >
                        modifica
                    </Link>
                    <Link
                        href={"?delete=true"}
                        className="border-2 border-transparent bg-red-900 hover:bg-red-800 active:border-black"
                    >
                        elimina
                    </Link>
                    {(upsert || deleteTemplate) && (
                        <Link
                            href={"/admin"}
                            className="border-2 border-transparent text-amber-100 hover:bg-slate-400 hover:text-amber-50 active:border-black"
                        >
                            X
                        </Link>
                    )}
                </section>
            </div>
        </>
    );
}
