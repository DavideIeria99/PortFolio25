import { nameMode } from "@/utils";
import { fechSupabase } from "./action";
import { SectionRight } from "./_components/sectionRight";
import { SectionLeft } from "./_components/sectionLeft";

interface paramsProps {
    params: {
        name: string;
    };
}

export default async function page({ params }: paramsProps) {
    const stringName = nameMode(params.name);
    const descrizione = await fechSupabase(stringName);

    return (
        <main className="min-h-screen px-10">
            <h1 className="text-4xl font-bold uppercase">{stringName}</h1>
            {descrizione &&
                descrizione.map((el) => {
                    if (el.id % 2 == 0) {
                        return <SectionRight key={el.id} Sect={el} />;
                    } else {
                        return <SectionLeft key={el.id} Sect={el} />;
                    }
                })}
        </main>
    );
}
