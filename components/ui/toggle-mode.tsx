"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleMode({ className }: { className?: string }) {
    const getInitialTheme = (): "light" | "dark" => {
        if (typeof window === "undefined") return "light";
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    };

    const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const icon = theme === "dark" ? <Sun /> : <Moon />;

    return (
        <button
            className={clsx(className)}
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            type="button"
        >
            {icon}
        </button>
    );
}
