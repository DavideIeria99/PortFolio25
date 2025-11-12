import { Code2, MapPin, Settings } from "lucide-react";

import * as motion from "framer-motion/client";
import TitleSection from "@/components/ui/title-section";

interface cardStoryProps {
    icon: React.ReactNode;
    text: string;
}
const WhoStory: cardStoryProps[] = [
    {
        icon: <Code2 className="size-10 md:size-20" />,
        text: "junior web",
    },
    {
        icon: <Settings className="size-10 md:size-20" />,
        text: "tecnico informatico e mobile",
    },
    {
        icon: <MapPin className="size-10 md:size-20" />,
        text: "Italia",
    },
];

export const WhoIam = () => {
    return (
        <section className="my-8">
            <TitleSection title="chi sono" />
            <article className="grid w-full grid-cols-1 place-items-center gap-y-4 text-center uppercase md:grid-cols-3 md:gap-x-5 md:gap-y-0">
                {WhoStory &&
                    WhoStory.map((el, _) => (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: parseFloat(`.${_}`),
                            }}
                            key={_}
                            className="frameSection flex h-35 w-70 flex-col justify-center items-center rounded-xl md:rounded-sm"
                        >
                            {el.icon}
                            <p className="text-lg">{el.text}</p>
                        </motion.div>
                    ))}
            </article>
        </section>
    );
};
