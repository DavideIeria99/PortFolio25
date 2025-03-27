import React from "react";

export default function Loading() {
    return (
        <div className="absolute left-0 top-0 z-10 flex min-h-screen w-full items-center justify-center bg-body">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-bodyLight border-current border-r-transparent align-[-0.125em]   motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!">
                    Loading...
                </span>
            </div>
        </div>
    );
}
