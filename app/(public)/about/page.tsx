import HeaderPage from "@/components/ui/header-page";
import NameMode from "@/utils/namemode";
import { createClient } from "@/utils/supabase/database/server";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page() {
    const supabase = await createClient();
    const { data } = await supabase.from("about").select("*").order("id");
    return (
        <main className="px-30">
            <HeaderPage text={"chi sono"} />
            <section className="mt-10 flex items-center gap-x-2">
                <h3>scarica il mio Cv</h3>
                <a
                    href="/Cv-frontEnd.pdf"
                    download
                    className="cursor-pointer rounded border-2 border-orange-400 bg-orange-200 p-1 hover:border-orange-200 hover:bg-orange-400 active:border-orange-400"
                >
                    <Download />
                </a>
            </section>
            <article className="mx-auto mt-5 grid w-3/4 grid-cols-1 gap-y-3 rounded py-6 md:px-20">
                {data &&
                    data.map((el) =>
                        el.id == 1 ? (
                            <section
                                key={el.id}
                                className="flex flex-col items-center justify-around md:flex-row md:gap-x-2"
                            >
                                <Image
                                    src={"/media/fototessera.jpg"}
                                    alt="foto"
                                    width={120}
                                    height={70}
                                    className="rounded-lg border-2 border-orange-200 outline-2 outline-orange-400"
                                />
                                <p className="w-full text-justify text-wrap md:w-1/2">
                                    {el.describe}
                                </p>
                            </section>
                        ) : (
                            <section key={el.id}>
                                <h2>{NameMode(el.title, "title")}</h2>
                                <p className="text-justify">{el.describe}</p>
                            </section>
                        ),
                    )}
            </article>
        </main>
    );
}
