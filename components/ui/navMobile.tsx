"use client";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ToggleMode from "./toggle-mode";

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
                <MenuIcon className="mx-auto" />
            </button>

            <div
                className={clsx(
                    "bg-opacity-90 bg-body fixed inset-0 z-50 flex transform flex-col items-center justify-center text-neutral-900 transition-all duration-800 dark:bg-orange-950 dark:text-white",
                    isOpen ? "" : "-translate-y-full",
                )}
            >
                <button
                    className="absolute top-4 right-4 cursor-pointer text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    x
                </button>
                <ToggleMode className="inline size-11 md:hidden" />

                {links.map((el) => (
                    <Link
                        key={el.label}
                        href={el.href}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <button className="my-4 text-2xl">{el.label}</button>
                    </Link>
                ))}
            </div>
        </section>
    );
}
