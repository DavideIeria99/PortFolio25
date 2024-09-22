import NextIntersectionObserver from "@/components/NextIntersectionObserver";
import { Framework } from "./_components/framework";
import { Hero } from "./_components/hero";
import { Project } from "./_components/project";
import { Story } from "./_components/story";
import { WhoIam } from "./_components/who-i-am";

export default function Home() {
    return (
        <>
            <Hero />
            <main className="min-h-screen w-full px-5  ">
                <WhoIam />
                <Story />

                <NextIntersectionObserver
                    rootmargin="1px"
                    thresholdValue={0}
                    classes="transition-opacity duration-200 "
                    topIn=" animate-fadeInLeft"
                    topOut="opacity-0"
                    bottomIn="animate-fadeInLeft"
                    bottomOut="opacity-0"
                >
                    <Framework />
                </NextIntersectionObserver>

                <Project />
            </main>
        </>
    );
}
