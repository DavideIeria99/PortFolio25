import Image from "next/image";

interface paramsProps {
    params: { name: string };
}

export default function page({ params }: paramsProps) {
    console.log(params);

    return (
        <main className="min-h-screen px-10">
            <h1 className="text-4xl font-bold uppercase">{params.name}</h1>
            <section className="my-10 flex justify-between">
                <Image
                    src={"/media/prova.png"}
                    alt={"progetto"}
                    width={500}
                    height={500}
                    className=" w-1/2 object-contain md:object-cover "
                />
                <div className="w-1/2 px-10 ">
                    <h3 className="text-2xl font-medium uppercase">titolo 1</h3>
                    <p className="mt-20 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus doloremque odio cum consequatur? Cumque fugit
                        illo eos iste quo! Laboriosam assumenda dicta repellat
                        dolores beatae error dolorum quidem labore quia.
                    </p>
                </div>
            </section>
            <section className="my-10 flex justify-between">
                <div className="w-1/2 px-10 ">
                    <h3 className="text-2xl font-medium uppercase">titolo 2</h3>
                    <p className="mt-20 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus doloremque odio cum consequatur? Cumque fugit
                        illo eos iste quo! Laboriosam assumenda dicta repellat
                        dolores beatae error dolorum quidem labore quia.
                    </p>
                </div>
                <Image
                    src={"/media/prova.png"}
                    alt={"progetto"}
                    width={500}
                    height={500}
                    className=" w-1/2 object-contain md:object-cover "
                />
            </section>
        </main>
    );
}
