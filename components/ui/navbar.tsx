"use client";

import Link from "next/link";
import NavMobile from "./navMobile";

export const Navbar = () => {
    const linkNav = [
        {
            href: "/progetti",
            label: "progetti",
        },
        {
            href: "/about",
            label: "about",
        },
        {
            href: "/contatti",
            label: "contatti",
        },
    ];
    return (
        <nav className="to-body w-full bg-linear-to-b from-slate-200 p-6 md:relative">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className="p-1">
                    <h4 className="text-2xl font-black text-orange-600 uppercase">
                        Davide dev
                    </h4>
                </Link>
                <ul className="hidden gap-x-4 text-lg font-bold uppercase *:mx-2 *:border-b-2 *:border-transparent *:hover:border-orange-400 md:inline">
                    {linkNav.map((el) => (
                        <Link key={el.label} href={el.href}>
                            {el.label}
                        </Link>
                    ))}
                </ul>

                <NavMobile links={linkNav} />
            </div>
        </nav>
    );
};
