import Image from "next/image";
import { GetImage } from "../action";
import { Database } from "@/database.types";
import NameMode from "@/utils/namemode";
import clsx from "clsx";

interface describeProps {
    describe: Database["public"]["Tables"]["describe"]["Row"];
    reverse?: boolean;
}

export default async function SectionDescribe({
    describe,
    reverse,
}: describeProps) {
    const img = await GetImage(describe.image);
    const titleName = NameMode(describe.title, "title");

    return (
        <section
            className={clsx(
                "my-10 flex flex-col-reverse gap-y-3 overflow-hidden rounded-lg border-2 border-orange-200 bg-orange-300 p-2 outline-2 outline-orange-400 md:justify-center md:gap-y-0",
                reverse ? "md:flex-row-reverse" : "md:flex-row",
            )}
        >
            {img && (
                <Image
                    src={img}
                    alt={describe.title}
                    width={500}
                    height={500}
                    priority
                    className="w-full rounded object-contain md:w-1/2 md:object-cover"
                />
            )}

            <div className="mb-3 w-full px-10 md:mb-0 md:w-1/2">
                <h3 className="text-xl font-semibold uppercase md:text-2xl">
                    {titleName}
                </h3>
                <p className="mt-2 text-justify md:mt-20">{describe.text}</p>
            </div>
        </section>
    );
}
