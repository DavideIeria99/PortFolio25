import Link from "next/link";
import Logo from "../icons/logo";

export const Navbar = () => {
    return (
        <nav className=" w-full bg-gradient-to-b from-slate-200 to-body p-6 ">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className=" p-1 ">
                    <Logo className=" h-12 w-48 md:w-64 " />
                </Link>
                <div className=" text-lg  font-bold uppercase *:mx-2 hover:*:underline  ">
                    <Link href="/progetti">progetti</Link>
                    <Link href="/contatti" prefetch>
                        contatti
                    </Link>
                </div>
            </div>
        </nav>
    );
};
