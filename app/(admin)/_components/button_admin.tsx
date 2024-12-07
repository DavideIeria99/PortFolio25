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
            <div className=" w-1/3 bg-red-500   py-10 *:text-white">
                <h1 className="text-center text-2xl font-bold uppercase">
                    {question}
                </h1>
                <section className="flex h-full flex-col items-center justify-center gap-y-4 *:w-1/3 *:rounded  *:p-1 *:text-center  *:font-bold *:uppercase ">
                    <Link
                        href={"admin/create"}
                        className="bg-blue-500  hover:bg-blue-400 "
                    >
                        crea
                    </Link>
                    <Link
                        href={"?upsert=true"}
                        className="bg-yellow-600 hover:bg-yellow-500"
                    >
                        modifica
                    </Link>
                    <Link
                        href={"?delete=true"}
                        className="bg-red-900 hover:bg-red-800"
                    >
                        elimina
                    </Link>
                </section>
            </div>
        </>
    );
}
