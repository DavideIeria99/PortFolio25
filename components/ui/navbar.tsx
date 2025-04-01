"use client";
import Link from "next/link";
import Logo from "../icons/logo";
import NavMobile from "./navMobile";

export const Navbar = () => {
    return (
        <nav className="to-body relative w-full bg-linear-to-b from-slate-200 p-6">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className="p-1">
                    <Logo className="h-12 w-48 md:w-64" />
                </Link>
                <section className="hidden text-lg font-bold uppercase *:mx-2 *:hover:underline md:inline">
                    <Link href="/progetti">progetti</Link>
                </section>
                <NavMobile>
                    <Link href="/progetti">progetti</Link>
                </NavMobile>
            </div>
        </nav>
    );
};
