"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/database/client";
import { useRouter } from "next/navigation";
import NavMobile from "./navMobile";

interface NavbarProps {
    user?: User | null;
}
export const Navbar = ({ user }: NavbarProps) => {
    const Router = useRouter();
    const logout = async () => {
        const supabaseClient = createClient();
        const { error } = await supabaseClient.auth.signOut();
        if (!error) {
            Router.refresh();
        }
    };

    return (
        <nav className=" relative w-full bg-gradient-to-b from-slate-200 to-body p-6 ">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className=" p-1 ">
                    <Logo className=" h-12 w-48 md:w-64 " />
                </Link>
                <section className="hidden text-lg font-bold uppercase  *:mx-2 hover:*:underline md:inline   ">
                    <Link href="/progetti">progetti</Link>

                    {user ? (
                        <>
                            <Link href="/admin">admin</Link>
                            <Link href="/contatti">contattami</Link>
                            <button
                                className="rounded bg-red-500 p-2 text-white"
                                onClick={logout}
                            >
                                logout
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </section>
                <NavMobile>
                    {user ? (
                        <>
                            <Link href="/admin">admin</Link>
                            <Link href="/contatti">contattami</Link>
                            <Link href="/progetti">progetti</Link>
                            <button
                                className="mt-2 rounded bg-red-500 p-2 text-white md:mt-0"
                                onClick={logout}
                            >
                                logout
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </NavMobile>
            </div>
        </nav>
    );
};
