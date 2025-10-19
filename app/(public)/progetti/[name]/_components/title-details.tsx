

import React from "react";
import Tags from "./tags";

interface titleProps {
    title?: string | null;
    text?: string | null;
    link?: string | null;
    tag?: string[] | undefined;
}

export default function TitleDetails({ title,text,link,tag }: titleProps) {
    return (
        <section>
            <div className="flex items-center gap-x-3">
                <h1 className="font-black uppercase">{title}</h1>
                {link && (
                    <a
                        className="h-1/2 rounded-sm bg-orange-500 p-0.5 transition duration-200 hover:bg-orange-200 md:p-1"
                        href="#video"
                    >
                        <button className="w-full text-center font-semibold text-amber-100 capitalize hover:text-slate-600">
                            Video
                        </button>
                    </a>
                )}
            </div>
            <div className=" my-2 flex gap-3 flex-wrap">
                {tag && tag.map((el) => <Tags key={el} tag={el} />)}
            </div>

            <div>
                <p>{text}</p>
            </div>
        </section>
    );
}
