import SimpleContact from "@/components/ui/simple-contact";
import React from "react";

export default function page() {
    return (
        <main className="flex items-center justify-center">
            <section className="frameSection inset-shadow-orange-300s h-50 w-2/3 rounded inset-shadow-2xs md:w-1/2">
                <SimpleContact />
            </section>
        </main>
    );
}
