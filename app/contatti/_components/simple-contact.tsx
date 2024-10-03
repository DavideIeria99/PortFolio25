import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SimpleContact() {
    return (
        <section className="grid grid-cols-2 gap-1">
            <h2 className="col-span-2 text-center text-2xl font-bold uppercase text-orange-400">
                Contatti
            </h2>
            <Link href={"https://www.linkedin.com/in/davide-ieria-dev/"}>
                <Image
                    src={"/media/icon/linkedin.svg"}
                    alt={"Linkedin"}
                    width={50}
                    height={50}
                />
            </Link>
            <span className="my-auto  font-bold text-slate-600">
                davideieria1099@gmail.com
            </span>
        </section>
    );
}
