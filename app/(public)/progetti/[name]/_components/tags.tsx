"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

export default function Tags({ tag }: { tag: string }) {
    const [color, setColor] = useState<string>("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        switch (tag) {
            case "laravel":
                setColor("bg-red-500 border-red-600");
                break;
            case "bootstrap":
                setColor("bg-[#7911F7] text-white border-[#8312FB]");
                break;
            case "React.js":
                setColor("bg-[#58C4DC] border-cyan-500");
                break;
            case "mysql":
                setColor("bg-[#027590] text-white border-[#027590]");
                break;
            case "javascript":
                setColor("bg-yellow-500 border-yellow-600");
                break;
            case "css":
                setColor("bg-[#66309A] border-[#66309A] text-white");
                break;
            case "tailwindcss":
                setColor("bg-[#35BEF8] border-[#35BEF8] text-white");
                break;
            case "html":
                setColor("bg-orange-500 border-orange-600 ");
                break;
            case "next.js":
                setColor("bg-neutral-600 text-slate-100 border-black ");
                break;
            case "supabase":
                setColor("bg-[#1C1C1C] text-[#34AF77] border-[#34AF77]");
                break;
            case "typescript":
                setColor("bg-[#3178C6] border-white text-white");
                break;
            case "python":
                setColor("bg-[#FFD442] border-white text-[#3470A0]");
                break;
            case "wordpress":
                setColor("bg-[#3858E9] border-white text-white");
                break;
            default:
                setColor("bg-slate-800 border-slat-700");
                break;
        }
        setLoading(false);
    }, [tag]);
    return (
        <>
            {loading ? (
                ""
            ) : (
                <p className={clsx("rounded-xl  border-2 px-2", color)}>{tag}</p>
            )}
        </>
    );
}
