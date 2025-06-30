import React from "react";

export default function HeaderPage({ text }: { text: String }) {
    return (
        <header className="mt-2 flex h-30 items-center justify-center md:h-100">
            <h1 className="h1-header w-2/3 rounded-lg border-2 border-orange-200 bg-orange-200 py-10 text-center text-orange-600 outline-2 outline-orange-400 md:w-4/5 md:p-20">
                {text}
            </h1>
        </header>
    );
}
