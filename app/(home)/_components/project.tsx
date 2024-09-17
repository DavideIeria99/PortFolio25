import Card from "@/components/layout/card";
import Link from "next/link";

import React from "react";

export const Project = () => {
    return (
        <section className="justify my-4 flex flex-col items-center ">
            <h2 className="mb-5 w-full  text-2xl font-bold uppercase ">
                progetti
            </h2>
            <div className="gird-cols-1 grid h-auto w-full gap-6 px-3 md:grid-cols-2 lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
            </div>
            <Link href={"#"} className="py-4">
                <button className="rounded bg-[#FFE5CA] p-2 hover:bg-slate-200">
                    alti progetti
                </button>
            </Link>
        </section>
    );
};
