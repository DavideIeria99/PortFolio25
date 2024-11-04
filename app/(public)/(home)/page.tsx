import { Framework } from "./_components/framework";
import { Hero } from "./_components/hero";
import { Project } from "./_components/project";
import { Story } from "./_components/story";
import { WhoIam } from "./_components/who-i-am";

export default function Home() {
    return (
        <>
            <Hero />
            <main className=" px-5 ">
                <WhoIam />
                <Story />
                <Framework />
                <Project />
            </main>
        </>
    );
}
