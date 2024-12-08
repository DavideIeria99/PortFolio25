"use client";
import { useEffect, useState } from "react";

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
    const [isPath, setIsPath] = useState(window.location.pathname);
    useEffect(() => {
        console.log();
        if (isPath != window.location.pathname) {
            setIsOpen(false);
            setIsPath(window.location.pathname);
        }
    }, [isPath]);
    return (
        <section className=" me-3 text-end md:hidden">
            <button
                className="size-10 rounded px-1 text-center shadow"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "X" : <Hamburger />}
            </button>
            <section
                className={`absolute right-0  top-20 z-30 w-full rounded bg-gradient-to-b from-body to-slate-200  p-6 text-start text-sm capitalize transition-all duration-700 ease-in  ${isOpen ? "flex flex-col" : " hidden"}`}
            >
                {children}
            </section>
        </section>
    );
}
