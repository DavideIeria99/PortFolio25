
import TitleDetails from "./_components/title-details";
import DescribeDetails from "./_components/describe-details";
import VideoDetail from "./_components/video-detail";
import { client } from "@/utils/sanity/client";
import { Template } from "@/utils/sanity/types";
import { optionsRevalidate, TEMPLATE_QUERY } from "@/utils/sanity/lib/queries";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return {
        title: name,
    };
}

export default async function Detail({
    params,
}: {
    params: Promise<{ name: string }>;
}) {


    const details = await client.fetch<Template>(TEMPLATE_QUERY, await params, optionsRevalidate);
    const { body } = details; 
    
    if (!details) {
        return (
            <main className="px-10">
                <h2 className="mt-10 font-semibold text-white">
                    Non sono presenti dati
                </h2>
            </main>
        );
    }
    

    return (
        <main className="px-10">
            {
                details && (
                    <TitleDetails title={details.title} tag={details.tag} text={details.recap} link={details.link}  />
                )
}
{                body && (
                    <DescribeDetails  describe={body} />
                )}



            <VideoDetail link={details.link} name={details.title??"video"} />
        </main>
    );
}
