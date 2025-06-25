import React from "react";

type titleProps = {
    title: string;
};

export default function TitleSection({ title }: titleProps) {
    return <h2 className="mb-5 text-2xl font-bold uppercase">{title}</h2>;
}
