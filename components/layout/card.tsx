import Image from "next/image";
import React from "react";

interface cardProps {
	name?: string;
	image?: string;
}

export default function Card(props: cardProps) {
	return (
		<div className="relative h-auto w-full *:rounded shadow-none hover:shadow-2xl hover:shadow-gray-500">
			<div className=" w-full h-full flex justify-center items-center absolute top-0 left-0 z-10 transition-opacity opacity-0 hover:opacity-100 hover:bg-red-600/50 ">
				<span className="uppercase text-2xl font-bold bg-red-300 p-3 rounded ">
					{props.name ?? "progetto"}
				</span>
			</div>
			<Image
				src={props.image ?? "/media/prova.png"}
				alt={props.name ?? "progetto"}
				width={500}
				height={500}
				className="size-full object-cover mx-auto relative z-0"
			/>
		</div>
	);
}
