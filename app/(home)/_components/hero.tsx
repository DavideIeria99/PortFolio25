import Image from "next/image";

export const Hero = () => {
	return (
		<header className=" flex md:justify-between md:flex-row flex-col-reverse content-center  w-full">
			<div className="pt-5 md:pt-0 md:w-1/2 font-bold font-serif text-center my-auto *:text-4xl h-full ">
				<h1>Davide Ieria</h1>
				<h2>web developer</h2>
			</div>
			<div className="w-4/5 mx-auto md:m-0  md:w-1/2">
				<Image
					src="/media/header.png"
					alt={"hero"}
					height={800}
					width={800}
					className="w-full"
				/>
			</div>
		</header>
	);
};
