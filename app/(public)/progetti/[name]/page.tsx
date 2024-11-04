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
            <main className="px-10">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    {stringName}
                </h1>
                <p>non funziona</p>
            </main>
        );
    }
    return (
        <main className="px-10">
            <section className="flex gap-3">
                <h1 className="text-2xl font-bold uppercase md:text-4xl">
                    {stringName}
                </h1>
                {result.template.video && (
                    <a
                        className=" rounded bg-orange-500 p-4  transition duration-200 hover:bg-orange-200 md:px-3 md:py-1  "
                        href="#video"
                    >
                        <button className="w-full text-center font-semibold uppercase">
                            video
                        </button>
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
                    <h2
                        className="text-xl font-bold uppercase md:text-2xl"
                        id="video"
                    >
                        presentazione
                    </h2>
                    <iframe
                        className="mx-auto w-full rounded"
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
