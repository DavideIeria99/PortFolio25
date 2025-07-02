import { fechSupabase } from "./action";
import NameMode from "@/utils/namemode";
import SkelectroDetails from "@/components/ui/skelectror";
import { Suspense } from "react";
import TitleDetails from "./_components/title-details";
import DescribeDetails from "./_components/describe-details";
import VideoDetail from "./_components/video-detail";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return {
        title: NameMode(name),
    };
}

export default async function Detail({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const stringName = NameMode(name); // Gestione di valori vuoti
    const details = await fechSupabase(stringName);
    if (!details) {
        return (
            <main className="px-10">
                <h2 className="mt-10 font-semibold text-white">
                    Non sono presenti dati
                </h2>
            </main>
        );
    }
    const { describe, template } = details;

    return (
        <main className="px-10">
            <Suspense fallback={<p>caricamento...</p>}>
                <TitleDetails template={template} />
            </Suspense>
            <Suspense fallback={<SkelectroDetails />}>
                <DescribeDetails describe={describe} />
            </Suspense>
            <VideoDetail template={template} />
        </main>
    );
}
