import Image from "next/image";
import React from "react";

export default function SkelectroDetails() {
    return (
        <section className="mx-auto w-7/8 rounded-md border-2 border-orange-200 p-4 outline-2 outline-orange-400">
            <div className="flex animate-pulse items-center space-x-4">
                <div className="size-80 flex-1 rounded bg-orange-300">
                    <Image
                        src="/media/cover.png"
                        alt="cover"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 rounded bg-gray-600"></div>
                    <div className="space-y-3">
                        <div className="h-2 rounded bg-gray-600"></div>
                    </div>
                    <div className="h-2 rounded bg-gray-600"></div>
                    <div className="space-y-3">
                        <div className="h-2 rounded bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
