"use server";
import Project from "../_components/project";
import ButtonAdmin from "../_components/button_admin";
import { Suspense } from "react";

export default async function Admin() {
    return (
        <main className=" px-2">
            <section className="flex h-auto w-full flex-col md:h-screen md:flex-row">
                <ButtonAdmin />
                {/*@todo progetti */}
                <Suspense fallback="caricamento...">
                    <Project />
                </Suspense>
            </section>
        </main>
    );
}
