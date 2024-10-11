import Image from "next/image";
import { GetImage, sectionProps } from "../action";

export const SectionRight = async ({ Sect }: sectionProps) => {
    const img = GetImage(Sect.image);
    return (
        <section className="my-10 flex flex-col-reverse  md:flex-row md:justify-center">
            <Image
                src={img}
                alt={Sect.title}
                width={500}
                height={500}
                className=" w-full object-contain md:w-1/2 md:object-cover "
            />
            <div className="mb-3 w-full px-10  md:mb-0 md:w-1/2 ">
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                    {Sect.title}
                </h3>
                <p className="mt-2 text-justify md:mt-20">{Sect.text}</p>
            </div>
        </section>
    );
};
