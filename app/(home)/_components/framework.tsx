import Image from "next/image";
import React from "react";

export const Framework = () => {
	const arrLing = [
		{
			img: "media/icon/Html.svg",
			name: "Html",
		},
		{
			img: "media/icon/CSS.svg",
			name: "Css",
		},
		{
			img: "media/icon/Js.svg",
			name: "JS",
		},
		{
			img: "media/icon/php.svg",
			name: "PHP",
		},
	];

	const arrFrame = [
		{
			img: "media/icon/Laravel.svg",
			name: "Laravel",
		},
		{
			img: "media/icon/React.svg",
			name: "React",
		},
		{
			img: "media/icon/bootstrap.svg",
			name: "bootstrap",
		},
		{
			img: "media/icon/Vue.svg",
			name: "Vue",
		},
		{
			img: "media/icon/Tailwind.svg",
			name: "Tailwind",
		},
		{
			img: "media/icon/nextjs.svg",
			name: "Nextjs",
		},
	];
	return (
		<section className=" my-4 ">
			<h2 className="uppercase font-bold text-2xl mb-5">
				FrameWork e linguaggi
			</h2>
			<div className=" flex justify-around uppercase font-semibold w-full  ">
				<div className="w-1/3 ">
					<h3 className="mb-4 text-xl">linguaggi</h3>
					<div className="grid grid-cols-2">
						{arrLing.map((el) => {
							return (
								<Image
									key={el.name}
									width={500}
									height={500}
									src={el.img}
									alt={el.name}
									className="size-24"
								/>
							);
						})}
					</div>
				</div>
				<div className="w-1/3 ">
					<h3 className="mb-4 text-xl">Framework</h3>
					<div className="grid grid-cols-3">
						{arrFrame.map((el) => {
							return (
								<Image
									key={el.name}
									width={500}
									height={500}
									src={el.img}
									alt={el.name}
									className="size-24"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
