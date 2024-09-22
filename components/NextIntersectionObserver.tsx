"use client";

import UseElementBoundaryObserver from "@/utils/Observer";
import { useEffect, useState } from "react";

interface observerProps {
    children: React.ReactNode;
    rootmargin: string;
    thresholdValue: number;
    classes: string;
    topIn: string;
    topOut: string;
    bottomIn: string;
    bottomOut: string;
}

export default function NextIntersectionObserver({
    children,
    rootmargin,
    thresholdValue,
    classes,
    topIn,
    topOut,
    bottomIn,
    bottomOut,
}: observerProps) {
    const [ref, boundary] = UseElementBoundaryObserver(
        rootmargin,
        thresholdValue,
    );
    const [className, setClassName] = useState(classes);

    useEffect(() => {
        // Update the className based on the boundary state.
        switch (boundary) {
            case "topIn":
                setClassName(`${classes} ${topIn}`);
                break;
            case "topOut":
                setClassName(`${classes} ${topOut}`);
                break;
            case "bottomIn":
                setClassName(`${classes} ${bottomIn}`);
                break;
            case "bottomOut":
                setClassName(`${classes} ${bottomOut}`);
                break;
            default:
                setClassName(`${classes} ${bottomOut}`);
                break;
        }
    }, [boundary, classes, topIn, topOut, bottomIn, bottomOut]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
