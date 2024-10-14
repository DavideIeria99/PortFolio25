import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SimpleContact() {
    return (
        <section className="mb-3 grid grid-cols-3 gap-1 md:mb-0 md:grid-cols-2">
            <h2 className="col-span-3 text-center text-2xl font-bold uppercase text-orange-400">
                Contatti
            </h2>
            <Link href={"https://www.linkedin.com/in/davide-ieria-dev/"}>
                <Image
                    src={"/media/icon/linkedin.svg"}
                    alt={"Linkedin"}
                    width={50}
                    height={50}
                    className="mx-auto h-auto w-auto"
                />
            </Link>
            <span className="my-auto  font-bold text-slate-600">
                davideieria1099@gmail.com
            </span>
        </section>
    );
}
