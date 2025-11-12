import clsx from "clsx";
import React from "react";

type titleProps = {
    title: string;
    className?: string;
};

export default function TitleSection({ title, className }: titleProps) {
    return <h2 className={clsx("mb-5 text-2xl font-bold uppercase", className)}>{title}</h2>;
}
