import Link from "next/link";
import NavMobile from "./navMobile";
import ToggleMode from "./toggle-mode";

export default async function Navbar() {
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
        <nav className="to-body w-full bg-linear-to-b from-slate-200 p-6 md:relative dark:to-orange-950">
            <section className="flex items-center justify-between">
                <Link href="/" className="p-1">
                    <h4 className="font-amiri text-2xl font-black text-orange-600 capitalize dark:text-neutral-300">
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
                <ToggleMode className="hidden md:inline" />
                <NavMobile links={linkNav} />
            </section>
        </nav>
    );
}
