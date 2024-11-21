"use server";
import { formUpsertDescribe } from "@/app/(admin)/action";
import FormUpdate from "@/components/layout/form-update";
import { fechImage } from "@/utils/fechtImage";
import { createClient } from "@/utils/supabase/database/server";
import Image from "next/image";

interface paramsProps {
    params: {
        id: string;
        name: string;
    };
}
export default async function modifica({ params }: paramsProps) {
    const supabaseClient = createClient();
    const { data } = await supabaseClient
        .from("describe")
        .select("*")
        .eq("id", parseInt(params.id))
        .single();

    return (
        <main className="grid grid-cols-2">
            <section className="bg-yellow-300 p-3">
                <h2>{data?.title}</h2>
                <p>{data?.text}</p>
                {data && (
                    <Image
                        src={fechImage(data.image)}
                        width={500}
                        height={500}
                        alt={data?.title ?? "image"}
                    />
                )}
            </section>
            <section className="bg-green-400">
                <FormUpdate
                    title={data?.title}
                    id={data?.id}
                    text={data?.text}
                    urlImage={data?.image}
                    template_id={data?.template_id}
                    action={formUpsertDescribe}
                />
            </section>
        </main>
    );
}
