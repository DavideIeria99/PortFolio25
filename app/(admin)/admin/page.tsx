import Card from "@/components/layout/card";
import { createClient } from "@/utils/supabase/database/server";
import Link from "next/link";

export default async function Admin() {
    const supabase = createClient();
    const { data: project } = await supabase
        .from("templates")
        .select("*")
        .order("id");

    return (
        <main className=" px-2">
            <h1 className="text-2xl font-black uppercase">Benvenuto Admin</h1>
            <section className="flex h-screen w-full">
                {/*@todo pulsanti */}
                <div className="flex w-1/3 flex-col items-center justify-center gap-y-4 bg-red-500 uppercase *:w-1/3 *:rounded *:p-1 *:text-center *:font-bold *:text-white ">
                    <Link
                        href={"admin/create"}
                        className="bg-blue-500  hover:bg-blue-400 "
                    >
                        crea
                    </Link>
                    <Link
                        href={"#"}
                        className="bg-yellow-600 hover:bg-yellow-500"
                    >
                        modifica
                    </Link>
                    <Link href={"#"} className="bg-red-900 hover:bg-red-800">
                        elimina
                    </Link>
                </div>
                {/*@todo progetti */}
                <section className="w-2/3 overflow-auto bg-blue-500 px-2 py-4">
                    <div className=" grid w-full grid-cols-3 gap-2 ">
                        {project &&
                            project.map((el) => (
                                <Card
                                    key={el.id}
                                    name={el.name}
                                    image={el.img}
                                />
                            ))}
                    </div>
                </section>
            </section>
        </main>
    );
}
