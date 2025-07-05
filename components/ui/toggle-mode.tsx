"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleMode({ className }: { className: string }) {
    const [icon, setIcon] = useState(<Sun />);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        if (theme === "dark") {
            setIcon(<Sun />);
        } else {
            setIcon(<Moon />);
        }
    }, [theme]);
    return (
        <button
            className={clsx(className)}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {icon}
        </button>
    );
}
