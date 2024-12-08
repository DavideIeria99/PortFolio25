"use client";

import Link from "next/link";
import InsertDescribe from "./insert-describe";
import { ReactElement, useEffect, useState } from "react";

interface UpsertProps {
    children: ReactElement<{
        children: React.ReactNode;
        type: string;
    }>;

    id: number;
}

export default function UpsertForm({ children, id }: UpsertProps) {
    const [SubBottom, SetSubBottom] = useState(false);

    useEffect(() => {
        if (children?.type == "p") {
            SetSubBottom(true);
        }
    }, [children?.type]);

    return (
        <>
            <button onClick={() => SetSubBottom(!SubBottom)}>
                <Link
                    href="#insert"
                    className="  rounded bg-orange-700 p-2 text-white"
                >
                    {SubBottom
                        ? "nascondi form"
                        : "inserisci un nuovo articolo"}
                </Link>
            </button>
            {children}
            {/* insert */}
            {SubBottom ? <InsertDescribe id={id} /> : ""}
        </>
    );
}
