import DataTable from "@/app/(admin)/_components/dataTable";

import UpsertForm from "@/app/(admin)/_components/upsertForm";
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
    if (!result) {
        return;
    }

    return (
        <main>
            <section>
                <h2 className="font-semibold text-white">
                    {result?.template.name}
                </h2>
            </section>
            <UpsertForm id={result.template.id}>
                {/* //*tabella */}
                {result.describe && result.describe.length > 0 ? (
                    <section className=" w-full bg-blue-400">
                        {result?.describe && (
                            <DataTable
                                data={result.describe}
                                params={params.name}
                            />
                        )}
                    </section>
                ) : (
                    <p>non ci sono dati</p>
                )}
                {/* <p>vuoto</p> */}
            </UpsertForm>
        </main>
    );
}
