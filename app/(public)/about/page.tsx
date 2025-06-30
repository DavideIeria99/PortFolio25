import HeaderPage from "@/components/ui/header-page";
import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <main className="px-30">
            <HeaderPage text={"chi sono"} />
            <article className="mt-5 grid grid-cols-1 gap-y-3 md:px-50">
                <div className="flex flex-col items-center justify-around md:flex-row">
                    <Image
                        src={"/media/fototessera.jpg"}
                        alt="foto"
                        width={120}
                        height={70}
                        className="rounded-lg border-2 border-orange-200 outline-2 outline-orange-400"
                    />
                    <p className="w-full text-wrap md:w-1/2">
                        Mi chiamo Davide Ieria, ho 26 anni e sono un junior web
                        developer da almeno 2 anni, mi sono appassionato al
                        mondo dello sviluppo attraverso dei video su youtube. Il
                        percorso per arrivare a diventare un web developer e un
                        po confusionale.
                    </p>
                </div>
                <h2>Inizi</h2>
                <p>
                    alle superiori ho frequentato l'indirizzo di amministrazione
                    ,finanza e marketing. Il primo incontro con la
                    programmazione l'ho avuto il secondo anno durante una
                    lezione in informatica dove creavamo pagine web statiche
                    usando html su un blocco note. All'inizio non sapevo cosa
                    fosse html, però mi piaceva crearli. gli anni successivi non
                    avevo più usato html, era solo quella lezione . nel corso
                    delgli anni scolastici avevo continuato con l'informatica
                    attraverso i corsi come l'Ecdl, dove li seguivo il
                    pomeriggio.
                </p>

                <h2>università</h2>
                <p>
                    dopo che mi sono diplomato in ragioneria dovevo scegliere
                    tra univeristà di economia aziendale o corsi tecnici di
                    informatica. avevo optato per l'uni, sperando che mi poteva
                    portare qualcoa, ma dopo 2 anni ho mollato perchè non
                    riuscivo a seguire i corsi e capii che non era per me l'uni.
                </p>

                <h2>tecnico pc</h2>
                <p>
                    dopo aver mollato l'uni, ho iniziato un corso di tecnico
                    pc,smartphone e tablet, e li oltre a capire come è formato
                    un computer tra hardware e software e come ripararli, ho
                    studiato un pò di programmazione teorica, sui diversi
                    linguaggi di alto e basso livello, da li mi sono
                    appassionato allo sviluppo web.
                </p>

                <h2>programmazione web</h2>
                <p>
                    all'inizio studiavo da autodidatta attraverso i video
                    yuotube, creando delle piccole pagine con html e css. dopo 3
                    mesi ero riuscito a creare una conta di compleanno con tanto
                    di stile con css e logica con js. decisi di intraprendere il
                    corso di Aulab per diventare uno fullStack web developer.
                    alla fine del corso avevo imparato diversi linguaggi con
                    approfondimento di html css e js e anche
                    php,laravel,compreso anche il funzionamento di git e gitHub
                    e di bootstrap per lo stile e mysql per il database. Alla
                    fine del corso con alcuni colleghi creammo un e-comerce con
                    tanto di login, database e possibilità di diventare relatore
                    del sito, usando anche i servizi di google per mascherare
                    alcune foto che venivano publicizzate. Subito dopo segui un
                    altro corso aulab che era orientato su React.js, dove oltre
                    a scoprire react.js,scopri anche tailwindCss. durante il
                    corso ho creato diversi progetti tra cui il pokedex. alla
                    fine del corso creammo un progetto di libreria dei
                    videogiochi usando supabase per salvare i dati degli utenti
                    come i preferiti o i commenti. nei due anni successivi
                    continuai a formarmi imparando Next.js, TailwindCss, Vue.js
                    e Python, allo stesso tempo mandando candidature per poter
                    mettere le mie conoscenze nel campo,e tenendo aggiornato il
                    mio profilo linkedin con i progetti che creavo.
                </p>
                <h2>obiettivi</h2>
                <p>
                    i miei obiettivi, per ora, sarebbe di poter iniziare a
                    lavorare e imparare l'inglese. sono una persona che può
                    lavorare sia in team ma anche in solitario e sempre
                    disponibile ad aiutare.
                </p>
            </article>
        </main>
    );
}
