import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SimpleContact() {
    return (
        <section className="mb-3">
            <h2 className="text-center font-bold text-orange-400 uppercase">
                i miei contatti
            </h2>
            <div className="flex h-40 flex-col items-center justify-evenly md:flex-row">
                <Link
                    href={"https://www.linkedin.com/in/davide-ieria-dev/"}
                    className="size-10 md:size-20"
                >
                    <Image
                        src={"/media/icon/linkedin.svg"}
                        width={100}
                        height={100}
                        alt={"Linkedin"}
                        className="size-full object-cover md:inline"
                    />
                </Link>
                <span className="mx-auto font-bold text-slate-600 md:col-span-1 md:mx-0">
                    davideieria1099@gmail.com
                </span>
            </div>
        </section>
    );
}
