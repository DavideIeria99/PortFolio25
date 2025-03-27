import { HomeIcon, MapsIcon, TecnicIcon, WebIcon } from "./Icons";
import * as motion from "framer-motion/client";

interface cardStoryProps {
    Children: React.ReactNode;
    text: string;
}
const WhoStory: cardStoryProps[] = [
    {
        Children: <WebIcon className="mx-auto w-10 md:w-20" />,
        text: "junior web",
    },
    {
        Children: <TecnicIcon className="mx-auto w-10 md:w-20" />,
        text: "tecnico pc smartphone tablet",
    },
    {
        Children: <MapsIcon className="mx-auto w-10 md:w-20" />,
        text: "italiano",
    },
    {
        Children: <HomeIcon className="w-10 md:w-20" />,
        text: "sede o remoto",
    },
];

export const WhoIam = () => {
    return (
        <section className="my-8">
            <h2 className="mb-5 text-2xl font-bold uppercase">Chi sono</h2>
            <div className="gap grid w-full grid-cols-2 gap-x-3 gap-y-6 text-center uppercase md:grid-cols-4 md:gap-4">
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
                            className="w-full rounded-sm border-b-4 border-black"
                        >
                            <div className="flex justify-center">
                                {el.Children}
                            </div>
                            <p className="text-lg">{el.text}</p>
                        </motion.div>
                    ))}
            </div>
        </section>
    );
};
