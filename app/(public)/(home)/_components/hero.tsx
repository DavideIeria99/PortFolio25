"use client";
import Image from "next/image";

export const Hero = () => {
    return (
        <header className="flex w-full flex-col-reverse content-center md:flex-row md:justify-evenly">
            <div className="my-auto h-full pt-5 text-center font-serif font-bold *:text-4xl md:w-1/2 md:pt-0">
                <h1>Davide Ieria</h1>
                <h2>web developer</h2>
            </div>
            <div className="mx-auto w-4/5 p-4 md:m-0 md:w-1/2">
                <Image
                    src="/media/header.png"
                    alt={"hero"}
                    height={800}
                    width={800}
                    priority
                    className="w-full"
                />
            </div>
        </header>
    );
};
