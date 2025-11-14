import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "contatti",
};
export default function page() {
    return (
        <main className="flex items-center  justify-center">
            <section className="frameSection pb-3 inset-shadow-orange-300s h-50 w-2/3 rounded inset-shadow-2xs md:w-1/2">
                    <h2 className="text-center font-bold text-orange-600 uppercase">
                        i miei contatti
                    </h2>
                    <div className="flex h-40 flex-col items-center justify-evenly md:flex-row">
                        <Link
                            href={
                                "https://www.linkedin.com/in/davide-ieria-dev/"
                            }
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
        </main>
    );
}
