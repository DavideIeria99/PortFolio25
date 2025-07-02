"use client";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface navProps {
    href: string;
    label: string;
}
export default function NavMobile({ links }: { links: navProps[] }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="me-3 text-end md:hidden">
            <button
                className="size-10 rounded-sm px-1 shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "X" : <MenuIcon className="mx-auto" />}
            </button>
            <section
                className={clsx(
                    "bg-body absolute top-20 right-0 z-30 w-full rounded-sm border-b-2 border-orange-600 px-2 py-4 text-start text-orange-600 uppercase transition-all duration-700 ease-in",
                    isOpen ? "flex flex-col" : "hidden",
                )}
            >
                {links.map((el) => (
                    <Link key={el.label} href={el.href}>
                        <button
                            className="text-sm font-bold uppercase"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {el.label}
                        </button>
                    </Link>
                ))}
            </section>
        </section>
    );
}
