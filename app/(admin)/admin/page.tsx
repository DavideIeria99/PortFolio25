import { createClient } from "@/supabase/database/server";

export default async function Admin() {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();
    console.log(data);

    return (
        <main className="min-h-screen px-2">
            <h1>Benvenuto {data.user?.email} </h1>
        </main>
    );
}
