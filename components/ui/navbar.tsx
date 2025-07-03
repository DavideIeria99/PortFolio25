"use client";

import Link from "next/link";
import NavMobile from "./navMobile";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [theme, Setheme] = useState(false);
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
            <section className="flex items-center justify-between">
                <Link href="/" className="p-1">
                    <h4 className="font-amiri text-2xl font-black text-orange-600 capitalize">
                        Davide dev
                    </h4>
                </Link>
                <ul className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:justify-center md:gap-5">
                    {linkNav.map((el) => (
                        <Link
                            key={el.label}
                            href={el.href}
                            className="mx-2 border-b-2 border-transparent text-lg font-bold uppercase hover:border-orange-400"
                        >
                            {el.label}
                        </Link>
                    ))}
                </ul>
                <button
                    className="frameSection rounded-lg p-2"
                    onClick={() => Setheme(!theme)}
                >
                    {theme ? <Sun /> : <Moon />}
                </button>

                <NavMobile links={linkNav} />
            </section>
        </nav>
    );
}
