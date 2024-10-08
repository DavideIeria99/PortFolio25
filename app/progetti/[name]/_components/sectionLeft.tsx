import Image from "next/image";
import { GetImage, sectionProps } from "../action";

export const SectionLeft = ({ Sect }: sectionProps) => {
    const img = GetImage(Sect.image);

    return (
        <section className="my-10 flex flex-col  md:flex-row md:justify-between ">
            <div className=" mb-3 w-full px-10 md:mt-0 md:w-1/2 ">
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                    {Sect.title}
                </h3>
                <p className="mt-2 text-justify md:mt-20">{Sect.text}</p>
            </div>
            <Image
                src={img ?? "/media/prova.png"}
                alt={"progetto"}
                width={500}
                height={500}
                className="w-full object-contain md:w-1/2 md:object-cover "
            />
        </section>
    );
};
