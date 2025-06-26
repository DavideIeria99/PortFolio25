import HeaderPage from "@/components/ui/header-page";
import React from "react";

export default function page() {
    return (
        <main className="border px-30">
            <HeaderPage text={"about"} />
            <article className="mt-5 grid grid-cols-1 gap-y-3 md:px-50">
                <h2>Inizi</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga porro placeat sequi reprehenderit modi laboriosam
                    repudiandae dolore, dolorum obcaecati itaque tempora
                    quibusdam saepe sint esse suscipit blanditiis quod ab
                    molestiae.
                </p>

                <h2>percorso di studi</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga porro placeat sequi reprehenderit modi laboriosam
                    repudiandae dolore, dolorum obcaecati itaque tempora
                    quibusdam saepe sint esse suscipit blanditiis quod ab
                    molestiae.
                </p>

                <h2>obiettivi</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis suscipit itaque officia error beatae impedit
                    aperiam, tempore alias culpa. Nisi minima, impedit eaque
                    ullam fugit aspernatur in harum. Illo, exercitationem!
                </p>

                <h2>tempo libero</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, quaerat maiores minima atque rerum illum
                    doloribus laudantium obcaecati ipsam veritatis ex saepe
                    consequatur at, similique cum ullam qui mollitia sint?
                </p>
            </article>
        </main>
    );
}
