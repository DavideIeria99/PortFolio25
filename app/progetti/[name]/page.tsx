import { SectionRight } from "./_components/sectionRight";
import { SectionLeft } from "./_components/sectionLeft";
import NameMode from "@/utils/namemode";
import { fechSupabase } from "./action";

interface paramsProps {
    params: {
        name: string;
    };
}

export default async function page({ params }: paramsProps) {
    const stringName = NameMode(params.name);
    const result = await fechSupabase(stringName);

    if (!result) {
        return (
            <main className="min-h-screen px-10">
                <h1 className="text-4xl font-bold uppercase">{stringName}</h1>
                <p>non funziona</p>
            </main>
        );
    }
    return (
        <main className="min-h-screen px-10">
            <section className="flex gap-3">
                <h1 className="text-4xl font-bold uppercase">{stringName}</h1>
                {result.template.video && (
                    <a
                        className="rounded bg-orange-500 px-3 py-1 transition duration-200 hover:bg-orange-200  "
                        href="#video"
                    >
                        <button>video disponibile</button>
                    </a>
                )}
            </section>

            {result.describe &&
                result.describe.map((el) => {
                    if (el.id % 2 === 0) {
                        return <SectionRight key={el.id} Sect={el} />;
                    } else {
                        return <SectionLeft key={el.id} Sect={el} />;
                    }
                })}
            {result.template.video && (
                <section>
                    <h2 className="text-2xl font-bold uppercase" id="video">
                        presentazione
                    </h2>
                    <iframe
                        className="mx-auto rounded"
                        allowFullScreen
                        src={`${result.template.video}`}
                        height="399"
                        width="800"
                        title={result.template.name}
                    ></iframe>
                </section>
            )}
        </main>
    );
}
