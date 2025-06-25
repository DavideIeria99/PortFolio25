"use client";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Hamburger = () => {
    return (
        <svg
            className="mx-auto w-5"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#000000"
                d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
            />
        </svg>
    );
};
export default function NavMobile({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
                    "bg-body *:hover:bg absolute top-20 right-0 z-30 w-full rounded-sm border-b-2 border-white px-2 py-4 text-start text-sm font-bold capitalize uppercase transition-all duration-700 ease-in *:border-2",
                    isOpen ? "flex flex-col" : "hidden",
                )}
            >
                {children}
            </section>
        </section>
    );
}
