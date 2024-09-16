import Card from "@/components/layout/card";

import React from "react";

export const Project = () => {
	return (
		<section className="my-4">
			<h2 className="uppercase font-bold text-2xl mb-5 ">progetti</h2>
			<div className="w-full px-3 h-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card />
				<Card />
				<Card />
			</div>
			<button className="bg-red-600 rounded mt-3 center p-2 ms-2 hover:bg-red-300">
				click me
			</button>
		</section>
	);
};
