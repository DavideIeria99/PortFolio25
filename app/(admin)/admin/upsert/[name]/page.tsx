import { fechSupabase } from "@/app/(public)/progetti/[name]/action";
import NameMode from "@/utils/namemode";

interface paramsProps {
    params: {
        name: string;
    };
}

export default async function Upsert({ params }: paramsProps) {
    const stringName = NameMode(params.name);
    const result = await fechSupabase(stringName);
    console.log(result);

    return (
        <main>
            <h2 className="font-semibold text-white">
                {result?.template.name}
            </h2>
            <section>{}</section>
        </main>
    );
}
