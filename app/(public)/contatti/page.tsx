import SimpleContact from "@/components/ui/simple-contact";
import React from "react";

export default function page() {
    return (
        <main className="flex items-center justify-center">
            <section className="h-50 w-2/3 rounded border-2 border-orange-200 bg-orange-300 inset-shadow-2xs inset-shadow-orange-300 outline-2 outline-orange-400 md:w-1/2">
                <SimpleContact />
            </section>
        </main>
    );
}
