import SimpleContact from "@/app/(public)/contatti/_components/simple-contact";
import React from "react";

export default function Footer() {
    return (
        <footer className="mt-10  flex h-32 flex-col-reverse bg-gradient-to-t from-slate-200 text-black md:flex-row md:justify-around ">
            {/* <!--Copyright section--> */}
            <span className=" mb-4 mt-auto items-center text-center   text-slate-700  ">
                © 2024 Copyright:Davide Ieria
            </span>
            <SimpleContact />
        </footer>
    );
}
