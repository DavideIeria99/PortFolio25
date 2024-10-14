"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/supabase/database/client";
import { useRouter } from "next/navigation";

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
        <nav className=" w-full bg-gradient-to-b from-slate-200 to-body p-6 ">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className=" p-1 ">
                    <Logo className=" h-12 w-48 md:w-64 " />
                </Link>
                <div className=" text-lg  font-bold uppercase *:mx-2 hover:*:underline  ">
                    <Link href="/progetti">progetti</Link>

                    {user ? (
                        <>
                            <Link href="/contatti" prefetch>
                                contattami
                            </Link>
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
                </div>
            </div>
        </nav>
    );
};
