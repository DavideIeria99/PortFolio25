import Image from "next/image";
import { GetImage, sectionProps } from "../action";

export const SectionLeft = ({ Sect }: sectionProps) => {
    const img = GetImage(Sect.image);

    return (
        <section className="my-10 flex justify-between">
            <div className="w-1/2 px-10 ">
                <h3 className="text-2xl font-medium uppercase">{Sect.title}</h3>
                <p className="mt-20 text-justify">{Sect.text}</p>
            </div>
            <Image
                src={img ?? "/media/prova.png"}
                alt={"progetto"}
                width={500}
                height={500}
                className=" w-1/2 object-contain md:object-cover "
            />
        </section>
    );
};
