import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SimpleContact() {
    return (
        <section className="mb-3 grid grid-cols-3 gap-1 md:mb-0 md:grid-cols-2">
            <h2 className="col-span-3 text-center text-2xl font-bold uppercase text-orange-400">
                Contatti
            </h2>
            <Link
                href={"https://www.linkedin.com/in/davide-ieria-dev/"}
                className="relative h-10 w-10"
            >
                <Image
                    src={"/media/icon/linkedin.svg"}
                    alt={"Linkedin"}
                    fill
                    className="mx-auto hidden h-10 w-10 object-contain md:inline"
                />
            </Link>
            <span className="col-span-3 mx-auto font-bold  text-slate-600  md:col-span-1 md:mx-0">
                davideieria1099@gmail.com
            </span>
        </section>
    );
}
