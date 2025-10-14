import React from "react";

export default function Footer() {
    return (
        <footer className="mt-10 flex h-20 flex-col-reverse bg-linear-to-t from-slate-200 text-black md:flex-row md:justify-around">
            {/* <!--Copyright section--> */}
            <span className="mt-auto mb-4 items-center text-center text-slate-700">
                © {new Date().getFullYear()} Copyright:Davide Ieria
            </span>
        </footer>
    );
}
