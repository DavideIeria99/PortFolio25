import { fechSupabase } from "@/app/(public)/progetti/[name]/action";
import { fechImage } from "@/utils/fechtImage";
import NameMode from "@/utils/namemode";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface paramsProps {
    params: {
        name: string;
    };
}

export default async function Upsert({ params }: paramsProps) {
    const stringName = NameMode(params.name);
    const result = await fechSupabase(stringName);

    return (
        <main>
            <h2 className="font-semibold text-white">
                {result?.template.name}
            </h2>
            <section className=" w-full bg-blue-400">
                <table className="min-w-full text-left text-sm font-light">
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
                        {result?.describe &&
                            result.describe.map((el) => (
                                <tr
                                    key={el.id}
                                    className="border-b hover:bg-blue-300"
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
                                                className="w-full object-cover"
                                            />
                                        </Suspense>
                                    </td>
                                    <td className="whitespace-nowrap text-wrap px-6 py-4">
                                        {el.text}
                                    </td>
                                    <td className="text-center *:my-1 *:rounded *:p-1">
                                        <Link
                                            className="bg-orange-400 hover:bg-orange-300"
                                            href={`/admin/upsert/${params.name}/${el.id}`}
                                        >
                                            <button>modifica</button>
                                        </Link>
                                        <button className="bg-red-400 hover:bg-red-300">
                                            cancella
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}
