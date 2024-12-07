"use client";
import { fechImage } from "@/utils/fechtImage";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { deleteDescribe } from "../action";

interface tableProps {
    data: {
        id: number;
        title: string;
        text: string;
        image: string;
        template_id: number;
    }[];
    params: string;
}

export default function DataTable({ params, data }: tableProps) {
    console.log(data);

    return (
        <table className="mt-4 min-w-full text-left text-sm font-light">
            <thead className="border-b bg-blue-500 font-medium dark:border-neutral-500">
                <tr>
                    <th scope="col" className="px-6 py-4">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Immagine
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Descrizione
                    </th>
                    <th scope="col" className=" px-6 py-4">
                        Azioni
                    </th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((el) => (
                        <tr
                            key={el.id}
                            className="h-24 border-b hover:bg-blue-300"
                        >
                            <td className="whitespace-nowrap text-wrap px-6 py-4 font-bold">
                                {el.title}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                                <Suspense fallback="caricamento..">
                                    <Image
                                        src={fechImage(el.image)}
                                        width={200}
                                        height={200}
                                        alt={el.title}
                                        className=" object-cover"
                                    />
                                </Suspense>
                            </td>
                            <td className="whitespace-nowrap text-wrap px-6 py-4">
                                {el.text}
                            </td>
                            <td className="my-8 flex flex-col justify-center  text-center *:mx-auto *:my-2 *:rounded *:p-1">
                                <Link
                                    className="bg-orange-400 hover:bg-orange-300"
                                    href={`/admin/upsert/${params}/${el.id}`}
                                >
                                    <button>modifica</button>
                                </Link>
                                <button
                                    onClick={() => deleteDescribe(el.id)}
                                    className="bg-red-400 hover:bg-red-300"
                                >
                                    cancella
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
