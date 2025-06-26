import HeaderPage from "@/components/ui/header-page";
import SimpleContact from "@/components/ui/simple-contact";
import React from "react";

export default function page() {
    return (
        <main className="flex items-center justify-center">
            {/* <HeaderPage text={"contatti"} /> */}

            <section className="h-50 w-2/3 rounded border border-orange-400 bg-orange-300 inset-shadow-2xs inset-shadow-orange-300 md:w-1/2">
                <SimpleContact />
            </section>
        </main>
    );
}
